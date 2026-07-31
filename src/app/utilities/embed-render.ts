/**
 * Media embed rendering utilities.
 *
 * Pure, DOM-free helpers shared by the `EmbedPipe` (in-content directive syntax)
 * and the blog page (frontmatter `embeds` array). Given a platform + id (or a
 * full source URL), these build the correct embed markup, a "View on …" link,
 * and a Picture-in-Picture button.
 *
 * See `readme/MEDIA_EMBEDS.md` for the authoring guide.
 */

export type MediaEmbedType =
  | 'youtube'
  | 'youtube-short'
  | 'instagram'
  | 'instagram-post'
  | 'facebook-post'
  | 'facebook-reel'
  | 'tiktok'
  | 'dailymotion';

export interface MediaEmbedItem {
  type: MediaEmbedType;
  /** Platform-specific id/shortcode — NOT the full URL. */
  id: string;
  /** Optional caption shown above the embed. */
  title?: string;
  /** YouTube only — start playback at this many seconds. */
  startTime?: number;
  /** TikTok only — handle without the leading `@`, used for the "View on" link. */
  username?: string;
  /** Horizontal alignment of the embed (default `center`). */
  align?: 'left' | 'center' | 'right';
}

const EMBED_TYPES: readonly MediaEmbedType[] = [
  'youtube',
  'youtube-short',
  'instagram',
  'instagram-post',
  'facebook-post',
  'facebook-reel',
  'tiktok',
  'dailymotion',
];

const VERTICAL_TYPES: readonly MediaEmbedType[] = [
  'youtube-short',
  'instagram',
  'facebook-reel',
  'tiktok',
];

export function isEmbedType(value: string): value is MediaEmbedType {
  return (EMBED_TYPES as readonly string[]).includes(value);
}

function isVertical(type: MediaEmbedType): boolean {
  return (VERTICAL_TYPES as readonly string[]).includes(type);
}

/** Parse a duration such as `85`, `1m25s`, or `90s` into whole seconds. */
export function parseTime(value: string | null | undefined): number | undefined {
  if (!value) return undefined;
  const raw = value.trim();
  if (/^\d+$/.test(raw)) return parseInt(raw, 10);
  const match = raw.match(/(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?/i);
  if (!match) return undefined;
  const [, h, m, s] = match;
  const total = (parseInt(h || '0', 10) * 3600) + (parseInt(m || '0', 10) * 60) + parseInt(s || '0', 10);
  return total > 0 ? total : undefined;
}

/**
 * Detect the platform + id from a full source URL. Returns `null` when the URL
 * is not a supported platform.
 */
export function parseEmbedUrl(raw: string): Partial<MediaEmbedItem> & { type: MediaEmbedType; id: string } | null {
  let url: URL;
  try {
    url = new URL(raw.trim());
  } catch {
    return null;
  }

  const host = url.hostname.replace(/^www\./, '').toLowerCase();
  const parts = url.pathname.split('/').filter(Boolean);

  // YouTube
  if (host === 'youtu.be') {
    const id = parts[0];
    return id ? { type: 'youtube', id, startTime: parseTime(url.searchParams.get('t')) } : null;
  }
  if (host.endsWith('youtube.com')) {
    if (parts[0] === 'shorts' && parts[1]) return { type: 'youtube-short', id: parts[1] };
    if (parts[0] === 'embed' && parts[1]) {
      return { type: 'youtube', id: parts[1], startTime: parseTime(url.searchParams.get('start')) };
    }
    if (parts[0] === 'watch' || url.searchParams.has('v')) {
      const id = url.searchParams.get('v');
      return id ? { type: 'youtube', id, startTime: parseTime(url.searchParams.get('t')) } : null;
    }
  }

  // Instagram
  if (host.endsWith('instagram.com')) {
    if ((parts[0] === 'reel' || parts[0] === 'reels') && parts[1]) return { type: 'instagram', id: parts[1] };
    if (parts[0] === 'p' && parts[1]) return { type: 'instagram-post', id: parts[1] };
  }

  // Facebook
  if (host.endsWith('facebook.com') || host === 'fb.watch') {
    const fbid = url.searchParams.get('fbid');
    if (fbid) return { type: 'facebook-post', id: fbid };
    if (parts[0] === 'reel' && parts[1]) return { type: 'facebook-reel', id: parts[1] };
    const v = url.searchParams.get('v');
    if (v) return { type: 'facebook-reel', id: v };
    const videosIdx = parts.indexOf('videos');
    if (videosIdx >= 0 && parts[videosIdx + 1]) return { type: 'facebook-reel', id: parts[videosIdx + 1] };
  }

  // TikTok
  if (host.endsWith('tiktok.com')) {
    const videoIdx = parts.indexOf('video');
    if (videoIdx >= 0 && parts[videoIdx + 1]) {
      const username = parts[0]?.startsWith('@') ? parts[0].slice(1) : undefined;
      return { type: 'tiktok', id: parts[videoIdx + 1], username };
    }
  }

  // Dailymotion
  if (host.endsWith('dailymotion.com')) {
    const videoIdx = parts.indexOf('video');
    if (videoIdx >= 0 && parts[videoIdx + 1]) return { type: 'dailymotion', id: parts[videoIdx + 1] };
  }
  if (host === 'dai.ly' && parts[0]) return { type: 'dailymotion', id: parts[0] };

  return null;
}

/** Build the inline iframe `src` (or Instagram permalink) for the embed. */
function getInlineSrc(item: MediaEmbedItem): string {
  const { type, id, startTime } = item;
  switch (type) {
    case 'youtube':
    case 'youtube-short':
      return `https://www.youtube.com/embed/${id}?rel=0&playsinline=1${startTime ? `&start=${startTime}` : ''}`;
    case 'dailymotion':
      return `https://www.dailymotion.com/embed/video/${id}`;
    case 'tiktok':
      return `https://www.tiktok.com/embed/v2/${id}`;
    case 'facebook-post':
      return `https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(`https://www.facebook.com/photo?fbid=${id}`)}&show_text=true&width=500`;
    case 'facebook-reel':
      return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(`https://www.facebook.com/reel/${id}`)}&show_text=false&width=340&height=600`;
    case 'instagram':
      return `https://www.instagram.com/reel/${id}/`;
    case 'instagram-post':
      return `https://www.instagram.com/p/${id}/`;
    default:
      return '';
  }
}

