import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { injectContentFiles } from '@analogjs/content';
import { paginationConfig } from '../../config/pagination-config';
import { FormatDatePipe } from '../../pipes/format-date.pipe';

import PostAttributes from '../../post-attributes';
import { getCoverImageSrc } from '../../utilities/cover-image-helper';

const DEFAULT_COVER_IMAGE = 'tamil-literature-default.svg';

@Component({
  selector: 'app-blog',
  imports: [RouterLink, CommonModule, FormatDatePipe],
  template: `
    <div class="blog-archive">
      <header class="archive-header">
        <h1>Blog Archive</h1>
        <p class="archive-subtitle">Explore all articles and stories</p>
      </header>

      <!-- Categories and Tags Filters -->
      @if (availableCategories.length > 0 || availableTags.length > 0) {
      <div class="filters-section">
        @if (availableCategories.length > 0) {
        <div class="filter-group">
          <div class="filter-title-row">
            <h3 class="filter-title">Categories</h3>
            @if (hasMoreCategories()) {
            <button
              type="button"
              class="filter-toggle"
              [attr.aria-expanded]="showAllCategories"
              aria-controls="blog-category-filters"
              (click)="toggleCategoriesExpanded()"
            >
              <span>{{ getCategoryToggleLabel() }}</span>
              <span
                class="filter-chevron"
                [class.filter-chevron--expanded]="showAllCategories"
                aria-hidden="true"
              ></span>
            </button>
            }
          </div>
          <div class="filter-tags" id="blog-category-filters">
            <button 
              class="filter-tag"
              [class.active]="!selectedCategory"
              (click)="setCategory(null)"
            >
              All
            </button>
            @for (category of getVisibleCategories(); track category) {
            <button 
              class="filter-tag"
              [class.active]="selectedCategory === category"
              (click)="setCategory(category)"
            >
              {{ category }} ({{ getPostsCountByCategory(category) }})
            </button>
            }
          </div>
        </div>
        }

        @if (availableTags.length > 0) {
        <div class="filter-group">
          <div class="filter-title-row">
            <h3 class="filter-title">Tags</h3>
            @if (hasMoreTags()) {
            <button
              type="button"
              class="filter-toggle"
              [attr.aria-expanded]="showAllTags"
              aria-controls="blog-tag-filters"
              (click)="toggleTagsExpanded()"
            >
              <span>{{ getTagToggleLabel() }}</span>
              <span
                class="filter-chevron"
                [class.filter-chevron--expanded]="showAllTags"
                aria-hidden="true"
              ></span>
            </button>
            }
          </div>
          <div class="filter-tags" id="blog-tag-filters">
            <button 
              class="filter-tag"
              [class.active]="selectedTags.length === 0"
              (click)="clearTags()"
            >
              All
            </button>
            @for (tag of getVisibleTags(); track tag) {
            <button 
              class="filter-tag"
              [class.active]="selectedTags.includes(tag)"
              (click)="toggleTag(tag)"
            >
              {{ tag }} ({{ getPostsCountByTag(tag) }})
            </button>
            }
          </div>
        </div>
        }
      </div>
      }

      <!-- Applied Filters Info -->
      @if (selectedCategory || selectedTags.length > 0) {
      <div class="applied-filters">
        <span class="applied-filters-label">Filtering by:</span>
        @if (selectedCategory) {
        <span class="filter-badge">
          Category: {{ selectedCategory }}
          <button class="remove-filter" (click)="setCategory(null)">×</button>
        </span>
        }
        @for (tag of selectedTags; track tag) {
        <span class="filter-badge">
          Tag: {{ tag }}
          <button class="remove-filter" (click)="removeTag(tag)">×</button>
        </span>
        }
      </div>
      }

      <div class="posts-list">
        @if (filteredPosts.length === 0) {
        <div class="no-posts">
          <p>No blog posts found for the selected filters.</p>
          <button class="reset-btn" (click)="resetFilters()">Reset Filters</button>
        </div>
        } @else {
        @for (post of pagedPosts; track post.attributes.slug) {
        <article class="post-preview">
          <div class="post-preview__image-container">
            <img 
              class="post-preview__image" 
              [src]="getCoverImage(post.attributes)"
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
            <p class="post-preview__date">{{ post.attributes.date | formatDate }}</p>
            }
            <div class="post-preview__meta">
              @if (post.attributes.isDraft) {
              <span class="post-meta-tag draft-tag">📝 Draft</span>
              }
              @if (post.attributes.isPinned) {
              <span class="post-meta-tag pinned-tag">📌 Pinned</span>
              }
              <span class="post-meta-tag category-tag">{{ post.attributes.category || 'uncategorized' }}</span>
              @if (post.attributes.tags && post.attributes.tags.length > 0) {
              @for (tag of post.attributes.tags; track tag) {
              <span class="post-meta-tag tag-tag">{{ tag }}</span>
              }
              }
            </div>
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
        }
      </div>

      @if (filteredPosts.length > 0) {
      <nav class="pagination">
        <button 
          class="page-btn" 
          [disabled]="currentPage === 1" 
          (click)="goToPage(currentPage - 1)"
        >
          ← Prev
        </button>
        <span class="page-info">Page {{ currentPage }} of {{ totalPages }} ({{ filteredPosts.length }} posts)</span>
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

    /* Filters Section */
    .filters-section {
      background: #f8f9fa;
      border-radius: 8px;
      padding: 1.5rem;
      margin-bottom: 2rem;
    }

    .filter-group {
      margin-bottom: 1.5rem;
    }

    .filter-group:last-child {
      margin-bottom: 0;
    }

    .filter-title-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      margin-bottom: 0.75rem;
    }

    .filter-title {
      font-size: 0.95rem;
      font-weight: 600;
      color: #495057;
      margin: 0;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .filter-toggle {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      min-height: 2rem;
      padding: 0.35rem 0.65rem;
      border: 1px solid transparent;
      background: transparent;
      color: #0d6efd;
      border-radius: 6px;
      cursor: pointer;
      font-size: 0.8125rem;
      font-weight: 600;
      white-space: nowrap;
      transition: background 0.2s ease, border-color 0.2s ease;
    }

    .filter-toggle:hover {
      background: #e7f0ff;
      border-color: #b6d4fe;
    }

    .filter-chevron {
      width: 0.45rem;
      height: 0.45rem;
      border-right: 2px solid currentColor;
      border-bottom: 2px solid currentColor;
      transform: rotate(45deg);
      transition: transform 0.2s ease;
    }

    .filter-chevron--expanded {
      transform: translateY(0.15rem) rotate(225deg);
    }

    .filter-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .filter-tag {
      padding: 0.5rem 1rem;
      border: 1px solid #dee2e6;
      background: white;
      color: #495057;
      border-radius: 20px;
      cursor: pointer;
      font-size: 0.875rem;
      transition: all 0.2s ease;
      white-space: nowrap;
    }

    .filter-tag:hover {
      border-color: #0d6efd;
      color: #0d6efd;
    }

    .filter-tag.active {
      background: #0d6efd;
      color: white;
      border-color: #0d6efd;
    }

    /* Applied Filters */
    .applied-filters {
      background: #e7f0ff;
      border-left: 4px solid #0d6efd;
      padding: 1rem;
      border-radius: 4px;
      margin-bottom: 2rem;
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      align-items: center;
    }

    .applied-filters-label {
      font-weight: 600;
      color: #0d6efd;
    }

    .filter-badge {
      background: white;
      padding: 0.4rem 0.75rem;
      border-radius: 4px;
      border: 1px solid #0d6efd;
      color: #0d6efd;
      font-size: 0.875rem;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }

    .remove-filter {
      background: none;
      border: none;
      color: #0d6efd;
      cursor: pointer;
      font-weight: bold;
      font-size: 1rem;
      padding: 0;
      line-height: 1;
    }

    .remove-filter:hover {
      color: #0b5ed7;
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
      margin: 0 0 0.5rem 0;
    }

    .post-preview__meta {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 0.75rem;
    }

    .post-meta-tag {
      display: inline-block;
      font-size: 0.75rem;
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      font-weight: 500;
    }

    .category-tag {
      background: #e3f2fd;
      color: #1976d2;
      border: 1px solid #1976d2;
    }

    .tag-tag {
      background: #f3e5f5;
      color: #7b1fa2;
      border: 1px solid #7b1fa2;
    }

    .pinned-tag {
      background: #fff3cd;
      color: #664d03;
      border: 1px solid #ffecb5;
      font-weight: 600;
    }

    .draft-tag {
      background: #f8d7da;
      color: #721c24;
      border: 1px solid #f5c6cb;
      font-weight: 600;
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

    .reset-btn {
      margin-top: 1rem;
      padding: 0.5rem 1.5rem;
      background: #0d6efd;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 600;
      transition: background 0.2s ease;
    }

    .reset-btn:hover {
      background: #0b5ed7;
    }

    .pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      margin: 2rem 0;
    }

    .page-btn {
      padding: 0.75rem 1.5rem;
      border: 1px solid #0d6efd;
      background: linear-gradient(135deg, #0d6efd 0%, #0b5ed7 100%);
      color: white;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 600;
      transition: all 0.2s ease;
      box-shadow: 0 2px 8px rgba(13, 110, 253, 0.3);
    }

    .page-btn:hover:not(:disabled) {
      background: linear-gradient(135deg, #0b5ed7 0%, #0a58ca 100%);
      border-color: #0a58ca;
      box-shadow: 0 4px 12px rgba(13, 110, 253, 0.4);
      transform: translateY(-1px);
    }

    .page-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none;
    }

    .page-info {
      color: #495057;
    }

    @media (max-width: 768px) {
      .archive-header h1 {
        font-size: 1.75rem;
      }

      .filter-tags {
        gap: 0.25rem;
      }

      .filter-title-row {
        align-items: flex-start;
        flex-direction: column;
        gap: 0.35rem;
      }

      .filter-toggle {
        margin-left: -0.65rem;
      }

      .filter-tag {
        padding: 0.4rem 0.75rem;
        font-size: 0.8rem;
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

      .applied-filters {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  `,
})
export default class Blog implements OnInit {
  readonly posts = injectContentFiles<PostAttributes>();
  readonly pageSize = paginationConfig.blogPageSize;
  readonly defaultCoverImage = DEFAULT_COVER_IMAGE;
  readonly collapsedCategoryLimit = 6;
  readonly collapsedTagLimit = 10;
  getCoverImage = getCoverImageSrc;

