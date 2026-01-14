# Centralized Base64 Image Registry

## Overview

The base64 image system uses a **single centralized registry** to manage all image imports. This eliminates the need to edit multiple files when adding new image categories.

## Architecture

```
┌─────────────────────────────────────────┐
│  src/app/config/                        │
│  base64-images-registry.ts              │
│  ┌───────────────────────────────────┐  │
│  │ Centralized Registry              │  │
│  │ - Imports all image modules       │  │
│  │ - Exports IMAGE_REGISTRY          │  │
│  │ - Exports resolveBase64Image()    │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
              ▲          ▲
              │          │
    ┌─────────┴──┐  ┌────┴────────┐
    │            │  │             │
┌───┴────────┐   │  │   ┌─────────┴──────┐
│ Cover      │   │  │   │ Inline Images  │
│ Image      │   │  │   │ Pipe           │
│ Helper     │   │  │   │                │
│            │   │  │   │                │
│ Uses:      │   │  │   │ Uses:          │
│ - resolve  │   │  │   │ - resolve      │
│   Base64   │   │  │   │   Base64       │
│   Image()  │   │  │   │   Image()      │
└────────────┘   │  │   └────────────────┘
                 │  │
        ┌────────┴──┴────────┐
        │ Data Layer          │
        │ src/data/images/    │
        │ - base64-images.ts  │
        │ - nature.ts         │
        │ - icons.ts          │
        │ - ...               │
        └─────────────────────┘
```

## Key Files

### 1. Centralized Registry (Single Source of Truth)
**File:** [src/app/config/base64-images-registry.ts](../src/app/config/base64-images-registry.ts)

```typescript
import * as base64Images from '../../data/images/base64-images';
// Add imports for new image files here

export const IMAGE_REGISTRY: Record<string, any> = {
  'base64-images': base64Images,
  // Add new files to registry here
};

export function resolveBase64Image(imageRef: string): string | null {
  // Centralized resolution logic
}
```

**Purpose:**
- ✅ Single location for all image module imports
- ✅ Single location for registry mapping
- ✅ Shared resolution function
- ✅ Used by both cover images and inline images

### 2. Cover Image Helper
**File:** [src/app/utilities/cover-image-helper.ts](../src/app/utilities/cover-image-helper.ts)

```typescript
import { resolveBase64Image } from '../config/base64-images-registry';

export function getCoverImageSrc(attrs: PostAttributes): string {
  if (attrs.coverImageId) {
    const base64Image = resolveBase64Image(attrs.coverImageId);
    // ...
  }
  // ...
}
```

**Purpose:**
- Resolves cover images for blog posts
- Imports `resolveBase64Image` from centralized config
- **No local registry needed**

### 3. Inline Image Pipe
**File:** [src/app/pipes/base64-image.pipe.ts](../src/app/pipes/base64-image.pipe.ts)

```typescript
import { resolveBase64Image } from '../config/base64-images-registry';

export class Base64ImagePipe implements PipeTransform {
  transform(content: string): string {
    // Uses imported resolveBase64Image function
    const base64Src = resolveBase64Image(imageRef);
    // ...
  }
}
```

**Purpose:**
- Transforms `::img[...]` syntax in markdown
- Imports `resolveBase64Image` from centralized config
- **No local registry needed**

## Adding New Image Categories

### Before (Editing Two Files ❌)
```diff
# Had to edit cover-image-helper.ts
import * as natureImages from '../../data/images/nature';
const IMAGE_REGISTRY = {
  'base64-images': base64Images,
+ 'nature': natureImages
};

# AND ALSO edit base64-image.pipe.ts
import * as natureImages from '../../data/images/nature';
private readonly IMAGE_REGISTRY = {
  'base64-images': base64Images,
+ 'nature': natureImages
};
```

### After (Editing One File ✅)
```diff
# Only edit base64-images-registry.ts
import * as base64Images from '../../data/images/base64-images';
+ import * as natureImages from '../../data/images/nature';

export const IMAGE_REGISTRY: Record<string, any> = {
  'base64-images': base64Images,
+ 'nature': natureImages
};
```

**That's it!** Both cover images and inline images automatically pick up the change.

## Benefits

### ✅ Single Source of Truth
- One file to maintain
- No duplication
- Consistent behavior

### ✅ Easier Maintenance
- Add new image categories in one place
- No risk of forgetting to update one file
- Clear separation of concerns

### ✅ DRY Principle
- Don't Repeat Yourself
- Shared resolution logic
- Shared registry mapping

### ✅ Better Organization
- Config files in `config/` folder
- Clear dependency structure
- Easier to understand

## Usage Examples

### Cover Image
```yaml
---
coverImageId: "base64-images#SAMPLE_LANDSCAPE"
---
```

### Inline Image
```markdown
::img[base64-images#SAMPLE_LANDSCAPE|Description|500px|center]
```

Both use the same centralized registry automatically.

## Migration Notes

If you have existing code that directly used `IMAGE_REGISTRY` or `resolveBase64Import()`:

**Before:**
```typescript
// Local registry in helper or pipe
const IMAGE_REGISTRY = { ... };
function resolveBase64Import(ref: string) { ... }
```

**After:**
```typescript
// Import from centralized config
import { resolveBase64Image } from '../config/base64-images-registry';

// Use imported function
const image = resolveBase64Image(ref);
```

## Related Documentation

- [BASE64_COVER_IMAGE_GUIDE.md](BASE64_COVER_IMAGE_GUIDE.md) - Complete cover image guide
- [BASE64_INLINE_IMAGES_QUICKREF.md](BASE64_INLINE_IMAGES_QUICKREF.md) - Inline image syntax reference
- [2025-01-14-base64-cover-demo.md](../src/content/2025-01-14-base64-cover-demo.md) - Demo blog post
