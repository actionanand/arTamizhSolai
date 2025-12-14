import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import PostAttributes from '../post-attributes';

@Component({
  selector: 'app-post-navigation',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <nav class="post-nav">
      @if (previousPost) {
      <a 
        [routerLink]="['/blog', previousPost.attributes.slug]"
        class="post-nav__link post-nav__link--prev"
      >
        <span class="post-nav__label">← Previous</span>
        <span class="post-nav__title">{{ previousPost.attributes.title }}</span>
      </a>
      } @else {
      <div class="post-nav__placeholder"></div>
      }

      @if (nextPost) {
      <a 
        [routerLink]="['/blog', nextPost.attributes.slug]"
        class="post-nav__link post-nav__link--next"
      >
        <span class="post-nav__label">Next →</span>
        <span class="post-nav__title">{{ nextPost.attributes.title }}</span>
      </a>
      } @else {
      <div class="post-nav__placeholder"></div>
      }
    </nav>
  `,
  styles: `
    .post-nav {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      margin: 4rem 0 2rem 0;
      padding-top: 2rem;
      border-top: 1px solid #dee2e6;
    }

    .post-nav__link {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 1.5rem;
      border: 2px solid #dee2e6;
      border-radius: 8px;
      text-decoration: none;
      color: inherit;
      transition: all 0.3s ease;
    }

    .post-nav__link:hover {
      border-color: #0d6efd;
      background-color: #f8f9fa;
    }

    .post-nav__link--prev {
      text-align: left;
    }

    .post-nav__link--next {
      text-align: right;
    }

    .post-nav__label {
      font-size: 0.875rem;
      color: #6c757d;
      font-weight: 500;
    }

    .post-nav__title {
      font-weight: 600;
      color: #0d6efd;
      line-height: 1.4;
    }

    .post-nav__placeholder {
      opacity: 0;
    }

    @media (max-width: 640px) {
      .post-nav {
        grid-template-columns: 1fr;
        gap: 1rem;
      }

      .post-nav__link--next {
        text-align: left;
      }
    }
  `,
})
export class PostNavigationComponent {
  @Input() previousPost: any = null;
  @Input() nextPost: any = null;
}
