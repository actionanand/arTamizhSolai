# Quick Start Guide - Password Protection

## 🎯 Quick Setup (3 Steps)

### Step 1: Set Your Password

```bash
# Generate SHA-1 hash
echo -n 'YourSecurePassword' | shasum
```

Copy the output hash and update both environment files:
- `src/environments/environment.ts`
- `src/environments/environment.prod.ts`

```typescript
export const environment = {
  production: false,
  googleFormId: '...',
  passwordHash: 'YOUR_HASH_HERE' // ← Paste here
};
```

### Step 2: Lock a Blog Post

Edit your blog post's frontmatter:

```markdown
---
title: "My Secret Article"
slug: "my-secret-article"
description: "This is protected"
coverImage: "image.jpg"
date: "2023-12-22"
enableLock: true  ← Add this line
---

Your protected content...
```

### Step 3: Test It!

1. Start your dev server: `npm start`
2. Navigate to your protected post
3. Enter your password
4. Success! 🎉

## 🔍 What Happens?

```
User visits protected post
         ↓
System checks: enableLock = true?
         ↓
    Yes → Is authenticated?
         ↓
    No → Show password modal
         ↓
    User enters password
         ↓
    Validate SHA-1 hash
         ↓
    Match? → Save to localStorage
         ↓
    Show content (cached 24hrs)
```

## 📱 User Experience

### First Visit:
1. User clicks on protected article
2. Modal appears with password input
3. User can toggle password visibility (👁️)
4. Submits password
5. If correct: content shown
6. If wrong: error message + retry
7. Cancel: redirects to blog home

### Return Visit (within 24 hours):
1. User clicks on protected article
2. Content shows immediately (cached)
3. No password prompt

### After 24 Hours:
1. Cache expires
2. Password prompt appears again
3. User re-authenticates

## 🎨 UI Features

- **Modal Design**: Clean, modern, responsive
- **Password Toggle**: Click eye icon to show/hide
- **Keyboard Support**: 
  - `Enter` to submit
  - `Escape` to cancel
- **Error Handling**: Clear error messages
- **Loading State**: "Validating..." feedback
- **Locked State**: Shows 🔒 icon when not authenticated

## 🔐 Security Features

✅ SHA-1 password hashing  
✅ Client-side validation  
✅ LocalStorage encryption  
✅ Time-based expiration  
✅ No password in plaintext  

⚠️ Client-side only - not for sensitive data

## 📊 File Overview

```
New Files:
├── services/auth.service.ts          # Password validation
├── components/password-modal.component.ts  # UI modal
├── guards/auth.guard.ts              # Route protection
└── readme/PASSWORD_PROTECTION.md     # Full docs

Modified Files:
├── environments/environment.ts       # Password hash
├── environments/environment.prod.ts  # Password hash
├── post-attributes.ts               # enableLock property
└── pages/blog/[slug].page.ts        # Integration

Test Content:
└── content/2023-12-22-protected-article-example.md
```

## 🛠️ Customization

### Change Cache Duration:

```typescript
// src/app/services/auth.service.ts
private readonly EXPIRY_TIME = 24 * 60 * 60 * 1000;
//                                ↑ Change this number
```

Examples:
- 1 hour: `1 * 60 * 60 * 1000`
- 12 hours: `12 * 60 * 60 * 1000`
- 7 days: `7 * 24 * 60 * 60 * 1000`

### Customize Modal Colors:

```typescript
// src/app/components/password-modal.component.ts
// Edit the styles section
.btn-submit {
  background-color: #3b82f6;  // ← Change color
  color: white;
}
```

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Modal not showing | Check `enableLock: true` in frontmatter |
| Password rejected | Verify hash matches in environment files |
| Cache not working | Check localStorage is enabled |
| Can't see content | Try different browser/clear cache |

## 📞 Need Help?

- **Full Documentation**: `readme/PASSWORD_PROTECTION.md`
- **Implementation Summary**: `readme/PASSWORD_IMPLEMENTATION_SUMMARY.md`
- **Test Article**: `/blog/protected-article-example`

## ✅ Checklist

Before deploying:
- [ ] Changed default password
- [ ] Updated hash in production environment
- [ ] Tested with protected article
- [ ] Verified cache expiration works
- [ ] Reviewed security considerations
- [ ] Customized modal styling (optional)

---

**Default Test Password**: `password123`  
**Remember**: Change this before production! 🔒
