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
   */
  async validatePassword(password: string): Promise<boolean> {
    const hash = await this.sha1(password);
    
    // Try multiple sources for password hash (in priority order)
    // 1. Cloudflare environment variable (exposed via Vite define) // I got output as undefined here
    const cloudflareHash = (globalThis as any).__PASSWORD_HASH__;
    // 2. Direct import.meta.env access (fallback)
    const metaHash = import.meta.env['VITE_PASSWORD_HASH'] as string | undefined;
    // 3. Environment file
    const envHash = environment.passwordHash;

    const passTest = import.meta.env['PASSWORD_HASH'] as string | undefined;
    console.log('test pass : ', passTest);
    
    return (
      hash === cloudflareHash ||
      hash === metaHash ||
      hash === envHash
    );
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

    // Verify hash matches
    return cached.hash === environment.passwordHash;
  }

  /**
   * Save successful authentication to localStorage
   */
  saveAuth(): void {
    const cache: PasswordCache = {
      hash: environment.passwordHash,
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
