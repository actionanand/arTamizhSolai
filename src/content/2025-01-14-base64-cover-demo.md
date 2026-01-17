---
title: "Base64 Image Guide - Cover & Inline Images"
slug: "base64-cover-demo"
description: "Complete guide to using base64 encoded images as cover images and inline content"
coverImageId: "base64-images#SAMPLE_LANDSCAPE"
date: "2025-01-14"
category: "Demo"
tags: ["demo", "images", "base64", "tutorial"]
isDraft: true
---

# Base64 Image Guide - Cover, Inline & Background Images

This post demonstrates **three ways** to use base64 encoded images in your blog posts:
1. **Cover Images** - The main post image
2. **Inline Images** - Images within markdown content
3. **Background Images** - Repeating background patterns for the entire post

---

## Part 1: Cover Images

### How Cover Images Work

Use the `coverImageId` property in frontmatter with the format `"filename#CONSTANT_NAME"`:

```yaml
coverImageId: "base64-images#SAMPLE_LANDSCAPE"
```

This tells the system to:
1. Import from `/src/data/images/base64-images.ts`
2. Look for the constant named `SAMPLE_LANDSCAPE`
3. Use that base64 data URI as the cover image

### File Organization

Organize your base64 images across multiple files:

- `house.ts` - House and building images
- `nature.ts` - Nature and landscape images  
- `icons.ts` - Icons and small graphics
- `base64-images.ts` - General images

### Cover Image Examples

```yaml
# From house.ts
coverImageId: "house#PLACEHOLDER_IMAGE"

# From base64-images.ts
coverImageId: "base64-images#SAMPLE_LANDSCAPE"

# From future nature.ts
coverImageId: "nature#FOREST_SCENE"
```

---

## Part 2: Inline Images in Markdown

You can also embed base64 images **inside your markdown content** using a special syntax!

### Basic Syntax

```
::img[filename#CONSTANT_NAME]
```

### Image Only

