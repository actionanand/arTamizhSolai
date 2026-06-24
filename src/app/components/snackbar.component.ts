import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CROSS } from '../../data/svg/svg-images';
import { SnackbarService } from '../services/snackbar.service';

@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (snackbar.message(); as message) {
      <div
        class="snackbar"
        [class.snackbar--success]="message.type === 'success'"
        [class.snackbar--error]="message.type === 'error'"
        [class.snackbar--info]="message.type === 'info'"
        role="status"
        aria-live="polite"
      >
        <span class="snackbar__icon" aria-hidden="true">
          @switch (message.type) {
            @case ('success') {
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            }
            @case ('error') {
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v6" />
                <path d="M12 17h.01" />
              </svg>
            }
            @default {
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 11v6" />
                <path d="M12 7h.01" />
              </svg>
            }
          }
        </span>
        <span class="snackbar__text">{{ message.text }}</span>
        <button class="snackbar__close" type="button" (click)="snackbar.dismiss()" aria-label="Dismiss message">
          <span class="snackbar__close-icon" [innerHTML]="crossIcon"></span>
        </button>
      </div>
    }
  `,
  styles: `
    .snackbar {
      position: fixed;
      left: 50%;
      bottom: 1.5rem;
      z-index: 10000;
      display: grid;
      grid-template-columns: 24px minmax(0, 1fr) 32px;
      gap: 0.75rem;
      align-items: center;
      width: min(calc(100vw - 2rem), 520px);
      padding: 0.875rem 0.875rem 0.875rem 1rem;
      color: #fff;
      background: #212529;
      border-radius: 8px;
      box-shadow: 0 18px 40px rgba(0, 0, 0, 0.24);
      transform: translateX(-50%);
      animation: snackbar-in 180ms ease-out;
    }

    .snackbar--success {
      background: #166534;
    }

    .snackbar--error {
      background: #b91c1c;
    }

    .snackbar--info {
      background: #1d4ed8;
    }

    .snackbar__icon,
    .snackbar__close {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .snackbar__icon svg,
    .snackbar__close-icon,
    .snackbar__close-icon :where(svg) {
      width: 20px;
      height: 20px;
    }

    .snackbar__icon svg {
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .snackbar__close-icon {
      display: inline-flex;
      color: currentColor;
    }

    .snackbar__text {
      min-width: 0;
      font-size: 0.95rem;
      line-height: 1.4;
      overflow-wrap: anywhere;
    }

    .snackbar__close {
      width: 32px;
      height: 32px;
      border: 0;
      border-radius: 6px;
      color: inherit;
      background: rgba(255, 255, 255, 0.12);
      cursor: pointer;
      transition: background 0.2s ease;
    }

    .snackbar__close:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    @keyframes snackbar-in {
      from {
        opacity: 0;
        transform: translate(-50%, 12px);
      }

      to {
        opacity: 1;
        transform: translate(-50%, 0);
      }
    }

    @media (max-width: 640px) {
      .snackbar {
        bottom: 1rem;
      }
    }
  `,
})
export class SnackbarComponent {
  protected readonly snackbar = inject(SnackbarService);
  protected readonly crossIcon: SafeHtml;

  private readonly sanitizer = inject(DomSanitizer);

  constructor() {
    this.crossIcon = this.sanitizer.bypassSecurityTrustHtml(CROSS);
  }
}