/** Build the "View on <platform>" permalink that opens the original post. */
function getWatchUrl(item: MediaEmbedItem): string {
  const { type, id, startTime, username } = item;
  switch (type) {
    case 'youtube':
      return `https://youtu.be/${id}${startTime ? `?t=${startTime}` : ''}`;
    case 'youtube-short':
      return `https://www.youtube.com/shorts/${id}`;
    case 'instagram':
      return `https://www.instagram.com/reel/${id}/`;
    case 'instagram-post':
      return `https://www.instagram.com/p/${id}/`;
    case 'facebook-post':
      return `https://www.facebook.com/photo?fbid=${id}`;
    case 'facebook-reel':
      return `https://www.facebook.com/reel/${id}`;
    case 'tiktok':
      return username
        ? `https://www.tiktok.com/@${username}/video/${id}`
        : `https://www.tiktok.com/embed/v2/${id}`;
    case 'dailymotion':
      return `https://www.dailymotion.com/video/${id}`;
    default:
      return '#';
  }
}

/** Build the autoplaying `src` used inside the floating Picture-in-Picture player. */
function getPipSrc(item: MediaEmbedItem): string {
  const { type, id, startTime } = item;
  switch (type) {
    case 'youtube':
    case 'youtube-short':
      return `https://www.youtube.com/embed/${id}?autoplay=1&playsinline=1${startTime ? `&start=${startTime}` : ''}`;
    case 'dailymotion':
      return `https://www.dailymotion.com/embed/video/${id}?autoplay=1`;
    case 'instagram':
      return `https://www.instagram.com/reel/${id}/embed/`;
    case 'instagram-post':
      return `https://www.instagram.com/p/${id}/embed/`;
    default:
      return getInlineSrc(item);
  }
}

const PLATFORM_LABEL: Record<MediaEmbedType, string> = {
  youtube: 'View on YouTube',
  'youtube-short': 'View on YouTube',
  instagram: 'View on Instagram',
  'instagram-post': 'View on Instagram',
  'facebook-post': 'View on Facebook',
  'facebook-reel': 'View on Facebook',
  tiktok: 'View on TikTok',
  dailymotion: 'View on Dailymotion',
};

