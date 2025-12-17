import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, RouterOutlet, FooterComponent],
  template: `
    <app-navbar></app-navbar>
    <main class="main-container">
      <router-outlet />
    </main>
    <app-footer></app-footer>
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

    @media (max-width: 640px) {
      .main-container {
        padding: 1rem;
      }
    }
  `,
})
export class App {}
