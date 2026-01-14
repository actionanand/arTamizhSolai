const e=`---
title: "Base64 Image Guide - Cover & Inline Images"
slug: "base64-cover-demo"
description: "Complete guide to using base64 encoded images as cover images and inline content"
coverImageId: "base64-images#SAMPLE_LANDSCAPE"
date: "2025-01-14"
category: "Demo"
tags: ["demo", "images", "base64", "tutorial"]
isDraft: false
toc: true
---

<h1 id="base64-image-guide---cover--inline-images">Base64 Image Guide - Cover &amp; Inline Images</h1>
<p>This post demonstrates <strong>two ways</strong> to use base64 encoded images in your blog posts:</p><ol>
<li><strong>Cover Images</strong> - The main post image</li>
<li><strong>Inline Images</strong> - Images within markdown content</li>
</ol>
<hr>
<h2 id="part-1-cover-images">Part 1: Cover Images</h2>
<h3 id="how-cover-images-work">How Cover Images Work</h3>
<p>Use the <code>coverImageId</code> property in frontmatter with the format <code>"filename#CONSTANT_NAME"</code>:</p><pre class="shiki ayu-dark" style="background-color:#0b0e14;color:#bfbdb6" tabindex="0"><code><span class="line"><span style="color:#39BAE6">coverImageId</span><span style="color:#BFBDB6B3">:</span><span style="color:#AAD94C"> "base64-images#SAMPLE_LANDSCAPE"</span></span></code></pre>
<p>This tells the system to:</p><ol>
<li>Import from <code>/src/data/images/base64-images.ts</code></li>
<li>Look for the constant named <code>SAMPLE_LANDSCAPE</code></li>
<li>Use that base64 data URI as the cover image</li>
</ol>
<h3 id="file-organization">File Organization</h3>
<p>Organize your base64 images across multiple files:</p><ul>
<li><code>house.ts</code> - House and building images</li>
<li><code>nature.ts</code> - Nature and landscape images  </li>
<li><code>icons.ts</code> - Icons and small graphics</li>
<li><code>base64-images.ts</code> - General images</li>
</ul>
<h3 id="cover-image-examples">Cover Image Examples</h3>
<pre class="shiki ayu-dark" style="background-color:#0b0e14;color:#bfbdb6" tabindex="0"><code><span class="line"><span style="color:#ACB6BF8C;font-style:italic"># From house.ts</span></span>
<span class="line"><span style="color:#39BAE6">coverImageId</span><span style="color:#BFBDB6B3">:</span><span style="color:#AAD94C"> "house#PLACEHOLDER_IMAGE"</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ACB6BF8C;font-style:italic"># From base64-images.ts</span></span>
<span class="line"><span style="color:#39BAE6">coverImageId</span><span style="color:#BFBDB6B3">:</span><span style="color:#AAD94C"> "base64-images#SAMPLE_LANDSCAPE"</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ACB6BF8C;font-style:italic"># From future nature.ts</span></span>
<span class="line"><span style="color:#39BAE6">coverImageId</span><span style="color:#BFBDB6B3">:</span><span style="color:#AAD94C"> "nature#FOREST_SCENE"</span></span></code></pre>
<hr>
<h2 id="part-2-inline-images-in-markdown">Part 2: Inline Images in Markdown</h2>
<p>You can also embed base64 images <strong>inside your markdown content</strong> using a special syntax!</p><h3 id="basic-syntax">Basic Syntax</h3>
<pre class="shiki ayu-dark" style="background-color:#0b0e14;color:#bfbdb6" tabindex="0"><code><span class="line"><span>::img[filename#CONSTANT_NAME]</span></span></code></pre>
<h3 id="image-only">Image Only</h3>
<p>::img[base64-images#SAMPLE_LANDSCAPE]</p><h3 id="image-with-alt-text">Image with Alt Text</h3>
<p>::img[base64-images#SAMPLE_LANDSCAPE|A placeholder image demonstrating base64 in markdown]</p><h3 id="image-with-width">Image with Width</h3>
<p>::img[base64-images#SAMPLE_LANDSCAPE|Beautiful landscape|600px]</p><h3 id="centered-image-with-all-options">Centered Image with All Options</h3>
<p>::img[base64-images#SAMPLE_LANDSCAPE|Centered landscape with custom width|500px|center]</p><hr>
<h2 id="inline-image-format-reference">Inline Image Format Reference</h2>
<p>The syntax supports multiple optional parameters separated by <code>|</code>:</p><pre class="shiki ayu-dark" style="background-color:#0b0e14;color:#bfbdb6" tabindex="0"><code><span class="line"><span>::img[filename#CONSTANT|alt text|width|alignment]</span></span></code></pre>
<p><strong>Parameters:</strong></p><ol>
<li><code>filename#CONSTANT</code> - <strong>Required</strong> - Image reference (e.g., <code>house#PLACEHOLDER_IMAGE</code>)</li>
<li><code>alt text</code> - <strong>Optional</strong> - Alt text for accessibility</li>
<li><code>width</code> - <strong>Optional</strong> - Max width (e.g., <code>500px</code>, <code>80%</code>)</li>
<li><code>alignment</code> - <strong>Optional</strong> - Use <code>center</code> to center the image</li>
</ol>
<p><strong>Examples:</strong></p><h1 id="just-the-image">Just the image</h1>
<pre class="shiki ayu-dark" style="background-color:#0b0e14;color:#bfbdb6" tabindex="0"><code><span class="line"><span style="color:#BFBDB6">::img[</span><span style="color:#39BAE6">base64-images#PLACEHOLDER_IMAGE</span><span style="color:#BFBDB6">]</span></span></code></pre>
<h1 id="with-alt-text">With alt text</h1>
<pre class="shiki ayu-dark" style="background-color:#0b0e14;color:#bfbdb6" tabindex="0"><code><span class="line"><span style="color:#BFBDB6">::img[base64-images#SAMPLE_LANDSCAPE|Beautiful landscape photo]</span></span></code></pre>
<h1 id="with-alt-text-and-width">With alt text and width</h1>
<pre class="shiki ayu-dark" style="background-color:#0b0e14;color:#bfbdb6" tabindex="0"><code><span class="line"><span style="color:#BFBDB6">::img[base64-images#SAMPLE_LANDSCAPE|Beautiful landscape photo|400px]</span></span></code></pre>
<h1 id="centered-with-all-options">Centered with all options</h1>
<pre class="shiki ayu-dark" style="background-color:#0b0e14;color:#bfbdb6" tabindex="0"><code><span class="line"><span style="color:#BFBDB6">::img[base64-images#SAMPLE_LANDSCAPE|Beautiful landscape photo|400px|center]</span></span></code></pre>
<hr>
<h2 id="adding-new-base64-images">Adding New Base64 Images</h2>
<h3 id="single-location-management-">Single Location Management ✨</h3>
<p>All image imports and registry management happens in <strong>one centralized file</strong>: <a href="%60src/app/config/base64-images-registry.ts%60">base64-images-registry.ts</a></p><p><strong>Step 1:</strong> Create or choose a category file in <code>src/data/images/</code>:</p><pre class="shiki ayu-dark" style="background-color:#0b0e14;color:#bfbdb6" tabindex="0"><code><span class="line"><span style="color:#ACB6BF8C;font-style:italic">// base64-images.ts (or create nature.ts, icons.ts, etc.)</span></span>
<span class="line"><span style="color:#FF8F40">export</span><span style="color:#FF8F40"> const</span><span style="color:#BFBDB6"> MY_NEW_IMAGE </span><span style="color:#F29668">=</span><span style="color:#AAD94C"> "data:image/jpeg;base64,/9j/4AAQ..."</span><span style="color:#BFBDB6B3">;</span></span></code></pre>
<p><strong>Step 2:</strong> Register in <code>src/app/config/base64-images-registry.ts</code>:</p><pre class="shiki ayu-dark" style="background-color:#0b0e14;color:#bfbdb6" tabindex="0"><code><span class="line"><span style="color:#ACB6BF8C;font-style:italic">// Import at the top</span></span>
<span class="line"><span style="color:#FF8F40">import</span><span style="color:#D2A6FF"> *</span><span style="color:#FF8F40"> as</span><span style="color:#BFBDB6"> natureImages </span><span style="color:#FF8F40">from</span><span style="color:#AAD94C"> '../../data/images/nature'</span><span style="color:#BFBDB6B3">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ACB6BF8C;font-style:italic">// Add to registry (this is the ONLY place you need to edit!)</span></span>
<span class="line"><span style="color:#FF8F40">export</span><span style="color:#FF8F40"> const</span><span style="color:#BFBDB6"> IMAGE_REGISTRY</span><span style="color:#F29668">:</span><span style="color:#59C2FF"> Record</span><span style="color:#BFBDB6">&#x3C;</span><span style="color:#39BAE6">string</span><span style="color:#BFBDB6B3">,</span><span style="color:#39BAE6"> any</span><span style="color:#BFBDB6">> </span><span style="color:#F29668">=</span><span style="color:#BFBDB6"> {</span></span>
<span class="line"><span style="color:#AAD94C">  'base64-images'</span><span style="color:#BFBDB6B3">:</span><span style="color:#BFBDB6"> base64Images</span><span style="color:#BFBDB6B3">,</span></span>
<span class="line"><span style="color:#AAD94C">  'nature'</span><span style="color:#BFBDB6B3">:</span><span style="color:#BFBDB6"> natureImages</span><span style="color:#BFBDB6B3">,</span><span style="color:#ACB6BF8C;font-style:italic">  // Add here</span></span>
<span class="line"><span style="color:#BFBDB6">}</span><span style="color:#BFBDB6B3">;</span></span></code></pre>
<p><strong>That&#39;s it!</strong> Both cover images and inline images automatically use the updated registry. No need to edit multiple files.</p><p><strong>Step 3:</strong> Use in cover image or inline:</p><pre class="shiki ayu-dark" style="background-color:#0b0e14;color:#bfbdb6" tabindex="0"><code><span class="line"><span style="color:#39BAE6">coverImageId</span><span style="color:#BFBDB6B3">:</span><span style="color:#AAD94C"> "nature#MY_NEW_IMAGE"</span></span></code></pre>
<p>Or inline:</p><pre class="shiki ayu-dark" style="background-color:#0b0e14;color:#bfbdb6" tabindex="0"><code><span class="line"><span style="color:#BFBDB6">::img[</span><span style="color:#39BAE6">nature#MY_NEW_IMAGE|Description|500px|center</span><span style="color:#BFBDB6">]</span></span></code></pre>
<hr>
<h2 id="benefits">Benefits</h2>
<p>✅ <strong>No Network Requests</strong> - Images load instantly<br>✅ <strong>No 404 Errors</strong> - Images embedded in code<br>✅ <strong>Version Control</strong> - Track images in git<br>✅ <strong>Organized</strong> - Category-based file structure<br>✅ <strong>Centralized</strong> - Single registry for all image imports<br>✅ <strong>Flexible</strong> - Use as cover or inline images  </p><hr>
<h2 id="best-practices-2">Best Practices</h2>
<p>⚠️ <strong>Image Size</strong>: Keep base64 images small (&lt; 50KB) as they increase bundle size by ~33%</p><p><strong>Recommended for:</strong></p><ul>
<li>Icons and logos</li>
<li>Small thumbnails</li>
<li>Critical above-the-fold images</li>
<li>Demo/placeholder images</li>
</ul>
<p><strong>Not recommended for:</strong></p><ul>
<li>Large photos (use regular image paths)</li>
<li>Many images on one page</li>
<li>Frequently changing images</li>
</ul>
<p>:::warning
Base64 encoding increases file size by ~33%. Keep images optimized.
:::</p>`;export{e as default};
