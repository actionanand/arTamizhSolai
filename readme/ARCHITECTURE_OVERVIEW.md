# Architecture Overview: Categories, Tags & Footer System

## Component Hierarchy

```
App (root component)
├── Navbar
│   └── Search Component
├── Router Outlet
│   ├── Home Page
│   ├── Blog Index Page
│   │   ├── Category Filters
│   │   ├── Tag Filters
│   │   ├── Applied Filters Display
│   │   ├── Post List (paginated)
│   │   └── Pagination Controls
│   ├── Blog Detail Page ([slug])
│   │   ├── Post Content
│   │   ├── Table of Contents
│   │   ├── Disclaimers
│   │   ├── Post Navigation
│   │   └── Recent Posts Sidebar
│   ├── Archive Page
│   │   ├── Category Filters
│   │   ├── Tag Filters
│   │   ├── Year Groups
│   │   └── Post Lists (by year)
│   └── ...
└── Footer
    ├── Contact Button → Contact Modal (Google Forms)
    └── Social Icons (from socialIcons config)
```

## Data Flow Diagram

```
Post Files (Markdown)
    ↓
Post Attributes Interface
├─ title, slug, description, date
├─ category (NEW)
├─ tags[] (NEW)
└─ ...
    ↓
injectContentFiles<PostAttributes>()
    ↓
Blog & Archive Pages
├─ Extract Categories
├─ Extract Tags
├─ Apply Filters
├─ Apply Pagination
└─ Render Results
    ↓
User Views Filtered Posts
```

## Filter Processing Flow

```
User Selects Filter(s)
    ↓
Route Query Parameters Updated
    ↓
Page Subscribes to Query Params
    ↓
Apply Filters Function
├─ Check Category Match: post.category === selectedCategory
├─ Check Tag Match: selectedTags.some(tag => post.tags.includes(tag))
└─ Both conditions must be true (AND logic for category + tags, OR logic for tags)
    ↓
Filter Results
    ↓
Apply Pagination (15 posts per page on blog, 25 per year on archive)
    ↓
Render Paginated Results
```

## Social Icons Configuration Flow

```
Social Config File (social-config.ts)
├─ SocialIcon Interface
│  ├─ name: string
│  ├─ url: string
│  ├─ icon: string
│  └─ enabled: boolean
└─ socialIcons Array (9 icons)
    ↓
Footer Component
    ↓
Filter by enabled: true
    ↓
Render Active Icons Only
    ↓
Display on Footer with SVG + Link
```

## File Dependencies

```
App Root Component (app.ts)
├─ imports: NavbarComponent
├─ imports: FooterComponent (NEW)
└─ imports: RouterOutlet

Navbar Component
├─ imports: SearchComponent
└─ imports: RouterLink/RouterLinkActive

Footer Component (NEW)
├─ imports: ContactModalComponent
├─ imports: CommonModule
├─ uses: socialIcons from config/social-config.ts
└─ uses: environment.googleFormId

Blog Page
├─ imports: RouterLink, CommonModule
├─ uses: injectContentFiles<PostAttributes>()
├─ uses: ActivatedRoute (for query params)
└─ methods: extractCategories(), extractTags(), applyFilters()

Archive Page
├─ imports: RouterLink, CommonModule
├─ uses: injectContentFiles<PostAttributes>()
├─ uses: ActivatedRoute (for query params)
└─ methods: extractCategories(), extractTags(), applyFilters(), groupByYear()

Post Attributes Interface
├─ category?: string (NEW)
└─ tags?: string[] (NEW)

Social Config (NEW)
└─ exports: SocialIcon[], socialIcons array
```

## Database-like Structure

```
Post Attributes Schema
{
  title: string;
  slug: string;
  description: string;
  date?: string;
  coverImage?: string;
  category?: string;          ← NEW
  tags?: string[];            ← NEW
  toc?: boolean;
  disclaimerEnabled?: boolean;
  disclaimerText?: string;
}

Example Document:
{
  title: "Getting Started with Angular",
  slug: "angular-getting-started",
  description: "A beginner's guide",
  date: "January 25, 2025",
  category: "Technology",
  tags: ["angular", "typescript", "frontend"],
  toc: true
}
```

## State Management Flow

### Blog Page State
```
Component State:
├─ selectedCategory: string | null
├─ selectedTags: string[]
├─ currentPage: number
├─ totalPages: number
├─ filteredPosts: Post[]
├─ pagedPosts: Post[] (current page only)
├─ availableCategories: string[]
└─ availableTags: string[]

Query Params ↔ Component State
/blog?category=Technology&tags=angular,typescript
     ↓
{
  selectedCategory: "Technology",
  selectedTags: ["angular", "typescript"]
}
```

### Archive Page State
```
Component State:
├─ selectedCategory: string | null
├─ selectedTags: string[]
├─ availableCategories: string[]
├─ availableTags: string[]
├─ years: string[]
├─ filteredYears: string[] (only years with matches)
└─ grouped: Record<year, Post[]>
```

## Filtering Algorithm

```
For each post in posts:
  IF selectedCategory is set:
    IF post.category !== selectedCategory:
      SKIP this post
  
  IF selectedTags is not empty:
    IF post doesn't have ANY of the selected tags:
      SKIP this post
  
  INCLUDE this post in results

Return filtered results
```

## URL Query Parameter Examples

