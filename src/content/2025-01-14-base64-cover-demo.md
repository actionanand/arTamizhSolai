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

# Base64 Image Guide - Cover & Inline Images

This post demonstrates **two ways** to use base64 encoded images in your blog posts:
1. **Cover Images** - The main post image
2. **Inline Images** - Images within markdown content

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
✅ **Flexible** - Use as cover or inline images  

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
