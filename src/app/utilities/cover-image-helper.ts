import PostAttributes from '../post-attributes';
import { resolveBase64Image } from '../config/base64-images-registry';

const DEFAULT_COVER_IMAGE = 'tamil-literature-default.svg';

/**
 * Resolves the cover image source for a blog post.
 * Priority order:
 * 1. coverImageId - Reference to imported base64 constant using format "filename#CONSTANT_NAME"
 *    Example: "base64-images#PLACEHOLDER_IMAGE" imports from data/images/base64-images.ts
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
    const base64Image = resolveBase64Image(attrs.coverImageId);
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
 * Resolves the background image source for a blog post.
 * Supports both regular image paths and base64 references.
 * 
 * @param attrs - Post attributes containing background image information
 * @returns The resolved background image source URL or data URI, or null if not set
 */
export function getBackgroundImageSrc(attrs: PostAttributes | Record<string, never>): string | null {
  // Handle empty attributes
  if (!attrs || Object.keys(attrs).length === 0) {
    return null;
  }

  // Check for bgImg property
  if (!('bgImg' in attrs) || !attrs.bgImg) {
    return null;
  }

  const bgImg = attrs.bgImg;

  // Check if it's a base64 reference (format: "filename#CONSTANT_NAME")
  if (bgImg.includes('#')) {
    const base64Image = resolveBase64Image(bgImg);
    if (base64Image) {
      return base64Image;
    }
  }

  // Otherwise, return as regular image path
  return bgImg;
}
