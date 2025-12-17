# Quick Start Guide: Footer, Categories, and Tags

## What's New

Your blog now has:
1. ✅ **Footer component** with contact button and social media icons
2. ✅ **Social media configuration** with 9 controllable icons
3. ✅ **Category system** (one category per post)
4. ✅ **Tags system** (multiple tags per post)
5. ✅ **Filtering** on blog and archive pages
6. ✅ **Pagination** maintained across filters

## How to Use

### 1. Add Categories and Tags to Your Blog Posts

Edit your markdown files (e.g., `src/content/my-post.md`):

```markdown
---
title: "My Blog Post"
slug: "my-blog-post"
description: "A great post about technology"
date: "January 25, 2025"
coverImage: "path/to/image.jpg"
category: "Technology"
tags: ["angular", "typescript", "web-development"]
toc: true
disclaimerEnabled: false
disclaimerText: "Custom disclaimer"
---

Your post content here...
```

### 2. Configure Social Icons

Edit `src/app/config/social-config.ts`:

```typescript
export const socialIcons: SocialIcon[] = [
  { name: 'Twitter', url: 'https://twitter.com/YOUR_HANDLE', icon: 'twitter', enabled: true },
  { name: 'GitHub', url: 'https://github.com/YOUR_USERNAME', icon: 'github', enabled: true },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/YOUR_PROFILE', icon: 'linkedin', enabled: true },
  { name: 'Instagram', url: 'https://instagram.com/YOUR_HANDLE', icon: 'instagram', enabled: true },
  { name: 'Facebook', url: 'https://facebook.com/YOUR_PAGE', icon: 'facebook', enabled: true },
  { name: 'YouTube', url: 'https://youtube.com/@YOUR_CHANNEL', icon: 'youtube', enabled: true },
  { name: 'TikTok', url: 'https://tiktok.com/@YOUR_HANDLE', icon: 'tiktok', enabled: false },
  { name: 'WhatsApp', url: 'https://wa.me/YOUR_PHONE', icon: 'whatsapp', enabled: false },
  { name: 'WhatsApp Business', url: 'https://wa.me/YOUR_PHONE', icon: 'whatsapp-business', enabled: false }
];
```

**To hide an icon**: Change `enabled: true` to `enabled: false`
**To show an icon**: Change `enabled: false` to `enabled: true`

### 3. Blog Page Features

Visit `/blog` to see:
- **Category filter buttons** - Click to show only posts in that category
- **Tag filter buttons** - Click to show only posts with that tag
- **Post counts** - Each filter shows how many posts match
- **Applied filters** - Shows which filters are active with removal options
- **Color-coded badges** - Blue for categories, purple for tags
- **Pagination** - Shows filtered posts per page

**Filter Logic**:
- Select a category → shows posts in that category only
- Select tags → shows posts with ANY of those tags
- Select both → shows posts in category AND with any selected tag
- Click "All" to clear filters

### 4. Archive Page Features

Visit `/archive` to see:
- **Category and tag filters** - Same as blog page
- **Posts by year** - Grouped by year with categories/tags shown
- **Applied filters** - Filtered archive with badge display
- **Only matching years shown** - Years with no matching posts hidden

### 5. View Footer

The footer appears on every page with:
- **Contact Me button** - Opens embedded Google Forms
- **Social media icons** - Links to your social profiles
- **Dynamic copyright year** - Auto-calculated (2025 or 2020-2025)

## File Locations

| Component | Location |
|-----------|----------|
| Footer | `src/app/components/footer.component.ts` |
| Social Config | `src/app/config/social-config.ts` |
| Blog Page | `src/app/pages/blog/index.page.ts` |
| Archive Page | `src/app/pages/archive.page.ts` |
| Root App | `src/app/app.ts` |
| Navbar | `src/app/components/navbar.component.ts` |
| Post Attributes | `src/app/post-attributes.ts` |

## Frontmatter Reference

### Full Frontmatter Example
```yaml
---
title: "Post Title"
slug: "post-slug"
description: "Brief description of the post"
date: "January 25, 2025"
coverImage: "path/to/cover.jpg"
category: "Technology"
tags: ["tag1", "tag2", "tag3"]
toc: true
disclaimerEnabled: true
disclaimerText: "Custom disclaimer message"
---
```

### Minimal Frontmatter (Category/Tags Optional)
```yaml
---
title: "Post Title"
slug: "post-slug"
description: "Brief description"
date: "January 25, 2025"
---
```

