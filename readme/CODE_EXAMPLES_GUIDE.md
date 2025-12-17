# Code Examples & Snippets Guide

## 📝 Frontmatter Examples

### Example 1: Technology Post with Multiple Tags
```markdown
---
title: "Building Angular Apps with TypeScript"
slug: "angular-typescript-guide"
description: "Learn how to build scalable Angular applications using TypeScript and best practices"
date: "January 25, 2025"
coverImage: "images/angular-cover.jpg"
category: "Technology"
tags: ["angular", "typescript", "web-development", "frontend"]
toc: true
disclaimerEnabled: false
---

# Building Angular Apps with TypeScript

Your post content starts here...
```

### Example 2: Literature Post with Single Tag
```markdown
---
title: "Tamil Classical Literature Review"
slug: "tamil-literature-review"
description: "Exploring the beauty and depth of classical Tamil literature"
date: "January 20, 2025"
coverImage: "images/tamil-cover.jpg"
category: "Literature"
tags: ["tamil", "literature", "classics"]
toc: true
disclaimerEnabled: true
disclaimerText: "This is a literary critique and may contain spoilers."
---

# Tamil Classical Literature Review

Your post content here...
```

### Example 3: Design Post without Tags
```markdown
---
title: "UI Design Principles for Web"
slug: "ui-design-principles"
description: "Essential principles for creating beautiful and functional user interfaces"
date: "January 15, 2025"
category: "Design"
toc: false
disclaimerEnabled: false
---

# UI Design Principles for Web

Post content...
```

### Example 4: Minimal Post (No Category/Tags)
```markdown
---
title: "First Blog Post"
slug: "first-blog-post"
description: "My first blog post on this platform"
date: "January 10, 2025"
---

# First Blog Post

Even without category/tags, this post will display normally.
```

---

## 🔧 Configuration Examples

### Social Config - Enable All Icons
```typescript
// src/app/config/social-config.ts
export const socialIcons: SocialIcon[] = [
  { 
    name: 'Twitter', 
    url: 'https://twitter.com/your-username', 
    icon: 'twitter', 
    enabled: true 
  },
  { 
    name: 'GitHub', 
    url: 'https://github.com/your-username', 
    icon: 'github', 
    enabled: true 
  },
  { 
    name: 'LinkedIn', 
    url: 'https://linkedin.com/in/your-profile', 
    icon: 'linkedin', 
    enabled: true 
  },
  { 
    name: 'Instagram', 
    url: 'https://instagram.com/your-username', 
    icon: 'instagram', 
    enabled: true 
  },
  { 
    name: 'Facebook', 
    url: 'https://facebook.com/your-page', 
    icon: 'facebook', 
    enabled: true 
  },
  { 
    name: 'YouTube', 
    url: 'https://youtube.com/@your-channel', 
    icon: 'youtube', 
    enabled: true 
  },
  { 
    name: 'TikTok', 
    url: 'https://tiktok.com/@your-username', 
    icon: 'tiktok', 
    enabled: true 
  },
  { 
    name: 'WhatsApp', 
    url: 'https://wa.me/919876543210', 
    icon: 'whatsapp', 
    enabled: true 
  },
  { 
    name: 'WhatsApp Business', 
    url: 'https://wa.me/919876543210', 
    icon: 'whatsapp-business', 
    enabled: false 
  }
];
```

### Social Config - Minimal Setup (Only GitHub and Twitter)
```typescript
// Only enable GitHub and Twitter
export const socialIcons: SocialIcon[] = [
  { 
    name: 'Twitter', 
    url: 'https://twitter.com/your-username', 
    icon: 'twitter', 
    enabled: true  // ✓ ENABLED
  },
  { 
    name: 'GitHub', 
    url: 'https://github.com/your-username', 
    icon: 'github', 
    enabled: true  // ✓ ENABLED
  },
  { 
    name: 'LinkedIn', 
    url: 'https://linkedin.com/in/your-profile', 
    icon: 'linkedin', 
    enabled: false  // ✗ DISABLED
  },
  // ... rest disabled
];
```

---

## 🎯 Filtering Examples

### URL Query Parameter Examples

#### Single Category Filter
```
/blog?category=Technology
Shows: Only posts with category: "Technology"
```

#### Single Tag Filter
```
/blog?tags=angular
Shows: Posts that have "angular" tag
```

#### Multiple Tags (OR Logic)
```
/blog?tags=angular,typescript
Shows: Posts with "angular" tag OR "typescript" tag (or both)
```

#### Combined Category and Tags
```
/blog?category=Technology&tags=angular,typescript
Shows: Technology posts that have "angular" OR "typescript" tags
```

#### Archive Page Filter
```
/archive?category=Literature
Shows: All literature posts grouped by year
```

---

## 💻 TypeScript Type Examples

