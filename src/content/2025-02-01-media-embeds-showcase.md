---
title: 'Media Embeds - Videos & Social Posts in Your Articles'
slug: 'media-embeds-showcase'
description: 'Embed YouTube, Instagram, Facebook, TikTok, and Dailymotion videos and posts directly inside your articles - with a "View on" link and a floating Picture-in-Picture player. Use a simple in-content directive or a frontmatter list.'
date: '2025-02-01'
category: tutorial
tags:
  - guide
  - tutorial
author: 'arTamizhSolai Team'
articleMetadata: 'Complete guide to embedding videos and social posts'
isDraft: true
embedsHeading: 'Video Resources (from frontmatter)'
embeds:
  - { type: youtube, id: K6o9JTcPgOA, title: 'YouTube (frontmatter)' }
  - { type: instagram, id: DagFUHJPUAc, title: 'Instagram Reel (frontmatter)' }
  - { url: 'https://www.tiktok.com/@looplandia.kids/video/7567139089972006160', title: 'TikTok (by URL)' }
---

# Media Embeds - Videos & Social Posts in Your Articles

You can embed videos and social posts from **YouTube, Instagram, Facebook,
TikTok, and Dailymotion** directly inside your articles. Every embed comes with
a **"View on …"** link and a **Picture-in-Picture (PiP)** button so readers can
pop the video out and keep watching while they scroll.

There are **two ways** to add embeds, and you can freely mix them:

1. An in-content `::embed` directive — placed exactly where you want it.
2. A frontmatter `embeds` list — rendered as a "Video Resources" grid at the end.

> 📖 Full reference: see [`readme/MEDIA_EMBEDS.md`](https://github.com) in the repo.

## Quick Start

Paste a full URL and let the platform be detected automatically:

::embed{https://youtu.be/K6o9JTcPgOA | title=Quick Start (by URL)}

…or give an explicit type and the short id:

```md
::embed[youtube]{K6o9JTcPgOA | title=Full Tutorial}
```

## YouTube

### Regular Video (16:9)

::embed[youtube]{K6o9JTcPgOA | title=YouTube video}

### With a Start Time (seconds)

The `start` option begins playback partway through:

::embed[youtube]{K6o9JTcPgOA | title=Starts at 1:25 | start=85}

### YouTube Short (9:16 portrait)

::embed[youtube-short]{WcLbw92V4qk | title=YouTube Short}

## Instagram

Instagram uses the **shortcode** — the code between `/reel/` (or `/p/`) and the
trailing slash.

### Reel

::embed[instagram]{DagFUHJPUAc | title=Instagram Reel}

### Post

::embed[instagram-post]{DanV_4Hn6ua | title=Instagram Post}

## Facebook

Facebook renders via the official **iframe social plugins** — no App ID or SDK
required.

### Photo / Post (uses the numeric `fbid`)

::embed[facebook-post]{122123144576853303 | title=Facebook Photo Post}

### Reel / Video (uses the numeric reel id)

::embed[facebook-reel]{921566494310587 | title=Facebook Reel}

## TikTok

TikTok needs the **numeric video id** (the last path segment). The `username` is
**optional** — add it only so the "View on TikTok" button links to the nice
`@user/video/id` URL.

::embed[tiktok]{7567139089972006160 | username=looplandia.kids | title=TikTok Clip}

## Dailymotion

::embed[dailymotion]{xani7te | title=Dailymotion Video}

## Choosing Alignment

Use `align=left`, `align=center` (default), or `align=right`:

::embed[youtube]{K6o9JTcPgOA | title=Left aligned | align=left}

## The Frontmatter Way

Prefer to declare a list once? Add an `embeds` array to the article's
frontmatter and it renders as a responsive **Video Resources** grid right before
the end of the article. This very page uses it — scroll to the bottom to see the
"Video Resources (from frontmatter)" section.

```yaml
---
title: 'My Article'
slug: my-article
embedsHeading: 'Video Resources'
embeds:
  - { type: youtube, id: K6o9JTcPgOA, title: 'YouTube' }
  - { type: instagram, id: DagFUHJPUAc, title: 'Instagram Reel' }
  - { url: 'https://www.tiktok.com/@looplandia.kids/video/7567139089972006160', title: 'TikTok' }
---
```

> ℹ️ Quote long numeric ids (Facebook / TikTok) in YAML so they stay strings and
> keep their full precision.

## Picture-in-Picture

Every embed has a **PiP** button. Click it to open a floating mini-player you can
**drag** (title bar) and **resize** (bottom-right grip), then close with **✕** —
so you can keep watching while you read the rest of the article.

## Summary

- Use `::embed[type]{id}` or `::embed{full-url}` inline, or an `embeds` list in
  frontmatter.
- `id` is the short platform token; a full URL works too (type auto-detected).
- Options: `title`, `start` (YouTube), `username` (TikTok), `align`.
- Each embed gets a "View on …" link and a Picture-in-Picture player.
