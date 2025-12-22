import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { PasswordModalComponent } from '../components/password-modal.component';
import PostAttributes from '../post-attributes';

/**
 * Guard to protect routes that require password authentication.
 * Checks if the blog post has enableLock set to true in frontmatter.
 * If locked, prompts for password before allowing access.
 */
export const authGuard: CanActivateFn = async (route: ActivatedRouteSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Get post data from route resolver
  const postData = route.data['post'] as PostAttributes | undefined;

  // If no post data or enableLock is not set, allow access
  if (!postData || !postData.enableLock) {
    return true;
  }

  // Check if user is already authenticated
  if (authService.isAuthenticated()) {
    return true;
  }

  // Need to prompt for password
  // We'll use a modal component for this
  // Since guards run before component initialization, we need to handle this differently
  // Store the intention to show password modal in session
  sessionStorage.setItem('pendingAuth', 'true');
  sessionStorage.setItem('pendingAuthRoute', route.url.toString());
  
  return true; // Allow navigation, but component will handle auth
};

/**
 * Injectable service to handle password modal in components
 */
export class AuthGuardService {
  private authService = inject(AuthService);
  private modalComponent?: PasswordModalComponent;

  setModalComponent(component: PasswordModalComponent): void {
    this.modalComponent = component;
  }

  async checkAndPromptAuth(postAttributes: PostAttributes): Promise<boolean> {
    // If lock is not enabled, allow access
    if (!postAttributes.enableLock) {
      return true;
    }

    // Check if already authenticated
    if (this.authService.isAuthenticated()) {
      return true;
    }

    // Prompt for password
    if (!this.modalComponent) {
      console.error('Password modal component not set');
      return false;
    }

    return await this.modalComponent.show();
  }

  clearPendingAuth(): void {
    sessionStorage.removeItem('pendingAuth');
    sessionStorage.removeItem('pendingAuthRoute');
  }

  hasPendingAuth(): boolean {
    return sessionStorage.getItem('pendingAuth') === 'true';
  }
}
