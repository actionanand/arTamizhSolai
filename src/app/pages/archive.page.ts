import { Component } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { injectContentFiles } from '@analogjs/content';
import { paginationConfig } from '../config/pagination-config';
import { FormatDatePipe } from '../pipes/format-date.pipe';
import PostAttributes from '../post-attributes';

@Component({
  selector: 'app-archive',
  standalone: true,
  imports: [RouterLink, CommonModule, FormatDatePipe],
  template: `
    <div class="year-archive">
      <header class="archive-header">
        <h1>Archive</h1>
        <p class="archive-subtitle">Browse by year, category, or tag</p>
      </header>

      <!-- Categories and Tags Filters -->
      @if (availableCategories.length > 0 || availableTags.length > 0) {
      <div class="filters-section">
        @if (availableCategories.length > 0) {
        <div class="filter-group">
          <h3 class="filter-title">Categories</h3>
          <div class="filter-tags">
            <button 
              class="filter-tag"
              [class.active]="!selectedCategory"
              (click)="setCategory(null)"
            >
              All
            </button>
            @for (category of availableCategories; track category) {
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
          <h3 class="filter-title">Tags</h3>
          <div class="filter-tags">
            <button 
              class="filter-tag"
              [class.active]="selectedTags.length === 0"
              (click)="clearTags()"
            >
              All
            </button>
            @for (tag of getFilteredTags(); track tag) {
              @if (getPostsCountByTag(tag) > 0) {
              <button 
                class="filter-tag"
                [class.active]="selectedTags.includes(tag)"
                (click)="toggleTag(tag)"
              >
                {{ tag }} ({{ getPostsCountByTag(tag) }})
              </button>
              }
            }
          </div>
        </div>
        }
      </div>
      }

      @for (year of filteredYears; track year) {
      @if (getPagedPostsForYear(year).length > 0) {
      <section class="archive-year">
        <h2 class="archive-year__title">{{ year }}</h2>
        <ul class="archive-year__list">
          @for (post of getPagedPostsForYear(year); track post.attributes.slug) {
          <li class="archive-year__item">
            <div class="archive-year__post">
              <a [routerLink]="['/blog', post.attributes.slug]" class="archive-year__link">
                {{ post.attributes.title }}
              </a>
              @if (post.attributes.date) {
              <span class="archive-year__date">— {{ post.attributes.date | formatDate }}</span>
              }
              <div class="archive-year__meta">
                @if (post.attributes.isDraft) {
                <span class="archive-meta-tag draft-tag">📝 Draft</span>
                }
                @if (post.attributes.isPinned) {
                <span class="archive-meta-tag pinned-tag">📌 Pinned</span>
                }
                <span class="archive-meta-tag category-tag">{{ post.attributes.category || 'uncategorized' }}</span>
                @if (post.attributes.tags && post.attributes.tags.length > 0) {
                @for (tag of post.attributes.tags; track tag) {
                <span class="archive-meta-tag tag-tag">{{ tag }}</span>
                }
                }
              </div>
            </div>
          </li>
          }
        </ul>
      </section>
      }
      }

      @if (filteredYears.length === 0) {
      <div class="no-posts">
        <p>No posts found for the selected filters.</p>
        <button class="reset-btn" (click)="resetFilters()">Reset Filters</button>
      </div>
      }

      @if (filteredPosts.length > 0 && totalPages > 1) {
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
    .year-archive {
      max-width: 900px;
      margin: 0 auto;
    }

    .archive-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .archive-header h1 {
      font-size: 2.5rem;
      margin: 0 0 0.5rem 0;
      color: #212529;
    }

    .archive-subtitle {
      font-size: 1.125rem;
      color: #6c757d;
      margin: 0 0 2rem 0;
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

    .filter-title {
      font-size: 0.95rem;
      font-weight: 600;
      color: #495057;
      margin: 0 0 0.75rem 0;
      text-transform: uppercase;
      letter-spacing: 0.5px;
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

    .archive-year {
      margin: 2rem 0;
      padding: 1.5rem;
      border: 1px solid #dee2e6;
      border-radius: 8px;
      background: #fafbfc;
    }

    .archive-year__title {
      font-size: 1.5rem;
      margin: 0 0 1rem 0;
      color: #212529;
    }

    .archive-year__list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .archive-year__item {
      margin: 0.75rem 0;
    }

    .archive-year__post {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .archive-year__link {
      color: #0d6efd;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s ease;
    }

    .archive-year__link:hover {
      color: #0b5ed7;
      text-decoration: underline;
    }

    .archive-year__date {
      color: #6c757d;
      font-size: 0.875rem;
    }

    .archive-year__meta {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .archive-meta-tag {
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

    /* Pagination */
    .pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      margin: 3rem 0 2rem;
      flex-wrap: wrap;
    }

    .page-btn {
      padding: 0.5rem 1rem;
      background: #0d6efd;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 600;
      font-size: 0.9rem;
      transition: all 0.2s ease;
    }

    .page-btn:hover:not(:disabled) {
      background: #0b5ed7;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(13, 110, 253, 0.3);
    }

    .page-btn:disabled {
      background: #dee2e6;
      color: #6c757d;
      cursor: not-allowed;
      opacity: 0.6;
    }

    .page-info {
      font-weight: 600;
      color: #495057;
      min-width: 200px;
      text-align: center;
    }

    .no-posts {
      text-align: center;
      padding: 2rem;
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

    @media (max-width: 768px) {
      .archive-header h1 {
        font-size: 1.75rem;
      }

      .archive-year__title {
        font-size: 1.25rem;
      }

      .filter-tags {
        gap: 0.25rem;
      }

      .filter-tag {
        padding: 0.4rem 0.75rem;
        font-size: 0.8rem;
      }
    }
  `,
})
export default class YearArchivePage {
  readonly posts = injectContentFiles<PostAttributes>();
  readonly pageSize = paginationConfig.archivePageSize;
  grouped: Record<string, typeof this.posts> = {};
  years: string[] = [];
  filteredYears: string[] = [];
  filteredPosts: typeof this.posts = [];
  pagedPosts: typeof this.posts = [];
  availableCategories: string[] = [];
  availableTags: string[] = [];
  selectedCategory: string | null = null;
  selectedTags: string[] = [];
  currentPage = 1;
  totalPages = 1;
  readonly maxPerYear = paginationConfig.archivePageSize;

