# 🎬 Media Embeds — Usage Guide

Embed videos and social posts from **YouTube, Instagram, Facebook, TikTok, and
Dailymotion** inside any blog article, either with an in-content directive
(component-style) or via a **frontmatter** `embeds` array.

Every embed renders the native player/post and adds:

- a **"View on …"** link that opens the original post in a new tab, and
- a **Picture-in-Picture (PiP)** floating, draggable, resizable mini-player so
  readers can keep watching while they scroll.

> A live, rendered example lives in
> [`src/content/2025-02-01-media-embeds-showcase.md`](../src/content/2025-02-01-media-embeds-showcase.md).

---

## 🧩 Two Ways to Use It

You can mix and match both approaches in the same article.

### 1. In-content directive (recommended for inline placement)

Drop an `::embed` directive anywhere in the markdown body:

```md
::embed[youtube]{K6o9JTcPgOA}
```

### 2. Frontmatter array (a "Video Resources" section)

List embeds once in the frontmatter. They render as a responsive grid right
before the donation section at the end of the article:

```yaml
---
title: 'My Article'
slug: my-article
embeds:
  - { type: youtube, id: K6o9JTcPgOA, title: 'Full Tutorial' }
  - { url: 'https://www.instagram.com/reel/DagFUHJPUAc/', title: 'Quick Tip' }
embedsHeading: 'Watch & Learn'   # optional (default: "Video Resources")
---
```

---

## ✍️ Directive Syntax

Two interchangeable forms are supported — **use whichever you prefer**:

**A. Full source URL (type auto-detected):**

```md
::embed{https://youtu.be/K6o9JTcPgOA}
::embed{https://www.instagram.com/reel/DagFUHJPUAc/ | title=Quick Tip}
```

**B. Explicit type + short id:**

```md
::embed[youtube]{K6o9JTcPgOA}
::embed[youtube]{K6o9JTcPgOA | title=Full Tutorial | start=85}
```

The **first value inside `{ }`** is the id (form B) or the full URL (form A).
Everything after a `|` is an option written as `key=value`:

| Option | Applies to | Description |
|--------|-----------|-------------|
| `title` | all | Caption shown above the embed |
| `start` | YouTube | Start playback at N seconds |
| `username` | TikTok | Handle without `@`, used only for the "View on" link |
| `align` | all | `left` \| `center` \| `right` (default `center`) |

---

## ✅ Supported Types & What to Put in `id`

When you use the **explicit type** form (or the frontmatter `type` + `id`), the
`id` is the **short token**, never the full URL. If you'd rather not extract the
id yourself, just paste the **full URL** instead (form A / frontmatter `url`) —
the type and id are detected automatically.

| `type` | What `id` is | Example source URL | `id` value |
|--------|--------------|--------------------|-----------|
| `youtube` | Video id | `https://youtu.be/K6o9JTcPgOA` | `K6o9JTcPgOA` |
| `youtube-short` | Short id | `https://www.youtube.com/shorts/WcLbw92V4qk` | `WcLbw92V4qk` |
| `instagram` | Reel shortcode | `https://www.instagram.com/reel/DagFUHJPUAc/` | `DagFUHJPUAc` |
| `instagram-post` | Post shortcode | `https://www.instagram.com/p/DanV_4Hn6ua/` | `DanV_4Hn6ua` |
| `facebook-post` | Photo/post numeric `fbid` | `https://www.facebook.com/photo?fbid=122123144576853303` | `122123144576853303` |
| `facebook-reel` | Reel numeric id | `https://www.facebook.com/reel/1369378695346639` | `1369378695346639` |
| `tiktok` | Numeric video id (last path segment) | `https://www.tiktok.com/@looplandia.kids/video/7567139089972006160` | `7567139089972006160` |
| `dailymotion` | Video id | `https://www.dailymotion.com/video/xani7te` | `xani7te` |

### Why an `id` works as well as a URL

- **YouTube / Instagram / Dailymotion / TikTok** — the player only needs the
  short id; the component rebuilds the correct embed/permalink.
- **Facebook** — the `fbid` (photos) or reel id is enough. The component feeds a
  rebuilt public permalink to Facebook's iframe **social plugin**, so **no
  Facebook App ID or SDK** is required.
- **TikTok** — the numeric **video id** is all the iframe player
  (`/embed/v2/<id>`) needs. The **username is optional** — add it only so the
  "View on TikTok" button links to the friendly `@user/video/id` URL.

---

## 🔎 How to Extract Each `id`

- **YouTube:** the part after `youtu.be/` or `v=` → `K6o9JTcPgOA`
- **YouTube Short:** the part after `/shorts/`
- **Instagram reel/post:** the code between `/reel/` (or `/p/`) and the trailing slash
- **Facebook photo/post:** the number after `fbid=`
- **Facebook reel:** the number after `/reel/`
- **TikTok:** the number after `/video/` (the `@username` is optional metadata)
- **Dailymotion:** the code after `/video/`

---

## 📝 Copy-Paste Examples (Directive)

