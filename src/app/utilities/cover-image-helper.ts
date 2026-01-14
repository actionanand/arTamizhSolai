import PostAttributes from '../post-attributes';
import * as base64Images from '../../data/images/base64-images';
// import * as houseImages from '../../data/images/house';
// Import additional image files here as you create them
// import * as natureImages from '../../data/images/nature';
// import * as iconsImages from '../../data/images/icons';

const DEFAULT_COVER_IMAGE = 'tamil-literature-default.svg';

/**
 * Registry of all image modules
 * Add new image files here when you create them
 */
const IMAGE_REGISTRY: Record<string, any> = {
  'base64-images': base64Images,
  // 'house': houseImages,
  // Add more as you create new image files:
  // 'nature': natureImages,
  // 'icons': iconsImages,
};

/**
 * Resolves the cover image source for a blog post.
 * Priority order:
 * 1. coverImageId - Reference to imported base64 constant using format "filename#CONSTANT_NAME"
 *    Example: "house#PLACEHOLDER_IMAGE" imports from data/images/house.ts
 * 2. coverImage - Regular image path
 * 3. DEFAULT_COVER_IMAGE - Fallback default
 * 
 * @param attrs - Post attributes containing cover image information
 * @returns The resolved cover image source URL or data URI
 */
export function getCoverImageSrc(attrs: PostAttributes | Record<string, never>): string {
  // Handle empty attributes
  if (!attrs || Object.keys(attrs).length === 0) {
    return DEFAULT_COVER_IMAGE;
  }

  // Priority 1: Check for coverImageId (format: "filename#CONSTANT_NAME")
  if ('coverImageId' in attrs && attrs.coverImageId) {
    const base64Image = resolveBase64Import(attrs.coverImageId);
    if (base64Image) {
      return base64Image;
    }
  }

  // Priority 2: Check for regular coverImage path
  if ('coverImage' in attrs && attrs.coverImage) {
    return attrs.coverImage;
  }

  // Priority 3: Return default cover image
  return DEFAULT_COVER_IMAGE;
}

/**
 * Resolves a base64 image constant from the registry
 * @param imageRef - Format: "filename#CONSTANT_NAME" (e.g., "house#PLACEHOLDER_IMAGE")
 * @returns The base64 data URI or null if not found
 */
function resolveBase64Import(imageRef: string): string | null {
  try {
    // Parse the reference format "filename#CONSTANT_NAME"
    const [filename, constantName] = imageRef.split('#');
    
    if (!filename || !constantName) {
      console.warn(`Invalid coverImageId format: "${imageRef}". Expected format: "filename#CONSTANT_NAME"`);
      return null;
    }

    // Get the image module from registry
    const imageModule = IMAGE_REGISTRY[filename.toLowerCase()];
    
    if (!imageModule) {
      console.warn(`Image file "${filename}" not registered in IMAGE_REGISTRY. Add it to cover-image-helper.ts`);
      return null;
    }

    // Get the constant from the module
    const base64Image = imageModule[constantName];
    
    if (!base64Image) {
      console.warn(`Constant "${constantName}" not found in ${filename}.ts`);
      return null;
    }

    return base64Image;
    
  } catch (error) {
    console.error(`Error loading base64 image "${imageRef}":`, error);
    return null;
  }
}
