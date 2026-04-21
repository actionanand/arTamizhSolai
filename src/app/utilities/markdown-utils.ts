/**
 * Utility functions for markdown processing
 */

export interface HeadingLink {
  level: number;
  text: string;
  id: string;
}

/**
 * Create a URL-fragment friendly id while preserving Tamil, Sanskrit, and
 * other non-Latin heading text.
 */
export function createHeadingId(text: string, fallback = 'section'): string {
  const slug = text
    .normalize('NFKC')
    .toLowerCase()
    .replace(/[^\p{L}\p{M}\p{N}\s-]/gu, '')
    .trim()
    .replace(/[\s-]+/g, '-')
    .replace(/^-+|-+$/g, '');

  return slug || fallback;
}

export function getUniqueHeadingId(baseId: string, usedIds: Set<string>): string {
  const normalizedBaseId = baseId.trim() || 'section';
  let id = normalizedBaseId;
  let suffix = 2;

  while (usedIds.has(id)) {
    id = `${normalizedBaseId}-${suffix}`;
    suffix++;
  }

  usedIds.add(id);
  return id;
}

/**
 * Extract headings from HTML content to generate table of contents
 */
export function extractHeadings(html: string): HeadingLink[] {
  const headings: HeadingLink[] = [];
  const usedIds = new Set<string>();
  // Match h1-h4; parse attributes separately so id is not skipped by the
  // optional group.
  const regex = /<h([1-4])\b([^>]*)>([\s\S]*?)<\/h\1>/gi;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(html)) !== null) {
    const level = parseInt(match[1], 10);
    const attrs = match[2] || '';
    const text = decodeHtml(stripTags(match[3]).trim());
    const idMatch = attrs.match(/\bid\s*=\s*["']([^"']*)["']/i);
    const baseId = idMatch?.[1] || createHeadingId(text, `section-${headings.length + 1}`);
    const id = getUniqueHeadingId(baseId, usedIds);
    headings.push({ level, text, id });
  }

  return headings;
}

function stripTags(s: string): string {
  return s.replace(/<[^>]*>/g, '');
}

function decodeHtml(s: string): string {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}