```md
<!-- YouTube -->
::embed[youtube]{K6o9JTcPgOA | title=Full Tutorial}

<!-- YouTube with a start time (seconds) -->
::embed[youtube]{K6o9JTcPgOA | title=Starts at 1:25 | start=85}

<!-- YouTube Short (portrait) -->
::embed[youtube-short]{WcLbw92V4qk | title=Quick Short}

<!-- Instagram reel and post -->
::embed[instagram]{DagFUHJPUAc | title=Reel}
::embed[instagram-post]{DanV_4Hn6ua | title=Post}

<!-- Facebook photo/post and reel -->
::embed[facebook-post]{122123144576853303 | title=Facebook Photo Post}
::embed[facebook-reel]{1369378695346639 | title=Facebook Reel}

<!-- TikTok (username optional but recommended) -->
::embed[tiktok]{7567139089972006160 | username=looplandia.kids | title=TikTok Clip}

<!-- Dailymotion -->
::embed[dailymotion]{xani7te | title=Dailymotion Video}

<!-- Or just paste the URL and skip the type -->
::embed{https://youtu.be/K6o9JTcPgOA | title=Full Tutorial}
```

---

## 📝 Copy-Paste Examples (Frontmatter)

```yaml
---
title: 'All Platforms Demo'
slug: all-platforms-demo
embedsHeading: 'Video Resources'
embeds:
  - { type: youtube,        id: K6o9JTcPgOA,        title: 'YouTube Video', startTime: 85 }
  - { type: youtube-short,  id: WcLbw92V4qk,        title: 'YouTube Short' }
  - { type: instagram,      id: DagFUHJPUAc,        title: 'Instagram Reel' }
  - { type: instagram-post, id: DanV_4Hn6ua,        title: 'Instagram Post' }
  - { type: facebook-post,  id: '122123144576853303', title: 'Facebook Photo' }
  - { type: facebook-reel,  id: '1369378695346639',   title: 'Facebook Reel' }
  - { type: tiktok,         id: '7567139089972006160', username: looplandia.kids, title: 'TikTok' }
  - { type: dailymotion,    id: xani7te,            title: 'Dailymotion' }
  # …or drop in a full URL and let the type be auto-detected:
  - { url: 'https://www.youtube.com/shorts/WcLbw92V4qk', title: 'By URL' }
---
```

> ℹ️ Large numeric ids (Facebook / TikTok) should be **quoted** in YAML so they
> are read as strings and keep their full precision.

### Frontmatter fields

| Field | Type | Notes |
|-------|------|-------|
| `type` | string | Platform type (table above). Omit when using `url`. |
| `url` | string | Full source URL; type + id auto-detected. Use instead of `type`/`id`. |
| `id` | string | Short platform id (used with `type`). Quote long numbers. |
| `title` | string | Optional caption |
| `startTime` | number | YouTube only — start at N seconds |
| `username` | string | TikTok only — handle without `@` |
| `align` | string | `left` \| `center` \| `right` |
| `embedsHeading` | string | (top-level attribute) heading for the section |

---

## ⚙️ How Rendering Works

| Platform | Mechanism |
|----------|-----------|
| **YouTube / YouTube Short** | `youtube.com/embed/<id>` iframe (16:9 responsive / 9:16 portrait) |
| **Instagram** | Official `embed.js` blockquote (`instagram` → `/reel/`, `instagram-post` → `/p/`); the script loads once and reprocesses when embeds appear |
| **Facebook** | Iframe **social plugins** — `plugins/post.php` for posts, `plugins/video.php` for reels/videos. No SDK/App ID needed |
| **TikTok** | Iframe player `tiktok.com/embed/v2/<id>` |
| **Dailymotion** | Iframe `dailymotion.com/embed/video/<id>` in a 16:9 frame |

Implementation lives in
[`src/app/utilities/embed-render.ts`](../src/app/utilities/embed-render.ts)
(markup builders), [`src/app/pipes/embed.pipe.ts`](../src/app/pipes/embed.pipe.ts)
(directive parsing), and
[`src/app/utilities/embed-helper.ts`](../src/app/utilities/embed-helper.ts)
(PiP + Instagram runtime). Styling is in
[`src/styles/embeds.css`](../src/styles/embeds.css).

---

## 🖼️ Picture-in-Picture (Watch While Reading)

Every embed shows a **PiP** button that opens a **draggable, resizable, closable
floating mini-player** pinned to the corner of the page.

- Portrait content (Shorts, reels, TikTok, Instagram) opens in a **9:16**
  window; landscape content (YouTube, Dailymotion) opens in **16:9**.
- Drag the title bar to reposition; drag the bottom-right grip to resize; click
  **✕** to close.
- Only one mini-player is open at a time — opening another replaces it.

---

## ⚠️ Notes & Caveats

- The content must be **public** for embeds to display.
- Facebook occasionally blocks plugin rendering depending on the post's
  privacy/region; the **"View on Facebook"** link always works as a fallback.
- Only YouTube uses `start`/`startTime`; only TikTok uses `username`. Extra
  options on other types are ignored.
- Titles/captions are optional; when omitted, no caption is shown.
- Embeds rely on third-party iframes/scripts and only fully render in the
  **browser** (client-side) — expected for a statically rendered site.