  availableCategories: string[] = [];
  availableTags: string[] = [];
  selectedCategory: string | null = null;
  selectedTags: string[] = [];
  showAllCategories = false;
  showAllTags = false;
  filteredPosts: typeof this.posts = [];
  pagedPosts: typeof this.posts = [];
  currentPage = 1;
  totalPages = 1;

  constructor(private route: ActivatedRoute) {
    this.extractAndSortPosts();
  }

  ngOnInit() {
    this.applyFilters();
    this.subscribeToQueryParams();
  }

  private extractAndSortPosts() {
    // In production builds, filter out drafts. In development, show them with badge
    const isDev = !import.meta.env.PROD;
    const publishedPosts = isDev ? this.posts : this.posts.filter(post => !post.attributes.isDraft);
    
    // Sort with pinned posts at top, then by date
    publishedPosts.sort((a, b) => {
      // Pinned posts first
      if (a.attributes.isPinned && !b.attributes.isPinned) return -1;
      if (!a.attributes.isPinned && b.attributes.isPinned) return 1;
      // Then by date (newest first)
      return new Date(b.attributes.date || '').getTime() - new Date(a.attributes.date || '').getTime();
    });
    
    // Update posts array with filtered and sorted posts
    Object.assign(this, { posts: publishedPosts });
    
    this.extractCategories();
    this.extractTags();
  }

