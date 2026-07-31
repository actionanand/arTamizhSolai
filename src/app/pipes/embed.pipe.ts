import { Pipe, PipeTransform } from '@angular/core';
import { isEmbedType, MediaEmbedItem, MediaEmbedType, parseEmbedUrl, parseTime, renderEmbed } from '../utilities/embed-render';

/**
 * Pipe to transform custom media-embed directive syntax into embedded
 * players/posts for YouTube, Instagram, Facebook, TikTok and Dailymotion.
 *
 * Supported syntax (both forms work):
 *
 *   Explicit type + id:
 *     ::embed[youtube]{K6o9JTcPgOA}
 *     ::embed[youtube]{K6o9JTcPgOA | title=Full Tutorial | start=85}
 *     ::embed[tiktok]{7567139089972006160 | username=looplandia.kids | title=Clip}
 *
 *   Full source URL (type auto-detected):
 *     ::embed{https://youtu.be/K6o9JTcPgOA | title=Full Tutorial}
 *     ::embed{https://www.instagram.com/reel/DagFUHJPUAc/}
 *
 * Options (after the first `|`): title, start (seconds, YouTube), username
 * (TikTok), align (left|center|right).
 *
 * See `readme/MEDIA_EMBEDS.md`.
 */
@Pipe({
  name: 'embed',
  standalone: true,
})
export class EmbedPipe implements PipeTransform {
  private readonly directiveRegex = /::embed(?:\[([^\]]*)\])?\{([^}]*)\}/g;

  transform(content: string): string {
    if (!content) return '';

    return content.replace(this.directiveRegex, (match, rawType: string, rawBody: string) => {
      const item = this.parse(rawType?.trim(), rawBody);
      return item ? renderEmbed(item) : match;
    });
  }

  private parse(type: string | undefined, body: string): MediaEmbedItem | null {
    const segments = body.split('|').map((s) => s.trim()).filter((s) => s.length > 0);
    if (segments.length === 0) return null;

    const source = segments[0];
    const options = this.parseOptions(segments.slice(1));

    let resolved: (Partial<MediaEmbedItem> & { type: MediaEmbedType; id: string }) | null = null;

    if (/^https?:\/\//i.test(source)) {
      resolved = parseEmbedUrl(source);
    } else if (type && isEmbedType(type)) {
      resolved = { type, id: source };
    }

    if (!resolved) return null;

    const startTime =
      options['start'] !== undefined ? parseTime(options['start']) : resolved.startTime;
    const align = this.normalizeAlign(options['align']);

    return {
      type: resolved.type,
      id: resolved.id,
      title: options['title'] || undefined,
      startTime,
      username: options['username'] || resolved.username,
      align,
    };
  }

  private parseOptions(parts: string[]): Record<string, string> {
    const options: Record<string, string> = {};
    for (const part of parts) {
      const eq = part.indexOf('=');
      if (eq === -1) continue;
      const key = part.slice(0, eq).trim().toLowerCase();
      const value = part.slice(eq + 1).trim().replace(/^["']|["']$/g, '');
      if (key) options[key] = value;
    }
    return options;
  }

  private normalizeAlign(value: string | undefined): 'left' | 'center' | 'right' | undefined {
    if (value === 'left' || value === 'right' || value === 'center') return value;
    return undefined;
  }
}
