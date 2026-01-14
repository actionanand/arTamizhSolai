const e=`---
title: "Base64 Cover Image Demo"
slug: "base64-cover-demo"
description: "Demonstration of using base64 encoded images as cover images via imported constants"
coverImageId: "base64-images#SAMPLE_LANDSCAPE"
date: "2025-01-14"
category: "Demo"
tags: ["demo", "images", "base64"]
---

<h1 id="base64-cover-image-demo">Base64 Cover Image Demo</h1>
<p>This post demonstrates the use of base64 encoded cover images through imported TypeScript constants from organized files.</p><h2 id="how-it-works-2">How It Works</h2>
<p>Instead of using a regular image path in the <code>coverImage</code> property, this post uses <code>coverImageId</code> with the format <code>"filename#CONSTANT_NAME"</code>:</p><pre class="shiki ayu-dark" style="background-color:#0b0e14;color:#bfbdb6" tabindex="0"><code><span class="line"><span style="color:#39BAE6">coverImageId</span><span style="color:#BFBDB6B3">:</span><span style="color:#AAD94C"> "base64-images#SAMPLE_LANDSCAPE"</span></span></code></pre>
<p>This tells the system to:</p><ol>
<li>Import from <code>/src/data/images/base64-images.ts</code></li>
<li>Look for the constant named <code>SAMPLE_LANDSCAPE</code></li>
<li>Use that base64 data URI as the cover image</li>
</ol>
<h2 id="file-organization">File Organization</h2>
<p>You can organize your base64 images across multiple files:</p><ul>
<li><code>house.ts</code> - House and building images</li>
<li><code>nature.ts</code> - Nature and landscape images  </li>
<li><code>icons.ts</code> - Icons and small graphics</li>
<li><code>base64-images.ts</code> - General images</li>
</ul>
<h2 id="usage-examples">Usage Examples</h2>
<pre class="shiki ayu-dark" style="background-color:#0b0e14;color:#bfbdb6" tabindex="0"><code><span class="line"><span style="color:#ACB6BF8C;font-style:italic"># From house.ts</span></span>
<span class="line"><span style="color:#39BAE6">coverImageId</span><span style="color:#BFBDB6B3">:</span><span style="color:#AAD94C"> "house#PLACEHOLDER_IMAGE"</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ACB6BF8C;font-style:italic"># From base64-images.ts</span></span>
<span class="line"><span style="color:#39BAE6">coverImageId</span><span style="color:#BFBDB6B3">:</span><span style="color:#AAD94C"> "base64-images#SAMPLE_LANDSCAPE"</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ACB6BF8C;font-style:italic"># From future nature.ts</span></span>
<span class="line"><span style="color:#39BAE6">coverImageId</span><span style="color:#BFBDB6B3">:</span><span style="color:#AAD94C"> "nature#FOREST_SCENE"</span></span></code></pre>
<h2 id="benefits">Benefits</h2>
<ul>
<li>✅ No network requests for images</li>
<li>✅ No 404 errors</li>
<li>✅ Images bundled with application</li>
<li>✅ Organized by category</li>
<li>✅ Easy to manage and find images</li>
</ul>
<p>:::warning
Base64 encoding increases file size by ~33%. Keep images optimized.
:::</p>`;export{e as default};