  private extractCategories() {
    const categories = new Set<string>();
    this.posts.forEach(post => {
      categories.add(post.attributes.category || 'uncategorized');
    });
    this.availableCategories = Array.from(categories).sort();
  }

  private extractTags() {
    const tags = new Set<string>();
    this.posts.forEach(post => {
      if (post.attributes.tags && Array.isArray(post.attributes.tags)) {
        post.attributes.tags.forEach(tag => tags.add(tag));
      }
    });
    this.availableTags = Array.from(tags).sort();
  }

  private subscribeToQueryParams() {
    this.route.queryParams.subscribe(params => {
      this.selectedCategory = params['category'] || null;
      this.selectedTags = params['tags'] ? params['tags'].split(',') : [];
      this.currentPage = 1;
      this.applyFilters();
    });
  }

  private applyFilters() {
    this.filteredPosts = this.posts.filter(post => {
      const postCategory = post.attributes.category || 'uncategorized';
      const matchesCategory = !this.selectedCategory || 
        postCategory === this.selectedCategory;
      
      const matchesTags = this.selectedTags.length === 0 || 
        (post.attributes.tags && 
         this.selectedTags.some(tag => post.attributes.tags?.includes(tag)));
      
      return matchesCategory && matchesTags;
    });

    this.totalPages = Math.max(1, Math.ceil(this.filteredPosts.length / this.pageSize));
    this.currentPage = 1;
    this.updatePagedPosts();
  }