### PostAttributes Interface
```typescript
interface PostAttributes {
  title: string;
  slug: string;
  description: string;
  date?: string;
  coverImage?: string;
  category?: string;        // NEW: Single category
  tags?: string[];          // NEW: Multiple tags
  toc?: boolean;
  disclaimerEnabled?: boolean;
  disclaimerText?: string;
}
```

### SocialIcon Interface
```typescript
export interface SocialIcon {
  name: string;      // Display name: "Twitter", "GitHub", etc.
  url: string;       // URL to social profile
  icon: string;      // Icon identifier: "twitter", "github", etc.
  enabled: boolean;  // Show/hide this icon
}
```

---

## 🔄 Component Method Examples

### Blog Page - Extract Categories
```typescript
// In blog/index.page.ts
private extractCategories() {
  const categories = new Set<string>();
  
  // Loop through all posts and collect categories
  this.posts.forEach(post => {
    if (post.attributes.category) {
      categories.add(post.attributes.category);
    }
  });
  
  // Convert to sorted array
  this.availableCategories = Array.from(categories).sort();
}

// Result: ["Design", "Literature", "Technology"]
```

### Blog Page - Extract Tags
```typescript
// In blog/index.page.ts
private extractTags() {
  const tags = new Set<string>();
  
  // Loop through all posts and collect tags
  this.posts.forEach(post => {
    if (post.attributes.tags && Array.isArray(post.attributes.tags)) {
      post.attributes.tags.forEach(tag => tags.add(tag));
    }
  });
  
  // Convert to sorted array
  this.availableTags = Array.from(tags).sort();
}

// Result: ["angular", "blog", "frontend", "literature", "tamil", "typescript", "web-development"]
```

### Blog Page - Apply Filters
```typescript
// In blog/index.page.ts
private applyFilters() {
  this.filteredPosts = this.posts.filter(post => {
    // Check category match
    const matchesCategory = !this.selectedCategory || 
      post.attributes.category === this.selectedCategory;
    
    // Check tag match (OR logic: any selected tag)
    const matchesTags = this.selectedTags.length === 0 || 
      (post.attributes.tags && 
       this.selectedTags.some(tag => post.attributes.tags?.includes(tag)));
    
    // Both conditions must be true (AND logic)
    return matchesCategory && matchesTags;
  });

  // Update pagination
  this.totalPages = Math.max(1, Math.ceil(this.filteredPosts.length / this.pageSize));
  this.currentPage = 1;
  this.updatePagedPosts();
}
```

### Blog Page - Set Category
```typescript
// In blog/index.page.ts
setCategory(category: string | null) {
  this.selectedCategory = category;
  this.currentPage = 1;  // Reset to first page
  this.applyFilters();    // Recompute filtered posts
}

// Usage:
// setCategory("Technology")  → Filter by Technology
// setCategory(null)          → Clear category filter
```

### Blog Page - Toggle Tag
```typescript
// In blog/index.page.ts
toggleTag(tag: string) {
  if (this.selectedTags.includes(tag)) {
    // Remove tag if already selected
    this.selectedTags = this.selectedTags.filter(t => t !== tag);
  } else {
    // Add tag if not selected
    this.selectedTags = [...this.selectedTags, tag];
  }
  
  this.currentPage = 1;
  this.applyFilters();
}

// Usage:
// toggleTag("angular")    → Add angular tag filter
// toggleTag("angular")    → Remove angular tag filter (if already selected)
```

### Blog Page - Get Post Counts
```typescript
// In blog/index.page.ts
getPostsCountByCategory(category: string): number {
  return this.posts.filter(p => p.attributes.category === category).length;
}

getPostsCountByTag(tag: string): number {
  return this.posts.filter(p => 
    p.attributes.tags && p.attributes.tags.includes(tag)
  ).length;
}

// Usage:
// getPostsCountByCategory("Technology")  → Returns 5
// getPostsCountByTag("angular")         → Returns 4
```

---

## 📋 Template Examples

### Filter Section Template
```html
<!-- Category Filters -->
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

<!-- Tag Filters -->
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
    @for (tag of availableTags; track tag) {
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
```

### Applied Filters Template
```html
<!-- Show applied filters -->
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
```

### Post Meta Tags Template
```html
<!-- Display category and tags on post -->
@if (post.attributes.category || (post.attributes.tags && post.attributes.tags.length > 0) {
<div class="post-preview__meta">
  @if (post.attributes.category) {
  <span class="post-meta-tag category-tag">{{ post.attributes.category }}</span>
  }
  
  @if (post.attributes.tags && post.attributes.tags.length > 0) {
  @for (tag of post.attributes.tags; track tag) {
  <span class="post-meta-tag tag-tag">{{ tag }}</span>
  }
  }
</div>
}
```

---

## 🎨 CSS Examples

### Filter Button Styling
```css
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
```

### Category Badge Styling
```css
.category-tag {
  background: #e3f2fd;
  color: #1976d2;
  border: 1px solid #1976d2;
}
```