::img[base64-images#SAMPLE_LANDSCAPE]

### Image with Alt Text

::img[base64-images#SAMPLE_LANDSCAPE|A placeholder image demonstrating base64 in markdown]

### Image with Width

::img[base64-images#SAMPLE_LANDSCAPE|Beautiful landscape|600px]

### Centered Image with All Options

::img[base64-images#SAMPLE_LANDSCAPE|Centered landscape with custom width|500px|center]

---

## Inline Image Format Reference

The syntax supports multiple optional parameters separated by `|`:

```
::img[filename#CONSTANT|alt text|width|alignment]
```

**Parameters:**
1. `filename#CONSTANT` - **Required** - Image reference (e.g., `house#PLACEHOLDER_IMAGE`)
2. `alt text` - **Optional** - Alt text for accessibility
3. `width` - **Optional** - Max width (e.g., `500px`, `80%`)
4. `alignment` - **Optional** - Use `center` to center the image

**Examples:**

# Just the image

```markdown
::img[base64-images#PLACEHOLDER_IMAGE]
```

# With alt text

```markdown
::img[base64-images#SAMPLE_LANDSCAPE|Beautiful landscape photo]
```

# With alt text and width

```markdown
::img[base64-images#SAMPLE_LANDSCAPE|Beautiful landscape photo|400px]
```

# Centered with all options

```markdown
::img[base64-images#SAMPLE_LANDSCAPE|Beautiful landscape photo|400px|center]
```


---

## Part 3: Background Images (Repeating Pattern)

### How Background Images Work

Use the `bgImg` property in frontmatter to add a repeating background pattern to the entire blog post:

```yaml
bgImg: "images/year-2026/kanda-sashti-1.webp"
```

Or use a base64 reference:

```yaml
bgImg: "base64-images#SAMPLE_LANDSCAPE"
```

### Enhanced Readability with Filters

Control brightness and grayscale to make text more readable over background images:

```yaml
# Dim the background (50% brightness)
bgImg: "base64-images#SAMPLE_LANDSCAPE"
bgImgBrightness: 50

# Convert to grayscale (100% gray)
bgImg: "images/year-2026/kanda-sashti-1.webp"
bgImgGrayscale: 100

# Combine both: dim and partially grayscale
bgImg: "base64-images#SAMPLE_LANDSCAPE"
bgImgBrightness: 40
bgImgGrayscale: 80

# Disable overlay for very light backgrounds
bgImg: "images/year-2026/light-pattern.webp"
bgImgDisableOverlay: true

# Light background with brightness control
bgImg: "base64-images#SAMPLE_LANDSCAPE"
bgImgBrightness: 90
bgImgDisableOverlay: true
```

**Filter Properties:**
- `bgImgBrightness` - Number (0-100)
  - `100` = Original brightness (default)
  - `50` = Half brightness (dimmed)
  - `0` = Completely dark
- `bgImgGrayscale` - Number (0-100)
  - `0` = Full color (default)
  - `50` = Partially desaturated
  - `100` = Complete grayscale
- `bgImgDisableOverlay` - Boolean (default: `false`)
  - `false` = White overlay enabled (default, 92% opacity)
  - `true` = No overlay (for very light backgrounds)

### Background Image Features

- **Full-Screen Coverage**: Background extends to entire viewport, not just the article content
- **Repeating Pattern**: Image tiles across the entire background
- **Mobile Optimized**: Automatically adjusts background size for better display on small screens
- **Semi-transparent Overlay**: Automatically adds a white overlay (92% opacity) for text readability
- **Overlay Control**: Disable overlay for very light backgrounds with `bgImgDisableOverlay: true`
- **Brightness Control**: Dim images to reduce visual impact
- **Grayscale Conversion**: Remove color for subtle, professional look
- **Flexible Format**: Supports both regular image paths and base64 references

### Background Image Examples

```yaml
# Basic - Regular image path
bgImg: "images/year-2026/kanda-sashti-1.webp"

# Basic - Base64 reference
bgImg: "base64-images#SAMPLE_LANDSCAPE"

# With dimming (60% brightness)
bgImg: "base64-images#SAMPLE_LANDSCAPE"
bgImgBrightness: 60

# Full grayscale
bgImg: "images/year-2026/kanda-sashti-1.webp"
bgImgGrayscale: 100

# Dim + grayscale for subtle background
bgImg: "nature#FOREST_PATTERN"
bgImgBrightness: 30
bgImgGrayscale: 90

# Light background without overlay
bgImg: "images/year-2026/light-pattern.webp"
bgImgDisableOverlay: true
```

### When to Use Background Images

**Best for:**
- Subtle patterns or textures
- Small repeating designs
- Cultural or thematic decorations
- Brand identity elements

**Avoid for:**
- Large detailed images (will tile poorly)
- High-contrast images (readability issues)
- Photos meant to be viewed as single images

:::tip
For background images, use small, tileable patterns (< 20KB) that work well when repeated. Combine with `bgImgBrightness: 40` and `bgImgGrayscale: 80` for subtle, readable backgrounds. The background automatically adjusts for mobile devices with optimized sizing.
:::

---

## Adding New Base64 Images

### Single Location Management ✨

All image imports and registry management happens in **one centralized file**: [base64-images-registry.ts](`src/app/config/base64-images-registry.ts`)

**Step 1:** Create or choose a category file in `src/data/images/`:

```typescript
// base64-images.ts (or create nature.ts, icons.ts, etc.)
export const MY_NEW_IMAGE = "data:image/jpeg;base64,/9j/4AAQ...";
```

**Step 2:** Register in `src/app/config/base64-images-registry.ts`:

```typescript
// Import at the top
import * as natureImages from '../../data/images/nature';

// Add to registry (this is the ONLY place you need to edit!)
export const IMAGE_REGISTRY: Record<string, any> = {
  'base64-images': base64Images,
  'nature': natureImages,  // Add here
};
```

**That's it!** Both cover images and inline images automatically use the updated registry. No need to edit multiple files.

**Step 3:** Use in cover image or inline:

```yaml
coverImageId: "nature#MY_NEW_IMAGE"
```

Or inline:

```markdown
::img[nature#MY_NEW_IMAGE|Description|500px|center]
```

---

## Benefits

✅ **No Network Requests** - Images load instantly  
✅ **No 404 Errors** - Images embedded in code  
✅ **Version Control** - Track images in git  
✅ **Organized** - Category-based file structure  
✅ **Centralized** - Single registry for all image imports  
✅ **Flexible** - Use as cover, inline, or background images  
✅ **Customizable** - Background images with automatic readability overlay

---

## Best Practices

⚠️ **Image Size**: Keep base64 images small (< 50KB) as they increase bundle size by ~33%

**Recommended for:**
- Icons and logos
- Small thumbnails
- Critical above-the-fold images
- Demo/placeholder images

**Not recommended for:**
- Large photos (use regular image paths)
- Many images on one page
- Frequently changing images

:::warning
Base64 encoding increases file size by ~33%. Keep images optimized.
:::
