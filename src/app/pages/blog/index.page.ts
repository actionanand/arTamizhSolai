import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { injectContentFiles } from '@analogjs/content';

import PostAttributes from '../../post-attributes';

@Component({
  selector: 'app-blog',
  imports: [RouterLink],
  template: `
    <div class="blog-archive">
      <header class="archive-header">
        <h1>Blog Archive</h1>
        <p class="archive-subtitle">Explore all articles and stories</p>
      </header>

      <div class="posts-list">
        @for (post of pagedPosts; track post.attributes.slug) {
        <article class="post-preview">
          <div class="post-preview__image-container">
            <img 
              class="post-preview__image" 
              [src]="post.attributes.coverImage"
              [alt]="post.attributes.title"
            />
          </div>
          <div class="post-preview__content">
            <h2 class="post-preview__title">
              <a [routerLink]="['/blog/', post.attributes.slug]">
                {{ post.attributes.title }}
              </a>
            </h2>
            @if (post.attributes.date) {
            <p class="post-preview__date">{{ post.attributes.date }}</p>
            }
            <p class="post-preview__description">{{ post.attributes.description }}</p>
            <a 
              [routerLink]="['/blog/', post.attributes.slug]"
              class="post-preview__link"
            >
              Read More →
            </a>
          </div>
        </article>
        }
      </div>

      @if (posts.length === 0) {
      <div class="no-posts">
        <p>No blog posts yet. Check back soon!</p>
      </div>
      }

      @if (totalPages > 1) {
      <nav class="pagination">
        <button 
          class="page-btn" 
          [disabled]="currentPage === 1" 
          (click)="goToPage(currentPage - 1)"
        >
          ← Prev
        </button>
        <span class="page-info">Page {{ currentPage }} of {{ totalPages }}</span>
        <button 
          class="page-btn" 
          [disabled]="currentPage === totalPages" 
          (click)="goToPage(currentPage + 1)"
        >
          Next →
        </button>
      </nav>
      }
    </div>
  `,
  styles: `
    .blog-archive {
      max-width: 900px;
      margin: 0 auto;
    }

    .archive-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .archive-header h1 {
      font-size: 2.5rem;
      margin: 0 0 0.5rem 0;
      color: #212529;
    }

    .archive-subtitle {
      font-size: 1.125rem;
      color: #6c757d;
      margin: 0;
    }

    .posts-list {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .post-preview {
      display: grid;
      grid-template-columns: 250px 1fr;
      gap: 2rem;
      padding: 1.5rem;
      border: 1px solid #dee2e6;
      border-radius: 8px;
      transition: all 0.3s ease;
    }

    .post-preview:hover {
      border-color: #0d6efd;
      box-shadow: 0 4px 12px rgba(13, 110, 253, 0.1);
    }

    .post-preview__image-container {
      overflow: hidden;
      border-radius: 5px;
    }

    .post-preview__image {
      width: 100%;
      height: 200px;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .post-preview:hover .post-preview__image {
      transform: scale(1.05);
    }

    .post-preview__content {
      display: flex;
      flex-direction: column;
    }

    .post-preview__title {
      font-size: 1.5rem;
      margin: 0 0 0.5rem 0;
      line-height: 1.3;
    }

    .post-preview__title a {
      color: #212529;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .post-preview__title a:hover {
      color: #0d6efd;
    }

    .post-preview__date {
      font-size: 0.875rem;
      color: #6c757d;
      margin: 0 0 0.75rem 0;
    }

    .post-preview__description {
      color: #495057;
      margin: 0 0 1rem 0;
      line-height: 1.6;
      flex: 1;
    }

    .post-preview__link {
      color: #0d6efd;
      text-decoration: none;
      font-weight: 600;
      transition: color 0.3s ease;
      width: fit-content;
    }

    .post-preview__link:hover {
      color: #0b5ed7;
    }

    .no-posts {
      text-align: center;
      padding: 3rem;
      color: #6c757d;
    }

    .pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      margin: 2rem 0;
    }

    .page-btn {
      padding: 0.5rem 1rem;
      border: 1px solid #dee2e6;
      background: #fff;
      border-radius: 6px;
      cursor: pointer;
    }

    .page-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .page-info {
      color: #495057;
    }

    @media (max-width: 768px) {
      .archive-header h1 {
        font-size: 1.75rem;
      }

      .post-preview {
        grid-template-columns: 1fr;
      }

      .post-preview__image-container {
        min-height: 200px;
      }

      .post-preview__title {
        font-size: 1.25rem;
      }
    }
  `,
})
export default class Blog {
  readonly posts = injectContentFiles<PostAttributes>();
  readonly pageSize = 15;
  currentPage = 1;
  totalPages = 1;
  pagedPosts: typeof this.posts = [];

  constructor() {
    this.totalPages = Math.max(1, Math.ceil(this.posts.length / this.pageSize));
    this.currentPage = 1;
    this.updatePagedPosts();
  }

  goToPage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updatePagedPosts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private updatePagedPosts() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pagedPosts = this.posts.slice(start, end);
  }
}
