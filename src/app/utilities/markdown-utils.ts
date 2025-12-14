/**
 * Utility functions for markdown processing
 */

export interface HeadingLink {
  level: number;
  text: string;
  id: string;
}

/**
 * Extract headings from HTML content to generate table of contents
 */
export function extractHeadings(html: string): HeadingLink[] {
  const headings: HeadingLink[] = [];
  // Match h1-h4; capture optional id and inner text
  const regex = /<h([1-4])[^>]*?(?:id=\"([^\"]*)\")?[^>]*>([\s\S]*?)<\/h\1>/gi;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(html)) !== null) {
    const level = parseInt(match[1], 10);
    const id = match[2] || slugify(stripTags(match[3]));
    const text = decodeHtml(stripTags(match[3]).trim());
    headings.push({ level, text, id });
  }

  return headings;
}

function stripTags(s: string): string {
  return s.replace(/<[^>]*>/g, '');
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function decodeHtml(s: string): string {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}
