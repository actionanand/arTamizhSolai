import { Injectable } from '@angular/core';

// Import environment files conditionally based on build mode
import devEnvironment from '../../environments/environment';
import prodEnvironment from '../../environments/environment.prod';

// Select environment based on production flag
const environment = import.meta.env.PROD ? prodEnvironment : devEnvironment;

interface PasswordCache {
  hash: string;
  timestamp: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly STORAGE_KEY = 'blog_auth_cache';
  private readonly EXPIRY_TIME = environment.expiryTime;

  constructor() { }

  /**
   * Convert string to SHA-1 hash
   */
  async sha1(message: string): Promise<string> {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-1', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
  }

  /**
   * Validate password against stored hash
   * Returns the successful hash if valid, null otherwise
   */
  async validatePassword(password: string): Promise<string | null> {
    const hash = await this.sha1(password);
    
    // Try multiple sources for password hash (in priority order)
    // 1. Cloudflare environment variable (exposed via Vite define), I get undefined value always for this.
    const cloudflareHash = (globalThis as any).__PASSWORD_HASH__;
    // 2. Direct import.meta.env access (fallback)
    const metaHash = import.meta.env['VITE_PASSWORD_HASH'] as string | undefined;
    // 3. Additional variable for user password hash
    const userPassHash = import.meta.env['VITE_USER_PASS_HASH'] as string | undefined;
    // 4. Environment file
    const envHash = environment.passwordHash;
   
    // Return the hash that matches, or null if no match
    if (hash === cloudflareHash && cloudflareHash) return cloudflareHash;
    if (hash === metaHash && metaHash) return metaHash;
    if (hash === userPassHash && userPassHash) return userPassHash;
    if (hash === envHash && envHash) return envHash;
    
    return null;
  }

  /**
   * Check if user has valid cached authentication
   */
  isAuthenticated(): boolean {
    const cached = this.getCachedAuth();
    if (!cached) {
      return false;
    }

    // Check if cache has expired
    const now = Date.now();
    if (now - cached.timestamp > this.EXPIRY_TIME) {
      this.clearCache();
      return false;
    }

    // Verify saved hash against all possible sources (same way validatePassword does)
    const cloudflareHash = (globalThis as any).__PASSWORD_HASH__;
    const metaHash = import.meta.env['VITE_PASSWORD_HASH'] as string | undefined;
    const userPassHash = import.meta.env['VITE_USER_PASS_HASH'] as string | undefined;
    const envHash = environment.passwordHash;

    return (
      cached.hash === cloudflareHash ||
      cached.hash === metaHash ||
      cached.hash === userPassHash ||
      cached.hash === envHash
    );
  }

  /**
   * Save successful authentication to localStorage
   * @param authenticatedHash - The hash that was used for successful validation
   */
  saveAuth(authenticatedHash: string): void {
    const cache: PasswordCache = {
      hash: authenticatedHash,
      timestamp: Date.now()
    };
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(cache));
  }

  /**
   * Get cached authentication
   */
  private getCachedAuth(): PasswordCache | null {
    try {
      const cached = localStorage.getItem(this.STORAGE_KEY);
      if (!cached) {
        return null;
      }
      return JSON.parse(cached) as PasswordCache;
    } catch {
      return null;
    }
  }

  /**
   * Clear authentication cache
   */
  clearCache(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }

  /**
   * Get remaining time before cache expires (in milliseconds)
   */
  getRemainingTime(): number {
    const cached = this.getCachedAuth();
    if (!cached) {
      return 0;
    }
    const elapsed = Date.now() - cached.timestamp;
    return Math.max(0, this.EXPIRY_TIME - elapsed);
  }
}
