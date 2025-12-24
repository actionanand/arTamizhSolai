# Donation Feature Documentation

The donation feature allows readers to support content creators through various payment platforms. This feature is highly configurable and can be enabled/disabled both globally and per-post.

## Configuration

### Global Configuration

The donation feature is controlled by the [donation-config.ts](../src/app/config/donation-config.ts) file, which provides:

#### Main Settings

```typescript
export const donationConfig = {
  enabled: true,                    // Global toggle for donations
  showOnAllPosts: true,            // Show donations on all posts by default
  sectionTitle: 'Support This Content',  // Title displayed above donation section
  message: 'If you found this content helpful, consider supporting the author.',
  showAfterDisclaimer: true        // Position relative to disclaimer
};
```

#### Donation Platforms

The `donationPlatforms` array contains all available donation methods:

```typescript
export const donationPlatforms: DonationPlatform[] = [
  {
    name: 'GPay',
    url: '',
    icon: 'gpay',
    enabled: true,
    type: 'qr',                    // Shows QR code on hover
    qrData: 'upi://pay?pa=yourname@okaxis&pn=Your%20Name&am=&cu=INR&tn=Support%20Blog',
    description: 'Pay via UPI using Google Pay or any UPI app'
  },
  {
    name: 'PayPal',
    url: 'https://paypal.me/yourpaypallink',
    icon: 'paypal',
    enabled: true,
    type: 'redirect',              // Opens in new tab
    description: 'Support via PayPal'
  },
  // ... more platforms
];
```

### Platform Types

1. **QR Type** (`type: 'qr'`): Shows QR code popup on hover (e.g., GPay UPI)
2. **Redirect Type** (`type: 'redirect'`): Opens external link in new tab (e.g., PayPal, Buy Me A Coffee)
3. **Modal Type** (`type: 'modal'`): Future support for custom modals

### Supported Platforms

The feature comes with pre-configured support for:

- **GPay** (UPI QR code)
- **PayPal** (Direct link)
- **Buy Me A Coffee** (Direct link)
- **GitHub Sponsors** (Direct link)
- **Patreon** (Direct link)
- **Ko-fi** (Direct link)

## Per-Post Configuration

You can override global settings in individual blog posts using frontmatter:

```markdown
---
title: "My Blog Post"
description: "Post description"
enableDonation: true    # Override global setting
# ... other frontmatter
---
```

### Configuration Logic

1. **If global donations are disabled**: Only posts with `enableDonation: true` will show donations
2. **If global donations are enabled**: 
   - Posts with `enableDonation: false` will hide donations
   - All other posts follow the `showOnAllPosts` setting

## Customization

### Adding New Platforms

To add a new donation platform:

1. Add a new entry to the `donationPlatforms` array in [donation-config.ts](../src/app/config/donation-config.ts):

```typescript
{
  name: 'Your Platform',
  url: 'https://your-platform.com/donate',
  icon: 'your-platform-icon',
  enabled: true,
  type: 'redirect',
  description: 'Support via Your Platform'
}
```

2. Add the corresponding icon class in the component's `getPlatformIconClass` method or ensure your CSS includes the appropriate FontAwesome or custom icon.

### Styling

The donation section styles are located in [donation.css](../src/styles/donation.css). The design includes:

- Responsive grid layout
- Hover effects with platform-specific colors
- QR code tooltip positioning
- Dark mode support
- Mobile-optimized tooltips

### UPI Configuration

For GPay and other UPI-based platforms, configure the `qrData` field with a proper UPI URL:

```typescript
qrData: 'upi://pay?pa=your-upi-id@bank&pn=Your%20Name&am=&cu=INR&tn=Support%20Blog'
```

**Parameters:**
- `pa`: UPI ID (Payment Address)
- `pn`: Payee Name (URL encoded)
- `am`: Amount (optional, empty for user input)
- `cu`: Currency (INR for Indian Rupees)
- `tn`: Transaction Note (URL encoded)

## Usage Examples

### Enable donations globally, disable for specific posts:

**donation-config.ts:**
```typescript
export const donationConfig = {
  enabled: true,
  showOnAllPosts: true,
  // ...
};
```

**Specific post frontmatter:**
```markdown
---
title: "Free Resource Post"
enableDonation: false
---
```

### Disable donations globally, enable for specific posts:

**donation-config.ts:**
```typescript
export const donationConfig = {
  enabled: false,
  showOnAllPosts: false,
  // ...
};
```

**Specific post frontmatter:**
```markdown
---
title: "Premium Content"
enableDonation: true
---
```

## Implementation Details

### Component Structure

The donation feature consists of:

1. **Configuration**: [donation-config.ts](../src/app/config/donation-config.ts)
2. **Component**: [donation.component.ts](../src/app/components/donation.component.ts)
3. **Styles**: [donation.css](../src/styles/donation.css)
4. **Integration**: Added to blog post template in [[slug].page.ts](../src/app/pages/blog/[slug].page.ts)

### Positioning

The donation section appears after the disclaimer (if enabled) and before the related posts section, providing a natural break in the content flow.

### Accessibility

- All donation buttons include descriptive `title` attributes
- QR codes include alternative text descriptions
- Keyboard navigation is supported for all interactive elements
- Color combinations meet WCAG contrast requirements

## Best Practices

1. **Test payment links** before enabling platforms
2. **Keep descriptions concise** but informative
3. **Limit active platforms** to avoid overwhelming users (3-5 recommended)
4. **Update UPI QR data** with your actual payment details
5. **Monitor donation performance** and adjust platform selection accordingly

## Security Considerations

- All external links open in new tabs with `noopener,noreferrer` for security
- UPI URLs are validated to prevent injection attacks
- No sensitive information is stored in configuration files