const ICON_PATHS: Record<string, string> = {
  youtube: 'M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z',
  instagram: 'M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.3 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .3-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.3-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 3.4a6.4 6.4 0 1 0 0 12.8 6.4 6.4 0 0 0 0-12.8zm0 10.6a4.2 4.2 0 1 1 0-8.4 4.2 4.2 0 0 1 0 8.4zm6.6-10.9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z',
  facebook: 'M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6 4.39 10.97 10.13 11.87v-8.4H7.08v-3.47h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.47h-2.8v8.4C19.61 23.04 24 18.07 24 12.07z',
  tiktok: 'M16.6 5.82a4.28 4.28 0 0 1-1.07-2.82h-3.3v13.4a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 1 1 .7-5.08V10.4a5.85 5.85 0 0 0-.7-.04A5.92 5.92 0 1 0 15.3 16.3V9.4a7.6 7.6 0 0 0 4.44 1.42V7.5a4.28 4.28 0 0 1-3.14-1.68z',
  dailymotion: 'M18.5 3v6.4a4.7 4.7 0 0 0-3.6-1.5 5 5 0 0 0-5 5.1 5 5 0 0 0 5 5.1 4.6 4.6 0 0 0 3.7-1.6V18h3.3V3h-3.4zm-3 12.9a2.9 2.9 0 1 1 0-5.8 2.9 2.9 0 0 1 0 5.8z',
};

const PLATFORM_ICON_KEY: Record<MediaEmbedType, string> = {
  youtube: 'youtube',
  'youtube-short': 'youtube',
  instagram: 'instagram',
  'instagram-post': 'instagram',
  'facebook-post': 'facebook',
  'facebook-reel': 'facebook',
  tiktok: 'tiktok',
  dailymotion: 'dailymotion',
};

function svgIcon(key: string): string {
  const path = ICON_PATHS[key] || '';
  return `<svg class="embed__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="${path}"/></svg>`;
}

const PIP_ICON =
  '<svg class="embed__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 7h-8v6h8V7zm4 12V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z"/></svg>';

export function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return text.replace(/[&<>"']/g, (c) => map[c] || c);
}

/** Build the inner player markup for a single embed. */
function renderPlayer(item: MediaEmbedItem): string {
  const { type, title } = item;
  const src = getInlineSrc(item);
  const safeTitle = escapeHtml(title || `${type} embed`);
  const iframeAllow =
    'accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture; web-share';

  if (type === 'instagram' || type === 'instagram-post') {
    return `<blockquote class="instagram-media" data-instgrm-permalink="${escapeHtml(src)}" data-instgrm-version="14" style="background:#FFF;border:0;border-radius:3px;box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15);margin:1px auto;max-width:540px;min-width:300px;padding:0;width:99.375%;"></blockquote>`;
  }

  if (type === 'youtube' || type === 'dailymotion') {
    return `<div class="embed__frame embed__frame--wide">
  <iframe src="${escapeHtml(src)}" title="${safeTitle}" loading="lazy" frameborder="0" allow="${iframeAllow}" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
</div>`;
  }

  return `<div class="embed__frame embed__frame--${type}">
  <iframe src="${escapeHtml(src)}" title="${safeTitle}" loading="lazy" scrolling="no" frameborder="0" allow="${iframeAllow}" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
</div>`;
}

/** Render a single embed (player + caption + action buttons) as an HTML string. */
export function renderEmbed(item: MediaEmbedItem): string {
  const align = item.align || 'center';
  const watchUrl = getWatchUrl(item);
  const pipSrc = getPipSrc(item);
  const vertical = isVertical(item.type);
  const iconKey = PLATFORM_ICON_KEY[item.type];
  const caption = item.title ? `<p class="embed__caption">${escapeHtml(item.title)}</p>` : '';

  return `<div class="embed embed--${align}" data-embed-type="${item.type}">
  ${caption}
  ${renderPlayer(item)}
  <div class="embed__actions">
    <a class="embed__btn" href="${escapeHtml(watchUrl)}" target="_blank" rel="noopener noreferrer">
      ${svgIcon(iconKey)}<span>${escapeHtml(PLATFORM_LABEL[item.type])}</span>
    </a>
    <button type="button" class="embed__btn" data-pip-src="${escapeHtml(pipSrc)}" data-pip-vertical="${vertical}" data-pip-title="${escapeHtml(item.title || '')}" title="Pop out and keep watching while you read" aria-label="Watch in Picture-in-Picture" onclick="window.arOpenPip(this)">
      ${PIP_ICON}<span>PiP</span>
    </button>
  </div>
</div>`;
}

/** Render a responsive group of embeds, ideal for a "Video Resources" section. */
export function renderEmbedGroup(items: MediaEmbedItem[], heading = 'Video Resources'): string {
  if (!items?.length) return '';
  const headingHtml = heading
    ? `<h3 class="embed-group__heading">${svgIcon('youtube')}<span>${escapeHtml(heading)}</span></h3>`
    : '';
  const cards = items.map((item) => `<div class="embed-group__item">${renderEmbed(item)}</div>`).join('\n');
  return `<section class="embed-group">
  ${headingHtml}
  <div class="embed-group__grid">
${cards}
  </div>
</section>`;
}