### Fields Explained
- `title` - Post title (required)
- `slug` - URL slug (required)
- `description` - Short description (required)
- `date` - Publication date (optional)
- `coverImage` - Image path (optional, shows default if missing)
- `category` - Single category (optional, new)
- `tags` - Array of tags (optional, new)
- `toc` - Show table of contents (optional)
- `disclaimerEnabled` - Show disclaimer (optional)
- `disclaimerText` - Custom disclaimer (optional)

## CSS Classes Reference

### Filter Styling
```css
.filter-tag           /* Filter button */
.filter-tag.active    /* Selected filter button */
.filter-badge         /* Applied filter badge */
.remove-filter        /* X button in applied filters */
```

### Post Meta Tags
```css
.category-tag         /* Blue category badge */
.tag-tag              /* Purple tag badge */
.post-meta-tag        /* Base tag styling */
```

### Archive Styling
```css
.archive-year         /* Year section container */
.archive-year__link   /* Post link in archive */
.archive-meta-tag     /* Tag/category in archive */
```

## Customization

### Add a New Social Icon

1. Open `src/app/config/social-config.ts`
2. Add new icon to `socialIcons` array:
   ```typescript
   { name: 'Mastodon', url: 'https://mastodon.social/@YOUR_HANDLE', icon: 'mastodon', enabled: true }
   ```
3. Add SVG icon to `src/app/components/footer.component.ts` in the footer template

### Change Filter Colors

Edit CSS in `src/app/pages/blog/index.page.ts`:
```css
.category-tag {
  background: #e3f2fd;  /* Blue background */
  color: #1976d2;       /* Blue text */
  border: 1px solid #1976d2;
}

.tag-tag {
  background: #f3e5f5;  /* Purple background */
  color: #7b1fa2;       /* Purple text */
  border: 1px solid #7b1fa2;
}
```

### Change Posts Per Page

Edit `src/app/pages/blog/index.page.ts`:
```typescript
readonly pageSize = 15;  // Change to 20, 25, etc.
```

Edit `src/app/pages/archive.page.ts`:
```typescript
readonly maxPerYear = 25;  // Change to 30, 50, etc.
```

## Testing

### Test Category Filtering
1. Go to `/blog`
2. Click a category name
3. Only posts with that category should show

### Test Tag Filtering
1. Go to `/blog`
2. Click a tag name
3. Posts with that tag should show
4. Click another tag to see multi-tag filtering

### Test Archive Filtering
1. Go to `/archive`
2. Apply filters
3. Years with no matching posts should hide

### Test Footer
1. Scroll to bottom of any page
2. See contact button and social icons
3. Click contact button → Google Forms modal opens
4. Click social icons → Opens in new tab

### Test Responsive Design
1. Resize browser window to mobile size
2. Filters should wrap
3. Blog previews should be single column
4. Footer should stack vertically

## URL Query Parameters

The blog and archive pages support URL query parameters:

### Examples
- `/blog?category=Technology` - Filter by category
- `/blog?tags=angular,typescript` - Filter by multiple tags
- `/blog?category=Technology&tags=angular` - Filter by both
- `/archive?category=Literature` - Archive filtered by category

You can share these URLs to show pre-filtered posts!

## Troubleshooting

### Posts Not Showing in Filters
- Make sure frontmatter has `category` or `tags` field
- Check that category/tag names match exactly (case-sensitive)

### Filters Not Working
- Clear browser cache and reload
- Check browser console for errors
- Ensure post files have proper frontmatter

### Footer Not Appearing
- Check that `<app-footer></app-footer>` is in `src/app/app.ts` template
- Verify `FooterComponent` is imported in `src/app/app.ts`

### Social Icons Not Showing
- Verify icons are enabled in `src/app/config/social-config.ts`
- Check that URLs are properly formatted
- Ensure SVG icons are defined in footer template

## Next Steps

1. **Add Categories to Your Posts** - Go through existing posts and add appropriate categories
2. **Add Tags to Your Posts** - Add relevant tags for better discoverability
3. **Update Social Links** - Edit `src/app/config/social-config.ts` with your actual URLs
4. **Enable/Disable Icons** - Control which social icons appear by setting `enabled` flag
5. **Test Filtering** - Try filtering by different categories and tags
6. **Customize Colors** - Adjust CSS if you want different filter colors

## Support

For more details, see:
- [CHANGELOG_FOOTER_CATEGORIES_TAGS.md](CHANGELOG_FOOTER_CATEGORIES_TAGS.md)
- [ADMONITIONS.md](ADMONITIONS.md)
- Component source files in `src/app/`
