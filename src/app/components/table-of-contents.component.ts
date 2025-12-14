import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeadingLink } from '../utilities/markdown-utils';

@Component({
  selector: 'app-table-of-contents',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    @if (headings.length > 0) {
    <aside class="toc">
      <nav class="toc__nav">
        <h3 class="toc__title">Table of Contents</h3>
        <ul class="toc__list">
          @for (heading of headings; track heading.id) {
          <li 
            class="toc__item" 
            [ngClass]="'toc__item--level-' + heading.level"
          >
            <a 
              class="toc__link"
              [routerLink]="[]"
              [fragment]="heading.id"
            >
              {{ heading.text }}
            </a>
          </li>
          }
        </ul>
      </nav>
    </aside>
    }
  `,
  styles: `
    .toc {
      position: sticky;
      top: 100px;
      background-color: #f8f9fa;
      border: 1px solid #dee2e6;
      border-radius: 8px;
      padding: 1rem;
      width: fit-content;
      min-width: 180px;
      max-width: 250px;
      max-height: 70vh;
      overflow-y: auto;
    }

    .toc__nav {
      display: flex;
      flex-direction: column;
    }

    .toc__title {
      font-size: 1rem;
      font-weight: 600;
      margin: 0 0 1rem 0;
      color: #212529;
    }

    .toc__list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .toc__item {
      margin: 0.5rem 0;
    }

    .toc__item--level-2 {
      margin-left: 0;
    }

    .toc__item--level-3 {
      margin-left: 1.5rem;
    }

    .toc__item--level-4 {
      margin-left: 3rem;
    }

    .toc__link {
      color: #495057;
      text-decoration: none;
      font-size: 0.95rem;
      transition: color 0.2s ease;
      display: block;
      padding: 0.25rem 0;
    }

    .toc__link:hover {
      color: #0d6efd;
    }

    @media (max-width: 1024px) {
      .toc {
        display: none;
      }
    }
  `,
})
export class TableOfContentsComponent {
  @Input() headings: HeadingLink[] = [];
}