  constructor(private route: ActivatedRoute) {
    this.filterAndSortPosts();
    this.groupByYear();
    this.extractCategories();
    this.extractTags();
    this.subscribeToQueryParams();
  }

  private filterAndSortPosts() {
    // Filter out draft posts in production, show all in development
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
    
    // Update posts array
    Object.assign(this, { posts: publishedPosts });
  }

  private groupByYear() {
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
    this.filteredYears = [...this.years];
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
      this.applyFilters();
    });
  }

  private applyFilters() {
    const filteredPosts = this.posts.filter(post => {
      const postCategory = post.attributes.category || 'uncategorized';
      const matchesCategory = !this.selectedCategory || 
        postCategory === this.selectedCategory;
      
      const matchesTags = this.selectedTags.length === 0 || 
        (post.attributes.tags && 
         this.selectedTags.some(tag => post.attributes.tags?.includes(tag)));
      
      return matchesCategory && matchesTags;
    });

    this.filteredPosts = filteredPosts;
    
    const yearsWithPosts = new Set<string>();
    filteredPosts.forEach(post => {
      const dateStr = post.attributes.date || '';
      const yearMatch = dateStr.match(/(\d{4})/);
      const year = yearMatch ? yearMatch[1] : 'Unknown';
      yearsWithPosts.add(year);
    });

    this.filteredYears = this.years.filter(year => yearsWithPosts.has(year));
    
    // Calculate pagination
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

  clearTags() {
    this.selectedTags = [];
    this.currentPage = 1;
    this.applyFilters();
  }

  resetFilters() {
    this.selectedCategory = null;
    this.selectedTags = [];
    this.applyFilters();
  }

  private updatePagedPosts() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pagedPosts = this.filteredPosts.slice(start, end);
  }

  goToPage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updatePagedPosts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getPagedPostsForYear(year: string): typeof this.posts {
    return this.pagedPosts.filter(post => {
      const dateStr = post.attributes.date || '';
      const yearMatch = dateStr.match(/(\d{4})/);
      const postYear = yearMatch ? yearMatch[1] : 'Unknown';
      return postYear === year;
    });
  }

  getPostsForYear(year: string): typeof this.posts {
    let postsForYear = this.grouped[year] || [];
    
    postsForYear = postsForYear.filter(post => {
      const postCategory = post.attributes.category || 'uncategorized';
      const matchesCategory = !this.selectedCategory || 
        postCategory === this.selectedCategory;
      
      const matchesTags = this.selectedTags.length === 0 || 
        (post.attributes.tags && 
         this.selectedTags.some(tag => post.attributes.tags?.includes(tag)));
      
      return matchesCategory && matchesTags;
    });

    return postsForYear;
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
}
