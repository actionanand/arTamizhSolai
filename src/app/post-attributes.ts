export default interface PostAttributes {
  title: string;
  slug: string;
  description: string;
  coverImage?: string;
  coverImageId?: string; // Format: "filename#CONSTANT_NAME" (e.g., "house#PLACEHOLDER_IMAGE")
  date?: string;
  category?: string;
  tags?: string[];
  toc?: boolean;
  disclaimerEnabled?: boolean;
  disclaimerText?: string;
  relatedPosts?: string[];
  isPinned?: boolean;
  isDraft?: boolean;
  // Article metadata for epics and literary works
  author?: string;
  epicName?: string;
  verseNumber?: string;
  articleMetadata?: string;
  // Password protection
  enableLock?: boolean;
  // Donation settings
  enableDonation?: boolean;
  donationMessage?: string;
  // Scroll to top button
  scrollToTop?: boolean;
  // Global font for entire article
  font?: string;
  // Background image (repeating pattern)
  bgImg?: string; // Regular path or base64 reference ("filename#CONSTANT_NAME")
  bgImgBrightness?: number; // 0-100, lower = darker (default: 100)
  bgImgGrayscale?: number; // 0-100, higher = more gray (default: 0)
  bgImgDisableOverlay?: boolean; // Disable white overlay for light backgrounds (default: false)
}
