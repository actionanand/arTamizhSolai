import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, SearchComponent],
  template: `
    <header class="navbar">
      <div class="navbar__container">
        <a routerLink="/" class="navbar__logo">
          <span class="navbar__logo-text">AR Tamizh Solai</span>
        </a>
        
        <div class="navbar__search-desktop">
          <app-search />
        </div>

        <nav class="navbar__nav">
          <a 
            routerLink="/" 
            routerLinkActive="active" 
            [routerLinkActiveOptions]="{ exact: true }"
            class="navbar__link"
          >
            Home
          </a>
          <a 
            routerLink="/blog" 
            routerLinkActive="active"
            class="navbar__link"
          >
            Blog
          </a>
          <a 
            routerLink="/archive" 
            routerLinkActive="active"
            class="navbar__link"
          >
            Archive
          </a>
        </nav>
      </div>

      <div class="navbar__search-mobile">
        <app-search />
      </div>
    </header>
  `,
  styles: `
    .navbar {
      background-color: #f8f9fa;
      border-bottom: 1px solid #dee2e6;
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .navbar__container {
      max-width: 1280px;
      margin: 0 auto;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
      flex-wrap: wrap;
    }

    .navbar__logo {
      text-decoration: none;
      font-weight: 600;
      font-size: 1.25rem;
      color: #212529;
      transition: color 0.3s ease;
      flex-shrink: 0;
    }

    .navbar__logo:hover {
      color: #0d6efd;
    }

    .navbar__logo-text {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .navbar__search-desktop {
      flex: 1;
      max-width: 400px;
      display: block;
    }

    .navbar__search-mobile {
      display: none;
      width: 100%;
      padding: 0 2rem 1rem;
    }

    .navbar__nav {
      display: flex;
      gap: 2rem;
    }

    .navbar__link {
      text-decoration: none;
      color: #495057;
      font-weight: 500;
      transition: color 0.3s ease;
      position: relative;
      white-space: nowrap;
    }

    .navbar__link:hover {
      color: #0d6efd;
    }

    .navbar__link.active {
      color: #0d6efd;
    }

    .navbar__link.active::after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      right: 0;
      height: 2px;
      background-color: #0d6efd;
    }

    @media (max-width: 1024px) {
      .navbar__container {
        gap: 1rem;
      }

      .navbar__search-desktop {
        max-width: 300px;
      }

      .navbar__nav {
        gap: 1.5rem;
      }
    }

    @media (max-width: 768px) {
      .navbar__container {
        padding: 0.75rem 1rem;
      }

      .navbar__search-desktop {
        display: none;
      }

      .navbar__search-mobile {
        display: block;
        padding: 0 1rem 1rem;
      }

      .navbar__nav {
        gap: 1rem;
      }

      .navbar__logo-text {
        font-size: 1rem;
      }
    }

    @media (max-width: 640px) {
      .navbar__container {
        flex-direction: column;
        gap: 1rem;
      }

      .navbar__nav {
        order: 3;
        width: 100%;
        justify-content: center;
      }
    }
  `
})
export class NavbarComponent {}
