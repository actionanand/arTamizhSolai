import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import environment from '../../environments/environment';
import { SnackbarService } from '../services/snackbar.service';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  inquiryPurpose: string;
  contentUrl: string;
  message: string;
}

@Component({
  selector: 'app-contact-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="modal-backdrop" (click)="onClose()">
      <section class="modal-content" (click)="$event.stopPropagation()" aria-labelledby="contact-modal-title">
        <div class="modal-header">
          <div>
            <p class="modal-kicker">Get in touch</p>
            <h2 id="contact-modal-title">Contact Me</h2>
          </div>
          <button class="close-button" type="button" (click)="onClose()" aria-label="Close">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <form class="contact-form" #contactForm="ngForm" (ngSubmit)="onSubmit(contactForm)">
          <div class="form-grid">
            <label class="form-field">
              <span>Name <span aria-hidden="true">*</span></span>
              <input
                #name="ngModel"
                type="text"
                name="name"
                [(ngModel)]="formData.name"
                required
                autocomplete="name"
                placeholder="Your name"
              />
              @if (name.invalid && name.touched) {
                <small>Name is required.</small>
              }
            </label>

            <label class="form-field">
              <span>Email <span aria-hidden="true">*</span></span>
              <input
                #email="ngModel"
                type="email"
                name="email"
                [(ngModel)]="formData.email"
                required
                email
                autocomplete="email"
                placeholder="you@example.com"
              />
              @if (email.invalid && email.touched) {
                <small>Please enter a valid email address.</small>
              }
            </label>

            <label class="form-field">
              <span>Phone number</span>
              <input
                type="tel"
                name="phone"
                [(ngModel)]="formData.phone"
                autocomplete="tel"
                placeholder="Optional"
              />
            </label>

            <label class="form-field">
              <span>Purpose <span aria-hidden="true">*</span></span>
              <select
                #purpose="ngModel"
                name="inquiryPurpose"
                [(ngModel)]="formData.inquiryPurpose"
                required
              >
                <option value="" disabled>Select a purpose</option>
                @for (option of inquiryPurposeOptions; track option) {
                  <option [value]="option">{{ option }}</option>
                }
              </select>
              @if (purpose.invalid && purpose.touched) {
                <small>Please select a purpose.</small>
              }
            </label>

            <label class="form-field form-field--full">
              <span>Content URL</span>
              <input
                type="url"
                name="contentUrl"
                [(ngModel)]="formData.contentUrl"
                inputmode="url"
                placeholder="Optional"
              />
            </label>

            <label class="form-field form-field--full">
              <span>Message <span aria-hidden="true">*</span></span>
              <textarea
                #message="ngModel"
                name="message"
                [(ngModel)]="formData.message"
                required
                rows="5"
                placeholder="Please reply to my message!"
              ></textarea>
              @if (message.invalid && message.touched) {
                <small>Message is required.</small>
              }
            </label>
          </div>

          <div class="modal-actions">
            <button class="secondary-button" type="button" (click)="onClose()" [disabled]="isSubmitting()">
              Cancel
            </button>
            <button class="submit-button" type="submit" [disabled]="isSubmitting()">
              @if (isSubmitting()) {
                <span class="spinner" aria-hidden="true"></span>
                Sending...
              } @else {
                Send Message
              }
            </button>
          </div>
        </form>
      </section>
    </div>
  `,
  styles: `
    .modal-backdrop {
      position: fixed;
      inset: 0;
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      background: rgba(33, 37, 41, 0.58);
    }

    .modal-content {
      display: flex;
      flex-direction: column;
      width: min(100%, 680px);
      max-height: 92vh;
      overflow: hidden;
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.28);
    }

    .modal-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;
      padding: 1.5rem 1.5rem 1.25rem;
      border-bottom: 1px solid #dee2e6;
    }

    .modal-kicker {
      margin: 0 0 0.25rem;
      color: #6c757d;
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .modal-header h2 {
      margin: 0;
      color: #212529;
      font-size: 1.55rem;
      line-height: 1.2;
    }

    .close-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border: 0;
      border-radius: 6px;
      color: #6c757d;
      background: #f1f3f5;
      cursor: pointer;
      transition: color 0.2s ease, background 0.2s ease;
    }

    .close-button:hover {
      color: #212529;
      background: #e9ecef;
    }

    .close-button svg {
      width: 22px;
      height: 22px;
      stroke-width: 2;
    }

    .contact-form {
      overflow: auto;
      padding: 1.5rem;
    }

    .form-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1rem;
    }

    .form-field {
      display: flex;
      min-width: 0;
      flex-direction: column;
      gap: 0.45rem;
      color: #212529;
      font-size: 0.9rem;
      font-weight: 600;
    }

    .form-field--full {
      grid-column: 1 / -1;
    }

    .form-field span span {
      color: #dc3545;
    }

    .form-field input,
    .form-field select,
    .form-field textarea {
      width: 100%;
      border: 1px solid #ced4da;
      border-radius: 7px;
      padding: 0.75rem 0.85rem;
      color: #212529;
      background: #fff;
      font: inherit;
      font-weight: 400;
      line-height: 1.4;
      transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }

    .form-field select {
      cursor: pointer;
    }

    .form-field textarea {
      min-height: 130px;
      resize: vertical;
    }

    .form-field input::placeholder,
    .form-field textarea::placeholder {
      color: #868e96;
    }

    .form-field input:focus,
    .form-field select:focus,
    .form-field textarea:focus {
      outline: none;
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.18);
    }

    .form-field input.ng-invalid.ng-touched,
    .form-field select.ng-invalid.ng-touched,
    .form-field textarea.ng-invalid.ng-touched {
      border-color: #dc3545;
    }

    .form-field small {
      color: #dc3545;
      font-size: 0.8rem;
      font-weight: 500;
    }

    .modal-actions {
      display: flex;
      justify-content: flex-end;
      gap: 0.75rem;
      margin-top: 1.5rem;
      padding-top: 1.25rem;
      border-top: 1px solid #e9ecef;
    }

    .secondary-button,
    .submit-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      min-height: 42px;
      border-radius: 7px;
      padding: 0.65rem 1.15rem;
      font-weight: 700;
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
    }

    .secondary-button {
      border: 1px solid #ced4da;
      color: #495057;
      background: #fff;
    }

    .submit-button {
      border: 0;
      color: #fff;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }

    .secondary-button:hover:not(:disabled),
    .submit-button:hover:not(:disabled) {
      transform: translateY(-1px);
    }

    .submit-button:hover:not(:disabled) {
      box-shadow: 0 8px 22px rgba(102, 126, 234, 0.28);
    }

    .secondary-button:disabled,
    .submit-button:disabled {
      opacity: 0.68;
      cursor: not-allowed;
    }

    .spinner {
      width: 18px;
      height: 18px;
      border: 2px solid rgba(255, 255, 255, 0.38);
      border-top-color: #fff;
      border-radius: 50%;
      animation: spin 800ms linear infinite;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    @media (max-width: 640px) {
      .modal-backdrop {
        align-items: flex-end;
        padding: 0;
      }

      .modal-content {
        width: 100%;
        max-height: 94vh;
        border-radius: 10px 10px 0 0;
      }

      .modal-header,
      .contact-form {
        padding: 1.25rem;
      }

      .form-grid {
        grid-template-columns: 1fr;
      }

      .modal-actions {
        flex-direction: column-reverse;
      }

      .secondary-button,
      .submit-button {
        width: 100%;
      }
    }
  `,
})
export class ContactModalComponent {
  @Output() close = new EventEmitter<void>();

  protected readonly isSubmitting = signal(false);
  protected readonly inquiryPurposeOptions = [
    'Content-related question',
    'Correction in content',
    'Interested in contributing content',
    'Collaboration opportunity',
    'Suggestion or feedback',
    'General contact',
  ];

  protected formData: ContactFormData = this.createEmptyForm();

  private readonly snackbar = inject(SnackbarService);
  private readonly entryIds = {
    name: 'entry.2005620554',
    email: 'entry.1045781291',
    phone: 'entry.1166974658',
    inquiryPurpose: 'entry.1730206658',
    contentUrl: 'entry.779049869',
    message: 'entry.839337160',
  };

  onClose(): void {
    if (!this.isSubmitting()) {
      this.close.emit();
    }
  }

  protected onSubmit(contactForm: NgForm): void {
    contactForm.control.markAllAsTouched();

    if (contactForm.invalid) {
      this.snackbar.error('Please complete the required contact fields.');
      return;
    }

    this.isSubmitting.set(true);
    this.snackbar.info('Sending your message...');
    this.submitToGoogleForm();
  }

  private submitToGoogleForm(): void {
    const formUrl = `https://docs.google.com/forms/d/e/${environment.googleFormId}/formResponse`;
    const formBody = new URLSearchParams();

    formBody.append(this.entryIds.name, this.formData.name.trim());
    formBody.append(this.entryIds.email, this.formData.email.trim());
    formBody.append(this.entryIds.phone, this.formData.phone.trim());
    formBody.append(this.entryIds.inquiryPurpose, this.formData.inquiryPurpose);
    formBody.append(this.entryIds.contentUrl, this.formData.contentUrl.trim());
    formBody.append(this.entryIds.message, this.formData.message.trim());

    fetch(formUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody.toString(),
    })
      .then(() => {
        this.isSubmitting.set(false);
        this.formData = this.createEmptyForm();
        this.snackbar.success('Your message has been sent successfully.');
        this.close.emit();
      })
      .catch((error: unknown) => {
        console.error('Contact form submission failed:', error);
        this.isSubmitting.set(false);
        this.snackbar.error('Unable to send your message. Please try again.');
      });
  }

  private createEmptyForm(): ContactFormData {
    return {
      name: '',
      email: '',
      phone: '',
      inquiryPurpose: '',
      contentUrl: '',
      message: '',
    };
  }
}
