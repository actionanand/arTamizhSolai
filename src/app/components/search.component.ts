import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { injectContentFiles } from '@analogjs/content';
import PostAttributes from '../post-attributes';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="search-container">
      <div class="search-box">
        <input
          type="text"
          [(ngModel)]="searchQuery"
          (input)="onSearchChange()"
          placeholder="Search posts..."
          class="search-input"
        />
        <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
      </div>
      
      @if (searchQuery && filteredPosts.length > 0) {
        <div class="search-results">
          @for (post of filteredPosts; track post.attributes.slug) {
            <a [routerLink]="['/blog', post.attributes.slug]" class="search-result-item" (click)="clearSearch()">
              <h4>{{ post.attributes.title }}</h4>
              <p>{{ post.attributes.description }}</p>
            </a>
          }
        </div>
      }
      
      @if (searchQuery && filteredPosts.length === 0) {
        <div class="search-results">
          <div class="no-results">No posts found</div>
        </div>
      }
    </div>
  `,
  styles: `
    .search-container {
      position: relative;
      width: 100%;
      max-width: 500px;
    }

    .search-box {
      position: relative;
    }

    .search-input {
      width: 100%;
      padding: 0.75rem 2.5rem 0.75rem 1rem;
      border: 2px solid #dee2e6;
      border-radius: 8px;
      font-size: 1rem;
      transition: border-color 0.2s ease;
    }

    .search-input:focus {
      outline: none;
      border-color: #0d6efd;
    }

    .search-icon {
      position: absolute;
      right: 1rem;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
      color: #6c757d;
      pointer-events: none;
    }

    .search-results {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      margin-top: 0.5rem;
      background: white;
      border: 1px solid #dee2e6;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      max-height: 400px;
      overflow-y: auto;
      z-index: 1000;
    }

    .search-result-item {
      display: block;
      padding: 1rem;
      border-bottom: 1px solid #f1f3f5;
      text-decoration: none;
      color: inherit;
      transition: background-color 0.2s ease;
    }

    .search-result-item:last-child {
      border-bottom: none;
    }

    .search-result-item:hover {
      background-color: #f8f9fa;
    }

    .search-result-item h4 {
      margin: 0 0 0.5rem 0;
      font-size: 1rem;
      color: #212529;
    }

    .search-result-item p {
      margin: 0;
      font-size: 0.875rem;
      color: #6c757d;
      line-height: 1.4;
    }

    .no-results {
      padding: 1rem;
      text-align: center;
      color: #6c757d;
    }

    @media (max-width: 768px) {
      .search-container {
        max-width: 100%;
      }
    }
  `
})
export class SearchComponent implements OnInit {
  searchQuery = '';
  filteredPosts: any[] = [];
  allPosts = injectContentFiles<PostAttributes>();

  ngOnInit() {
    // Initialize with empty results
    this.filteredPosts = [];
  }

  onSearchChange() {
    if (!this.searchQuery.trim()) {
      this.filteredPosts = [];
      return;
    }

    const query = this.searchQuery.toLowerCase();
    this.filteredPosts = this.allPosts.filter(post => {
      const title = post.attributes.title?.toLowerCase() || '';
      const description = post.attributes.description?.toLowerCase() || '';
      
      // Handle content which can be string or object
      let contentStr = '';
      if (typeof post.content === 'string') {
        contentStr = post.content.toLowerCase();
      }
      
      return title.includes(query) || 
             description.includes(query) || 
             contentStr.includes(query);
    }).slice(0, 10); // Limit to 10 results
  }

  clearSearch() {
    this.searchQuery = '';
    this.filteredPosts = [];
  }
}