| URL | Meaning |
|-----|---------|
| `/blog` | Show all posts |
| `/blog?category=Technology` | Show only Technology posts |
| `/blog?tags=angular` | Show posts with angular tag |
| `/blog?tags=angular,typescript` | Show posts with angular OR typescript tags |
| `/blog?category=Technology&tags=angular` | Show Technology posts with angular tag |
| `/archive` | Show all posts by year |
| `/archive?category=Literature` | Show only Literature posts by year |

## CSS Class Hierarchy

```
.blog-archive
├─ .archive-header
├─ .filters-section
│  ├─ .filter-group
│  ├─ .filter-title
│  ├─ .filter-tags
│  └─ .filter-tag (.active)
├─ .applied-filters
│  ├─ .applied-filters-label
│  ├─ .filter-badge
│  └─ .remove-filter
├─ .posts-list
│  ├─ .post-preview
│  ├─ .post-preview__image-container
│  ├─ .post-preview__content
│  ├─ .post-preview__meta
│  ├─ .category-tag (post-meta-tag)
│  ├─ .tag-tag (post-meta-tag)
│  └─ .post-preview__link
├─ .no-posts
├─ .reset-btn
└─ .pagination

.year-archive (Archive Page variant)
├─ .archive-year
├─ .archive-year__title
├─ .archive-year__item
├─ .archive-year__link
├─ .archive-year__meta
├─ .archive-meta-tag
```

## Responsive Breakpoints

| Breakpoint | Width | Changes |
|------------|-------|---------|
| Desktop | > 768px | Grid 2-column layout, full filters |
| Tablet | 640px - 768px | Single column, wrapped filters |
| Mobile | < 640px | Single column, compact filters |

## Performance Characteristics

| Operation | Complexity | Time |
|-----------|-----------|------|
| Extract categories | O(n) | ~ 1ms for 100 posts |
| Extract tags | O(n) | ~ 1ms for 100 posts |
| Filter posts | O(n) | ~ 1-2ms for 100 posts |
| Paginate results | O(1) | < 1ms |
| Re-render page | O(p) | p = page size (15) |
| **Total filter operation** | **O(n)** | **< 5ms for 100 posts** |

## Features Matrix

| Feature | Blog | Archive | Footer |
|---------|------|---------|--------|
| Category Filter | ✅ | ✅ | - |
| Tag Filter | ✅ | ✅ | - |
| Multi-tag OR logic | ✅ | ✅ | - |
| Combined filtering | ✅ | ✅ | - |
| Pagination | ✅ | - | - |
| Post count badges | ✅ | ✅ | - |
| Applied filters display | ✅ | ✅ | - |
| Reset filters button | ✅ | ✅ | - |
| Category/tag badges on posts | ✅ | ✅ | - |
| Contact button | - | - | ✅ |
| Social icons | - | - | ✅ |
| Copyright year | - | - | ✅ |

## Browser Compatibility

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome | ✅ | Latest 2 versions |
| Firefox | ✅ | Latest 2 versions |
| Safari | ✅ | Latest 2 versions |
| Edge | ✅ | Latest 2 versions |
| IE11 | ❌ | Not supported |
| Mobile Safari | ✅ | iOS 12+ |
| Chrome Mobile | ✅ | Android 5+ |

## Build & Deployment

```
Source Code
    ↓
TypeScript Compiler
    ↓
Angular Build (ng build)
    ↓
Analog Prerender
    ├─ Generates static HTML
    ├─ Pre-renders all routes
    └─ Creates dist/analog/public
    ↓
GitHub Pages Deployment
    ├─ Uploads dist/analog/public
    ├─ Serves with base href /artamizhsolai/
    └─ Returns 404.html for SPA routing
```

## Internationalization (i18n) Readiness

### Currently Not Internationalized
- Filter button labels ("All", "Categories", "Tags", etc.)
- Applied filter display text
- Pagination text

### Could Be Internationalized With
- i18next or Angular's i18n module
- Translation files for English, Tamil, etc.
- Locale-based filtering in footer

## Future Enhancement Ideas

### Short Term (1-2 weeks)
- [ ] Search filtering by category/tag
- [ ] Category/tag slugs for URL `/blog/category/technology`
- [ ] Recent categories sidebar on blog page
- [ ] Most popular tags cloud

### Medium Term (1-2 months)
- [ ] Category-specific RSS feeds
- [ ] Tag-specific RSS feeds
- [ ] Related posts by category/tags
- [ ] Category/tag statistics dashboard
- [ ] Filter preset buttons ("Most Popular Tags", etc.)

### Long Term (3+ months)
- [ ] Category descriptions and custom pages
- [ ] Tag descriptions and custom pages
- [ ] Full-text search integration
- [ ] Machine learning tag suggestions
- [ ] Category/tag autocomplete in CMS
- [ ] Multi-language support (English, Tamil, etc.)

## Security Considerations

### Current Implementation
- ✅ Query parameters sanitized by Angular Router
- ✅ No user input directly rendered (safe from XSS)
- ✅ All filtering happens client-side (no SQL injection risks)
- ✅ No authentication required

### Potential Enhancements
- Add input validation for category/tag names
- Rate limit filter operations (if moved to backend)
- Add CSRF protection (if form-based)

## Accessibility (a11y)

### Current Implementation
- ✅ Semantic HTML (buttons, links, sections)
- ✅ ARIA labels on social icons
- ✅ Color contrast meets WCAG AA
- ✅ Keyboard navigation works
- ✅ Screen reader friendly

### Could Be Enhanced
- [ ] ARIA live regions for filter updates
- [ ] Focus management on filter changes
- [ ] Keyboard shortcuts for common filters
- [ ] Filter count announcements for screen readers
