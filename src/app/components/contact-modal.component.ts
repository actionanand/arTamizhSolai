import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import environment from '../../environments/environment';

@Component({
  selector: 'app-contact-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal-backdrop" (click)="onClose()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h2>Contact Me</h2>
          <button class="close-button" (click)="onClose()" aria-label="Close">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div class="modal-body">
          <iframe
            [src]="formUrl"
            width="100%"
            height="600"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >Loading…</iframe>
        </div>
      </div>
    </div>
  `,
  styles: `
    .modal-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      padding: 1rem;
    }

    .modal-content {
      background: white;
      border-radius: 12px;
      width: 100%;
      max-width: 700px;
      max-height: 90vh;
      display: flex;
      flex-direction: column;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem;
      border-bottom: 1px solid #dee2e6;
    }

    .modal-header h2 {
      margin: 0;
      font-size: 1.5rem;
      color: #212529;
    }

    .close-button {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
      color: #6c757d;
      transition: color 0.2s ease;
      width: 32px;
      height: 32px;
    }

    .close-button:hover {
      color: #212529;
    }

    .close-button svg {
      width: 24px;
      height: 24px;
      stroke-width: 2;
    }

    .modal-body {
      padding: 1rem;
      overflow: auto;
      flex: 1;
    }

    iframe {
      border: none;
      border-radius: 4px;
    }

    @media (max-width: 768px) {
      .modal-content {
        max-height: 95vh;
      }

      .modal-body iframe {
        height: 500px;
      }
    }
  `
})
export class ContactModalComponent {
  @Output() close = new EventEmitter<void>();
  formUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    const googleFormUrl = `https://docs.google.com/forms/d/e/${environment.googleFormId}/viewform?embedded=true`;
    this.formUrl = this.sanitizer.bypassSecurityTrustResourceUrl(googleFormUrl);
  }

  onClose() {
    this.close.emit();
  }
}
