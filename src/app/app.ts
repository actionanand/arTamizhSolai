import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, RouterOutlet],
  template: `
    <app-navbar></app-navbar>
    <main class="main-container">
      <router-outlet />
    </main>
    <footer class="footer">
      <p>&copy; {{ copyrightYears }} AR Tamizh Solai. All rights reserved.</p>
    </footer>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    .main-container {
      flex: 1;
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      width: 100%;
    }

    .footer {
      background-color: #f8f9fa;
      border-top: 1px solid #dee2e6;
      padding: 2rem;
      text-align: center;
      color: #6c757d;
      margin-top: auto;
    }

    .footer p {
      margin: 0;
    }

    @media (max-width: 640px) {
      .main-container {
        padding: 1rem;
      }

      .footer {
        padding: 1rem;
      }
    }
  `,
})
export class App {
  readonly beginYear = 2025;
  readonly currentYear = new Date().getFullYear();
  get copyrightYears(): string {
    return this.beginYear === this.currentYear
      ? `${this.beginYear}`
      : `${this.beginYear} - ${this.currentYear}`;
  }
}