  setCategory(category: string | null) {
    this.selectedCategory = category;
    this.currentPage = 1;
    this.applyFilters();
  }

  toggleTag(tag: string) {
    if (this.selectedTags.includes(tag)) {
      this.selectedTags = this.selectedTags.filter(t => t !== tag);
    } else {
      this.selectedTags = [...this.selectedTags, tag];
    }
    this.currentPage = 1;
    this.applyFilters();
  }

  removeTag(tag: string) {
    this.selectedTags = this.selectedTags.filter(t => t !== tag);
    this.currentPage = 1;
    this.applyFilters();
  }

  clearTags() {
    this.selectedTags = [];
    this.currentPage = 1;
    this.applyFilters();
  }

  toggleCategoriesExpanded() {
    this.showAllCategories = !this.showAllCategories;
  }

  toggleTagsExpanded() {
    this.showAllTags = !this.showAllTags;
  }

  resetFilters() {
    this.selectedCategory = null;
    this.selectedTags = [];
    this.currentPage = 1;
    this.applyFilters();
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
    this.pagedPosts = this.filteredPosts.slice(start, end);
  }

  getPostsCountByCategory(category: string): number {
    if (category === 'uncategorized') {
      return this.posts.filter(p => !p.attributes.category).length;
    }
    return this.posts.filter(p => p.attributes.category === category).length;
  }

  getFilteredTags(): string[] {
    if (!this.selectedCategory) {
      // Show all tags when no category selected
      return this.availableTags;
    }

    // Filter tags to show only those with posts in selected category
    const validTags = new Set<string>();
    this.posts.forEach(post => {
      const postCategory = post.attributes.category || 'uncategorized';
      if (postCategory === this.selectedCategory && post.attributes.tags) {
        post.attributes.tags.forEach(tag => validTags.add(tag));
      }
    });
    return Array.from(validTags).sort();
  }

  getVisibleCategories(): string[] {
    return this.getCompactFilterItems(
      this.availableCategories,
      this.showAllCategories,
      this.collapsedCategoryLimit,
      this.selectedCategory ? [this.selectedCategory] : []
    );
  }

  getVisibleTags(): string[] {
    const tagsWithPosts = this.getFilteredTags().filter(tag => this.getPostsCountByTag(tag) > 0);

    return this.getCompactFilterItems(
      tagsWithPosts,
      this.showAllTags,
      this.collapsedTagLimit,
      this.selectedTags
    );
  }

  hasMoreCategories(): boolean {
    return this.showAllCategories || this.availableCategories.length > this.getVisibleCategories().length;
  }

  hasMoreTags(): boolean {
    const tagsWithPosts = this.getFilteredTags().filter(tag => this.getPostsCountByTag(tag) > 0);
    return this.showAllTags || tagsWithPosts.length > this.getVisibleTags().length;
  }

  getCategoryToggleLabel(): string {
    if (this.showAllCategories) return 'Show fewer';

    const hiddenCount = this.availableCategories.length - this.getVisibleCategories().length;
    return hiddenCount > 0 ? `Show ${hiddenCount} more` : 'Show all';
  }

  getTagToggleLabel(): string {
    if (this.showAllTags) return 'Show fewer';

    const tagsWithPosts = this.getFilteredTags().filter(tag => this.getPostsCountByTag(tag) > 0);
    const hiddenCount = tagsWithPosts.length - this.getVisibleTags().length;
    return hiddenCount > 0 ? `Show ${hiddenCount} more` : 'Show all';
  }

  getPostsCountByTag(tag: string): number {
    if (!this.selectedCategory) {
      // Count all posts with this tag
      return this.posts.filter(p => 
        p.attributes.tags && p.attributes.tags.includes(tag)
      ).length;
    }

    // Count posts with this tag in selected category
    return this.posts.filter(p => {
      const postCategory = p.attributes.category || 'uncategorized';
      return postCategory === this.selectedCategory &&
        p.attributes.tags && p.attributes.tags.includes(tag);
    }).length;
  }

  private getCompactFilterItems(
    items: string[],
    expanded: boolean,
    limit: number,
    priorityItems: string[] = []
  ): string[] {
    if (expanded || items.length <= limit) {
      return items;
    }

    const visibleItems = items.slice(0, limit);

    priorityItems.forEach(item => {
      if (items.includes(item) && !visibleItems.includes(item)) {
        visibleItems.push(item);
      }
    });

    return visibleItems;
  }
}
