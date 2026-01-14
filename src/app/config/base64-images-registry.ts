/**
 * Central registry for base64 image modules
 * 
 * To add a new image category:
 * 1. Create the file in src/data/images/ (e.g., nature.ts)
 * 2. Import it here
 * 3. Add to IMAGE_REGISTRY with a key matching the filename
 * 
 * Usage in posts:
 * - Cover images: coverImageId: "base64-images#CONSTANT_NAME"
 * - Inline images: ::img[base64-images#CONSTANT_NAME|alt text|width|center]
 */

import * as base64Images from '../../data/images/base64-images';
// import * as houseImages from '../../data/images/house';
// Import additional image files here as you create them
// import * as natureImages from '../../data/images/nature';
// import * as iconsImages from '../../data/images/icons';
// import * as cultureImages from '../../data/images/culture';

/**
 * Registry mapping filename to imported module
 * Key: filename (without .ts extension)
 * Value: imported module with exported constants
 */
export const IMAGE_REGISTRY: Record<string, any> = {
  'base64-images': base64Images,
  // 'house': houseImages,
  // Add more as you create new image files:
  // 'nature': natureImages,
  // 'icons': iconsImages,
  // 'culture': cultureImages,
};

/**
 * Helper function to resolve a base64 image from the registry
 * @param imageRef - Format: "filename#CONSTANT_NAME"
 * @returns The base64 data URI or null if not found
 */
export function resolveBase64Image(imageRef: string): string | null {
  try {
    const [filename, constantName] = imageRef.split('#');
    
    if (!filename || !constantName) {
      console.warn(`Invalid image reference format: "${imageRef}". Expected "filename#CONSTANT_NAME"`);
      return null;
    }

    const imageModule = IMAGE_REGISTRY[filename.toLowerCase()];
    
    if (!imageModule) {
      console.warn(`Image file "${filename}" not registered in base64-images-registry.ts`);
      return null;
    }

    const base64Image = imageModule[constantName];
    
    if (!base64Image) {
      console.warn(`Constant "${constantName}" not found in ${filename}.ts`);
      return null;
    }

    return base64Image;
  } catch (error) {
    console.error(`Error resolving base64 image "${imageRef}":`, error);
    return null;
  }
}
