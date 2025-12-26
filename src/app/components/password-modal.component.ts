import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-password-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="modal-overlay" *ngIf="isVisible()" (click)="onOverlayClick($event)">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h2>🔒 Protected Content</h2>
          <button class="close-btn" (click)="cancel()" aria-label="Close">&times;</button>
        </div>
        
        <div class="modal-body">
          <p class="modal-message">This article is password protected. Please enter the password to continue.</p>
          
          <div class="password-input-group">
            <input
              #passwordInput
              [type]="showPassword() ? 'text' : 'password'"
              [(ngModel)]="password"
              (keyup.enter)="submit()"
              placeholder="Enter password"
              class="password-input"
              [class.error]="errorMessage()"
              autofocus
            />
            <button 
              type="button" 
              class="toggle-password-btn"
              (click)="togglePasswordVisibility()"
              [attr.aria-label]="showPassword() ? 'Hide password' : 'Show password'"
            >
              <span *ngIf="!showPassword()">👁️</span>
              <span *ngIf="showPassword()">🙈</span>
            </button>
          </div>
          
          <p class="error-message" *ngIf="errorMessage()">{{ errorMessage() }}</p>
        </div>
        
        <div class="modal-footer">
          <button class="btn btn-cancel" (click)="cancel()">Cancel</button>
          <button class="btn btn-submit" (click)="submit()" [disabled]="isValidating()">
            {{ isValidating() ? 'Validating...' : 'Unlock' }}
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      animation: fadeIn 0.2s ease-in-out;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .modal-content {
      background: white;
      border-radius: 12px;
      width: 90%;
      max-width: 480px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      animation: slideUp 0.3s ease-out;
      overflow: hidden;
    }

    @keyframes slideUp {
      from {
        transform: translateY(20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    .modal-header {
      padding: 24px 24px 16px;
      border-bottom: 1px solid #e5e7eb;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .modal-header h2 {
      margin: 0;
      font-size: 1.5rem;
      color: #111827;
      font-weight: 600;
    }

    .close-btn {
      background: none;
      border: none;
      font-size: 2rem;
      color: #6b7280;
      cursor: pointer;
      padding: 0;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      transition: all 0.2s;
    }

    .close-btn:hover {
      background-color: #f3f4f6;
      color: #111827;
    }

    .modal-body {
      padding: 24px;
    }

    .modal-message {
      margin: 0 0 20px;
      color: #4b5563;
      font-size: 1rem;
      line-height: 1.5;
    }

    .password-input-group {
      position: relative;
      display: flex;
      align-items: center;
    }

    .password-input {
      width: 100%;
      padding: 12px 48px 12px 16px;
      font-size: 1rem;
      border: 2px solid #d1d5db;
      border-radius: 8px;
      transition: all 0.2s;
      font-family: inherit;
    }

    .password-input:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }

    .password-input.error {
      border-color: #ef4444;
    }

    .password-input.error:focus {
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }

    .toggle-password-btn {
      position: absolute;
      right: 8px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      transition: background-color 0.2s;
      outline: none;
    }

    .toggle-password-btn:hover {
      background-color: #f3f4f6;
    }

    .toggle-password-btn:focus {
      outline: none;
    }

    .toggle-password-btn:active {
      outline: none;
    }

    .error-message {
      margin: 12px 0 0;
      color: #ef4444;
      font-size: 0.875rem;
      font-weight: 500;
    }

    .modal-footer {
      padding: 16px 24px 24px;
      display: flex;
      justify-content: flex-end;
      gap: 12px;
    }

    .btn {
      padding: 10px 24px;
      font-size: 1rem;
      font-weight: 500;
      border-radius: 8px;
      border: none;
      cursor: pointer;
      transition: all 0.2s;
      font-family: inherit;
    }

    .btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .btn-cancel {
      background-color: #f3f4f6;
      color: #374151;
    }

    .btn-cancel:hover:not(:disabled) {
      background-color: #e5e7eb;
    }

    .btn-submit {
      background-color: #3b82f6;
      color: white;
    }

    .btn-submit:hover:not(:disabled) {
      background-color: #2563eb;
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
    }

    @media (max-width: 640px) {
      .modal-content {
        width: 95%;
        margin: 16px;
      }

      .modal-header h2 {
        font-size: 1.25rem;
      }

      .modal-body {
        padding: 20px;
      }

      .modal-footer {
        padding: 12px 20px 20px;
      }
    }
  `]
})
export class PasswordModalComponent {
  private authService = inject(AuthService);

  isVisible = signal(false);
  password = '';
  showPassword = signal(false);
  errorMessage = signal('');
  isValidating = signal(false);
  
  private resolvePromise?: (value: boolean) => void;

  /**
   * Show the modal and return a promise that resolves when user submits or cancels
   */
  show(): Promise<boolean> {
    this.isVisible.set(true);
    this.password = '';
    this.showPassword.set(false);
    this.errorMessage.set('');
    this.isValidating.set(false);

    return new Promise<boolean>((resolve) => {
      this.resolvePromise = resolve;
    });
  }

  /**
   * Hide the modal
   */
  hide(): void {
    this.isVisible.set(false);
    this.password = '';
    this.errorMessage.set('');
  }

  /**
   * Toggle password visibility
   */
  togglePasswordVisibility(): void {
    this.showPassword.set(!this.showPassword());
  }

  /**
   * Handle overlay click to close modal
   */
  onOverlayClick(event: MouseEvent): void {
    this.cancel();
  }

  /**
   * Submit password for validation
   */
  async submit(): Promise<void> {
    if (!this.password.trim()) {
      this.errorMessage.set('Please enter a password');
      return;
    }

    this.isValidating.set(true);
    this.errorMessage.set('');

    try {
      const validatedHash = await this.authService.validatePassword(this.password);
      
      if (validatedHash) {
        this.authService.saveAuth(validatedHash);
        this.hide();
        this.resolvePromise?.(true);
      } else {
        this.errorMessage.set('Incorrect password. Please try again.');
        this.password = '';
      }
    } catch (error) {
      this.errorMessage.set('An error occurred. Please try again.');
      console.error('Password validation error:', error);
    } finally {
      this.isValidating.set(false);
    }
  }

  /**
   * Cancel and close the modal
   */
  cancel(): void {
    this.hide();
    this.resolvePromise?.(false);
  }
}
