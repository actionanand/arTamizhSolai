import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { injectContentFiles } from '@analogjs/content';
import PostAttributes from '../../post-attributes';

@Component({
  selector: 'app-blog-archive',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="year-archive">
      <header class="archive-header">
        <h1>Archive</h1>
        <p class="archive-subtitle">Browse by year</p>
      </header>

      @for (year of years; track year) {
      <section class="archive-year">
        <h2 class="archive-year__title">{{ year }}</h2>
        <ul class="archive-year__list">
          @for (post of grouped[year]; track post.attributes.slug) {
          <li>
            <a [routerLink]="['/blog', post.attributes.slug]">
              {{ post.attributes.title }}
            </a>
            @if (post.attributes.date) {
            <span class="archive-year__date">— {{ post.attributes.date }}</span>
            }
          </li>
          }
        </ul>
      </section>
      }
    </div>
  `,
  styles: `
    .year-archive {
      max-width: 900px;
      margin: 0 auto;
    }

    .archive-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .archive-subtitle {
      color: #6c757d;
    }

    .archive-year {
      margin: 2rem 0;
    }

    .archive-year__title {
      font-size: 1.5rem;
      margin-bottom: 0.75rem;
    }

    .archive-year__list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .archive-year__list li {
      margin: 0.5rem 0;
    }

    .archive-year__date {
      color: #6c757d;
      margin-left: 0.5rem;
      font-size: 0.9rem;
    }
  `,
})
export default class BlogYearArchive {
  readonly posts = injectContentFiles<PostAttributes>();
  grouped: Record<string, typeof this.posts> = {};
  years: string[] = [];
  readonly maxPerYear = 25;

  constructor() {
    const byYear: Record<string, typeof this.posts> = {};
    for (const post of this.posts) {
      const dateStr = post.attributes.date || '';
      const yearMatch = dateStr.match(/(\d{4})/);
      const year = yearMatch ? yearMatch[1] : 'Unknown';
      if (!byYear[year]) byYear[year] = [];
      if (byYear[year].length < this.maxPerYear) {
        byYear[year].push(post);
      }
    }
    this.grouped = byYear;
    this.years = Object.keys(byYear).sort((a, b) => (a < b ? 1 : -1));
  }
}
