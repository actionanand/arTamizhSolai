---
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

# Welcome to the Protected Article

If you're reading this, congratulations! You've successfully unlocked this password-protected content.

## What is This?

This article demonstrates the password protection feature implemented in the arTamizhSolai blog system. The protection is client-side and uses SHA-1 hashing for password validation.

## Features

The password protection system includes:

- **SHA-1 Hash Validation**: Passwords are compared against a stored SHA-1 hash
- **LocalStorage Caching**: Successful authentication is cached for 24 hours
- **Password Visibility Toggle**: Users can show/hide the password while typing
- **Responsive Modal**: Clean, user-friendly password prompt
- **Auto-redirect**: Failed authentication redirects to blog home

## How It Works

1. When you navigate to a protected post, the system checks if `enableLock: true` is set in the frontmatter
2. If locked, it checks localStorage for cached authentication
3. If not authenticated, a modal prompts for the password
4. Upon successful authentication, access is granted and cached
5. The cache expires after 24 hours

## Security Notes

⚠️ This is a **client-side** protection system. It's suitable for:
- Member-only content
- Subscriber exclusives
- Shared family content
- Basic access control

It's **NOT** suitable for:
- Highly sensitive data
- Confidential information
- Legal documents
- Financial data

## Testing

To test this feature:
1. Navigate away from this page
2. Return to this article
3. You should NOT be prompted for password again (cached)
4. Clear your browser's localStorage
5. Refresh - you'll need to enter the password again

## Default Credentials

For testing purposes, the default password is: `password123`

**Remember to change this in production!**

## Code Example

Here's how to protect your own blog posts:

```js
---
title: "My Secret Post"
slug: "my-secret-post"
description: "This post is protected"
enableLock: true
---

Your protected content here...
```

## Advanced Features

### Password Expiration

The authentication cache expires after 24 hours. You can customize this duration in the AuthService:

```typescript
private readonly EXPIRY_TIME = 24 * 60 * 60 * 1000; // milliseconds
```

### Clear Cache Manually

Users can manually clear their authentication by:
1. Opening browser Developer Tools (F12)
2. Going to Application/Storage → Local Storage
3. Removing the `blog_auth_cache` item

## Conclusion

This password protection system provides a simple, effective way to control access to your blog content without requiring a backend server or database. It's perfect for small-scale content protection needs.

For more details, check the documentation at `readme/PASSWORD_PROTECTION.md`.

---

**Note**: This article itself is password-protected. If you can read this, the system is working correctly!