### Tag Badge Styling
```css
.tag-tag {
  background: #f3e5f5;
  color: #7b1fa2;
  border: 1px solid #7b1fa2;
}
```

### Applied Filters Bar Styling
```css
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
```

---

## 🚀 Deployment Examples

### Build Commands
```bash
# Development build
npm run build

# Production build with prerendering
npm run build -- --prerender

# Development server
npm run start

# Run tests
npm run test
```

### Environment Configuration
```typescript
// src/environments/environment.ts (Development)
export const environment = {
  production: false,
  googleFormId: '1FAIpQLSdd5maOire_u5ADq9ljlTQqy4LcYTrrZyoC8qHmGkDUaEXxMg'
};

// src/environments/environment.prod.ts (Production)
export const environment = {
  production: true,
  googleFormId: '1FAIpQLSdd5maOire_u5ADq9ljlTQqy4LcYTrrZyoC8qHmGkDUaEXxMg'
};
```

---

## 🧪 Testing Examples

### Test Filter Application
```typescript
// In blog/index.page.ts (unit test example)
describe('Blog Filtering', () => {
  it('should filter posts by category', () => {
    blog.setCategory('Technology');
    expect(blog.filteredPosts.every(p => p.attributes.category === 'Technology')).toBe(true);
  });

  it('should filter posts by tag', () => {
    blog.toggleTag('angular');
    expect(blog.filteredPosts.every(p => 
      p.attributes.tags?.includes('angular')
    )).toBe(true);
  });

  it('should apply combined filters', () => {
    blog.setCategory('Technology');
    blog.toggleTag('angular');
    expect(blog.filteredPosts.every(p => 
      p.attributes.category === 'Technology' && 
      p.attributes.tags?.includes('angular')
    )).toBe(true);
  });
});
```

---

## 📊 Data Transformation Examples

### Extract Available Categories from Posts
```typescript
const posts = [
  { attributes: { category: 'Technology', title: 'Post 1' } },
  { attributes: { category: 'Technology', title: 'Post 2' } },
  { attributes: { category: 'Literature', title: 'Post 3' } },
  { attributes: { category: 'Design', title: 'Post 4' } }
];

// Extract unique categories
const categories = [...new Set(
  posts
    .filter(p => p.attributes.category)
    .map(p => p.attributes.category)
)].sort();

// Result: ['Design', 'Literature', 'Technology']
```

### Extract Available Tags from Posts
```typescript
const posts = [
  { attributes: { tags: ['angular', 'typescript'] } },
  { attributes: { tags: ['angular', 'frontend'] } },
  { attributes: { tags: ['react', 'typescript'] } }
];

// Extract unique tags
const tags = [...new Set(
  posts
    .flatMap(p => p.attributes.tags || [])
)].sort();

// Result: ['angular', 'frontend', 'react', 'typescript']
```

### Filter Posts by Category and Tags
```typescript
const posts = [
  { attributes: { category: 'Tech', tags: ['angular'] } },
  { attributes: { category: 'Tech', tags: ['react'] } },
  { attributes: { category: 'Design', tags: ['ui'] } }
];

const selectedCategory = 'Tech';
const selectedTags = ['angular', 'react'];

const filtered = posts.filter(post => {
  const matchCategory = !selectedCategory || post.attributes.category === selectedCategory;
  const matchTags = !selectedTags.length || 
    selectedTags.some(tag => post.attributes.tags?.includes(tag));
  return matchCategory && matchTags;
});

// Result: 
// [
//   { category: 'Tech', tags: ['angular'] },
//   { category: 'Tech', tags: ['react'] }
// ]
```

---

## 🔗 URL Query Parameter Helpers

### Get Filter URL
```typescript
// Helper function to generate filtered URL
function getFilterUrl(category: string | null, tags: string[]): string {
  const params = new URLSearchParams();
  
  if (category) {
    params.append('category', category);
  }
  
  if (tags.length > 0) {
    params.append('tags', tags.join(','));
  }
  
  return `/blog${params.toString() ? '?' + params : ''}`;
}

// Usage:
// getFilterUrl('Technology', ['angular'])
// Returns: "/blog?category=Technology&tags=angular"

// getFilterUrl(null, ['angular', 'typescript'])
// Returns: "/blog?tags=angular,typescript"
```

### Parse Filter URL
```typescript
// Helper function to parse filter URL
function parseFilterUrl(url: string): { category: string | null, tags: string[] } {
  const params = new URLSearchParams(new URL(url).search);
  
  return {
    category: params.get('category'),
    tags: params.get('tags')?.split(',') || []
  };
}

// Usage:
// parseFilterUrl("/blog?category=Technology&tags=angular,typescript")
// Returns: { category: 'Technology', tags: ['angular', 'typescript'] }
```

---

This comprehensive code examples guide provides practical snippets for implementing and customizing the footer, categories, and tags features in your blog.
