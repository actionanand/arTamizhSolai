# Base64 Inline Images Quick Reference

## Overview

You can embed base64 images directly in your markdown content using a custom pipe syntax.

## Syntax

```
::img[filename#CONSTANT_NAME]
::img[filename#CONSTANT_NAME|alt text]
::img[filename#CONSTANT_NAME|alt text|width]
::img[filename#CONSTANT_NAME|alt text|width|center]
```

## Parameters

| Position | Name | Required | Description | Example |
|----------|------|----------|-------------|---------|
| 1 | Image Reference | ✅ Yes | Format: `filename#CONSTANT_NAME` | `base64-images#SAMPLE_LANDSCAPE` |
| 2 | Alt Text | ❌ No | Image description for accessibility | `Beautiful landscape` |
| 3 | Width | ❌ No | Max width (CSS value) | `500px`, `80%`, `20rem` |
| 4 | Alignment | ❌ No | Use `center` to center image | `center` |

## Examples

### Basic Image
```markdown
::img[base64-images#PLACEHOLDER_IMAGE]
```

### With Alt Text
```markdown
::img[base64-images#SAMPLE_LANDSCAPE|A beautiful landscape photo]
```

### Custom Width
```markdown
::img[base64-images#SAMPLE_LANDSCAPE|Landscape|600px]
```

### Centered with All Options
```markdown
::img[base64-images#SAMPLE_LANDSCAPE|Beautiful view|500px|center]
```

## Adding New Images

### 1. Add Constant to Image File

In `src/data/images/base64-images.ts` (or create new category file):

```typescript
export const MY_IMAGE = "data:image/jpeg;base64,/9j/4AAQSkZJRg...";
```

### 2. Register New File (if needed)

If you created a new category file (e.g., `nature.ts`), register it in [base64-images-registry.ts](../src/app/config/base64-images-registry.ts):

**Import:**
```typescript
import * as natureImages from '../../data/images/nature';
```

**Add to Registry:**
```typescript
export const IMAGE_REGISTRY: Record<string, any> = {
  'base64-images': base64Images,
  'nature': natureImages,  // Add here
};
```

**That's it!** The centralized registry is automatically used by both cover images and inline images.

### 3. Use in Markdown

```markdown
::img[nature#MY_IMAGE|Description|500px|center]
```

## Image File Organization

```
src/data/images/
├── base64-images.ts  # General images (exists)
├── nature.ts         # Nature/landscape images (create as needed)
├── icons.ts          # Icons and symbols (create as needed)
└── [category].ts     # Other categories (create as needed)
```

## Styling

The pipe generates HTML with the following classes:

```html
<div class="base64-image base64-image--center">
  <img src="..." alt="..." style="max-width: 500px;" class="base64-image__img" />
  <p class="base64-image__caption">Alt text appears here</p>
</div>
```

### Custom Styling

Override in your component or global styles:

```css
.base64-image__img {
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.base64-image__caption {
  color: #666;
  font-size: 0.85rem;
}
```

## Error Handling

If an image cannot be found, a warning message displays:

```html
⚠️ Image not found: filename#CONSTANT_NAME
```

Check browser console for details:
- Invalid format warning
- File not registered warning
- Constant not found warning

## Best Practices

✅ **DO:**
- Use descriptive alt text for accessibility
- Keep base64 images small (< 50KB)
- Organize images by category
- Use appropriate widths for different contexts

❌ **DON'T:**
- Embed large images (> 100KB)
- Forget alt text for content images
- Use base64 for frequently changing images
- Over-use on a single page (affects bundle size)

## Implementation Files

- **Pipe**: [base64-image.pipe.ts](../src/app/pipes/base64-image.pipe.ts)
- **Styles**: [base64-images.css](../src/styles/base64-images.css)
- **Data**: [src/data/images/](../src/data/images/)

## See Also

- [BASE64_COVER_IMAGE_GUIDE.md](BASE64_COVER_IMAGE_GUIDE.md) - Cover image implementation
- [TEXT_FORMATTING_GUIDE.md](TEXT_FORMATTING_GUIDE.md) - Other inline formatting
- [CARD_FORMATTING_GUIDE.md](CARD_FORMATTING_GUIDE.md) - Card formatting syntax
