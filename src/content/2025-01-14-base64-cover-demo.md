---
title: "Base64 Cover Image Demo"
slug: "base64-cover-demo"
description: "Demonstration of using base64 encoded images as cover images via imported constants"
coverImageId: "base64-images#SAMPLE_LANDSCAPE"
date: "2025-01-14"
category: "Demo"
tags: ["demo", "images", "base64"]
isDraft: true
---

# Base64 Cover Image Demo

This post demonstrates the use of base64 encoded cover images through imported TypeScript constants from organized files.

## How It Works

Instead of using a regular image path in the `coverImage` property, this post uses `coverImageId` with the format `"filename#CONSTANT_NAME"`:

```yaml
coverImageId: "base64-images#SAMPLE_LANDSCAPE"
```

This tells the system to:
1. Import from `/src/data/images/base64-images.ts`
2. Look for the constant named `SAMPLE_LANDSCAPE`
3. Use that base64 data URI as the cover image

## File Organization

You can organize your base64 images across multiple files:

- `house.ts` - House and building images
- `nature.ts` - Nature and landscape images  
- `icons.ts` - Icons and small graphics
- `base64-images.ts` - General images

## Usage Examples

```yaml
# From house.ts
coverImageId: "house#PLACEHOLDER_IMAGE"

# From base64-images.ts
coverImageId: "base64-images#SAMPLE_LANDSCAPE"

# From future nature.ts
coverImageId: "nature#FOREST_SCENE"
```

## Benefits

- ✅ No network requests for images
- ✅ No 404 errors
- ✅ Images bundled with application
- ✅ Organized by category
- ✅ Easy to manage and find images

:::warning
Base64 encoding increases file size by ~33%. Keep images optimized.
:::
