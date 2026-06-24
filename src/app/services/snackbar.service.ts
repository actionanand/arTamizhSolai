import { Injectable, signal } from '@angular/core';

export type SnackbarType = 'info' | 'success' | 'error';

export interface SnackbarMessage {
  id: number;
  text: string;
  type: SnackbarType;
}

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  private readonly currentMessage = signal<SnackbarMessage | null>(null);
  private hideTimer: ReturnType<typeof setTimeout> | null = null;
  private nextId = 0;

  readonly message = this.currentMessage.asReadonly();

  info(text: string, duration = 3000): void {
    this.show(text, 'info', duration);
  }

  success(text: string, duration = 3500): void {
    this.show(text, 'success', duration);
  }

  error(text: string, duration = 4500): void {
    this.show(text, 'error', duration);
  }

  dismiss(): void {
    if (this.hideTimer) {
      clearTimeout(this.hideTimer);
      this.hideTimer = null;
    }

    this.currentMessage.set(null);
  }

  private show(text: string, type: SnackbarType, duration: number): void {
    if (this.hideTimer) {
      clearTimeout(this.hideTimer);
    }

    this.currentMessage.set({
      id: this.nextId++,
      text,
      type,
    });

    this.hideTimer = setTimeout(() => {
      this.currentMessage.set(null);
      this.hideTimer = null;
    }, duration);
  }
}
