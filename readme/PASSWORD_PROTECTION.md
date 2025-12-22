# Password Protection for Blog Posts

This document explains how to implement and use password protection for blog posts in the arTamizhSolai application.

## Overview

The password protection system allows you to lock specific blog posts with a password. Users must enter the correct password to view the protected content. The authentication is stored in localStorage and expires after 24 hours.

## Architecture

The implementation consists of the following components:

### 1. **AuthService** (`src/app/services/auth.service.ts`)
Handles password validation and authentication caching.

**Key Features:**
- SHA-1 hash-based password validation
- LocalStorage caching with 24-hour expiration
- Client-side only (no backend required)

**Main Methods:**
- `validatePassword(password: string)`: Validates password against stored hash
- `isAuthenticated()`: Checks if user has valid cached authentication
- `saveAuth()`: Saves successful authentication to localStorage
- `clearCache()`: Clears authentication cache

### 2. **PasswordModalComponent** (`src/app/components/password-modal.component.ts`)
A modal dialog that prompts users to enter the password.

**Features:**
- Password visibility toggle (show/hide)
- Error messages for incorrect passwords
- Keyboard support (Enter to submit, Escape to cancel)
- Responsive design

### 3. **AuthGuard** (`src/app/guards/auth.guard.ts`)
Route guard that checks authentication before allowing access.

**Note:** Currently simplified - authentication check happens in the component for better UX.

### 4. **Blog Post Component Integration**
The `[slug].page.ts` component integrates password protection:
- Checks for `enableLock` in post frontmatter
- Prompts for password if content is locked
- Shows locked content message if not authenticated
- Redirects to blog home if user cancels authentication

## Setup Instructions

### Step 1: Configure Password Hash

1. Generate a SHA-1 hash of your desired password:
   ```bash
   echo -n 'your_password_here' | shasum
   ```

2. Update the environment files with your password hash:
   - `src/environments/environment.ts` (development)
   - `src/environments/environment.prod.ts` (production)

   ```typescript
   export const environment = {
     production: false,
     googleFormId: '...',
     passwordHash: 'your_sha1_hash_here'
   };
   ```

**Default Password:** The system comes with a default password `password123` (hash: `cbfdac6008f9cab4083784cbd1874f76618d2a97`)

### Step 2: Lock a Blog Post

Add `enableLock: true` to the frontmatter of any blog post:

```markdown
---
title: "My Protected Article"
slug: "protected-article"
description: "This article requires a password"
coverImage: "image.jpg"
date: "2023-12-22"
category: "Private"
enableLock: true
---

Your protected content here...
```

### Step 3: Test the Implementation

1. Navigate to the protected blog post
2. The password modal should appear automatically
3. Enter the password and click "Unlock"
4. The content should be displayed
5. Reload the page - you should not be prompted again (cached for 24 hours)

## Usage

### For Content Creators

To protect a blog post:
1. Add `enableLock: true` to the post's frontmatter
2. Publish the post
3. Share the password with authorized users

### For Users

To access protected content:
1. Navigate to the protected blog post
2. Enter the password in the modal dialog
3. Click "Unlock" or press Enter
4. The password is cached for 24 hours

**Password Modal Features:**
- Click the eye icon (👁️) to show/hide the password
- Press Enter to submit
- Click "Cancel" or the X button to return to the blog home
- Incorrect password shows an error message

## Security Considerations

⚠️ **Important Security Notes:**

1. **Client-Side Only**: This is a client-side authentication system. The content and password hash are visible in the compiled JavaScript. This provides basic access control but is **NOT suitable for highly sensitive content**.

2. **SHA-1 Hashing**: While SHA-1 is used for password hashing, remember that:
   - The hash is visible in the environment files
   - Anyone with access to the source code can see the hash
   - This is designed for basic content protection, not military-grade security

3. **Use Cases**: This system is ideal for:
   - Member-only content
   - Exclusive articles for subscribers
   - Internal documentation
   - Family/friend shared content

4. **NOT Recommended For**:
   - Highly sensitive or confidential information
   - Financial data
   - Personal identifiable information (PII)
   - Legal documents

## Customization

### Change Password Expiration Time

Edit `src/app/services/auth.service.ts`:

```typescript
private readonly EXPIRY_TIME = 24 * 60 * 60 * 1000; // 24 hours
```

Change to desired duration (in milliseconds):
- 1 hour: `1 * 60 * 60 * 1000`
- 7 days: `7 * 24 * 60 * 60 * 1000`
- 30 days: `30 * 24 * 60 * 60 * 1000`

### Customize Modal Appearance

Edit the `styles` section in `src/app/components/password-modal.component.ts` to change:
- Colors
- Fonts
- Layout
- Animations

### Change Password Storage Key

Edit `src/app/services/auth.service.ts`:

```typescript
private readonly STORAGE_KEY = 'blog_auth_cache';
```

## Troubleshooting

### Password Modal Not Appearing
- Check that `enableLock: true` is in the post's frontmatter
- Verify the PasswordModalComponent is imported in the blog post component
- Check browser console for errors

### Authentication Not Persisting
- Check localStorage is enabled in the browser
- Verify the storage key hasn't been changed
- Check if localStorage is being cleared by other scripts

### Password Always Rejected
- Verify the password hash in environment files matches the generated hash
- Ensure you're using the correct password
- Check for typos in the environment configuration

### Content Still Visible in Source Code
- This is expected behavior - client-side protection cannot hide source code
- Content is visible in the compiled JavaScript bundle
- Use server-side rendering or backend authentication for true content protection

## API Reference

### AuthService

```typescript
// Validate password
const isValid = await authService.validatePassword('user_password');

// Check authentication status
const isAuth = authService.isAuthenticated();

// Save authentication
authService.saveAuth();

// Clear cache
authService.clearCache();

// Get remaining time (milliseconds)
const remaining = authService.getRemainingTime();
```

### PasswordModalComponent

```typescript
// Show modal and wait for result
const authenticated = await passwordModal.show();

// Hide modal
passwordModal.hide();
```

## File Structure

```
src/
├── app/
│   ├── components/
│   │   └── password-modal.component.ts
│   ├── guards/
│   │   └── auth.guard.ts
│   ├── services/
│   │   └── auth.service.ts
│   ├── post-attributes.ts (updated with enableLock)
│   └── pages/
│       └── blog/
│           └── [slug].page.ts (integrated with auth)
├── environments/
│   ├── environment.ts (password hash config)
│   └── environment.prod.ts (password hash config)
└── readme/
    └── PASSWORD_PROTECTION.md (this file)
```

## Future Enhancements

Potential improvements for the system:

1. **Multiple Passwords**: Support different passwords for different posts
2. **Password Hints**: Display hints for users who forgot the password
3. **Backend Integration**: Move to server-side authentication for better security
4. **Password Strength**: Add password strength requirements
5. **Rate Limiting**: Prevent brute force attempts
6. **Analytics**: Track authentication attempts and success rates
7. **Email Verification**: Require email verification for password access
8. **Time-Based Access**: Allow content to be locked/unlocked at specific times

## License

This implementation is part of the arTamizhSolai project.
