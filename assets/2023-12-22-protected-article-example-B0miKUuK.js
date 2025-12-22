const e=`---
title: "Protected Article Example"
slug: "protected-article-example"
description: "This is a password-protected article demonstrating the authentication system"
date: "2023-12-22"
category: "Private"
tags: ["protected", "example", "security"]
enableLock: true
toc: true
isPinned: true
---

<h1 id="welcome-to-the-protected-article">Welcome to the Protected Article</h1>
<p>If you&#39;re reading this, congratulations! You&#39;ve successfully unlocked this password-protected content.</p><h2 id="what-is-this">What is This?</h2>
<p>This article demonstrates the password protection feature implemented in the arTamizhSolai blog system. The protection is client-side and uses SHA-1 hashing for password validation.</p><h2 id="features">Features</h2>
<p>The password protection system includes:</p><ul>
<li><strong>SHA-1 Hash Validation</strong>: Passwords are compared against a stored SHA-1 hash</li>
<li><strong>LocalStorage Caching</strong>: Successful authentication is cached for 24 hours</li>
<li><strong>Password Visibility Toggle</strong>: Users can show/hide the password while typing</li>
<li><strong>Responsive Modal</strong>: Clean, user-friendly password prompt</li>
<li><strong>Auto-redirect</strong>: Failed authentication redirects to blog home</li>
</ul>
<h2 id="how-it-works">How It Works</h2>
<ol>
<li>When you navigate to a protected post, the system checks if <code>enableLock: true</code> is set in the frontmatter</li>
<li>If locked, it checks localStorage for cached authentication</li>
<li>If not authenticated, a modal prompts for the password</li>
<li>Upon successful authentication, access is granted and cached</li>
<li>The cache expires after 24 hours</li>
</ol>
<h2 id="security-notes">Security Notes</h2>
<p>⚠️ This is a <strong>client-side</strong> protection system. It&#39;s suitable for:</p><ul>
<li>Member-only content</li>
<li>Subscriber exclusives</li>
<li>Shared family content</li>
<li>Basic access control</li>
</ul>
<p>It&#39;s <strong>NOT</strong> suitable for:</p><ul>
<li>Highly sensitive data</li>
<li>Confidential information</li>
<li>Legal documents</li>
<li>Financial data</li>
</ul>
<h2 id="testing">Testing</h2>
<p>To test this feature:</p><ol>
<li>Navigate away from this page</li>
<li>Return to this article</li>
<li>You should NOT be prompted for password again (cached)</li>
<li>Clear your browser&#39;s localStorage</li>
<li>Refresh - you&#39;ll need to enter the password again</li>
</ol>
<h2 id="default-credentials">Default Credentials</h2>
<p>For testing purposes, the default password is: <code>password123</code></p><p><strong>Remember to change this in production!</strong></p><h2 id="code-example">Code Example</h2>
<p>Here&#39;s how to protect your own blog posts:</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#F97583">---</span></span>
<span class="line"><span style="color:#B392F0">title</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">"My Secret Post"</span></span>
<span class="line"><span style="color:#B392F0">slug</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">"my-secret-post"</span></span>
<span class="line"><span style="color:#B392F0">description</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">"This post is protected"</span></span>
<span class="line"><span style="color:#B392F0">enableLock</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">true</span></span>
<span class="line"><span style="color:#F97583">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">Your protected content here</span><span style="color:#F97583">...</span></span></code></pre>
<h2 id="advanced-features">Advanced Features</h2>
<h3 id="password-expiration">Password Expiration</h3>
<p>The authentication cache expires after 24 hours. You can customize this duration in the AuthService:</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">private readonly </span><span style="color:#79B8FF">EXPIRY_TIME</span><span style="color:#F97583"> =</span><span style="color:#79B8FF"> 24</span><span style="color:#F97583"> *</span><span style="color:#79B8FF"> 60</span><span style="color:#F97583"> *</span><span style="color:#79B8FF"> 60</span><span style="color:#F97583"> *</span><span style="color:#79B8FF"> 1000</span><span style="color:#E1E4E8">; </span><span style="color:#6A737D">// milliseconds</span></span></code></pre>
<h3 id="clear-cache-manually">Clear Cache Manually</h3>
<p>Users can manually clear their authentication by:</p><ol>
<li>Opening browser Developer Tools (F12)</li>
<li>Going to Application/Storage → Local Storage</li>
<li>Removing the <code>blog_auth_cache</code> item</li>
</ol>
<h2 id="conclusion">Conclusion</h2>
<p>This password protection system provides a simple, effective way to control access to your blog content without requiring a backend server or database. It&#39;s perfect for small-scale content protection needs.</p><p>For more details, check the documentation at <code>readme/PASSWORD_PROTECTION.md</code>.</p><hr>
<p><strong>Note</strong>: This article itself is password-protected. If you can read this, the system is working correctly!</p>`;export{e as default};
