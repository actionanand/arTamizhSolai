export interface DonationPlatform {
  name: string;
  url: string;
  icon: string;
  enabled: boolean;
  type: 'redirect' | 'qr' | 'modal';
  upiId?: string; // UPI ID for QR-based donations like GPay
  qrImage?: string; // Path to QR image file
  description?: string; // For tooltips or additional info
}

/**
 * Global donation configuration
 * Controls whether donations are shown across the blog
 */
export const donationConfig = {
  // Global toggle for donations
  enabled: true,
  
  // Whether to show donations on all posts by default
  showOnAllPosts: true,
  
  // Title displayed above donation section
  sectionTitle: 'Support This Content',
  
  // Optional message to display with donations
  message: 'If you found this content helpful, consider supporting the author.',
  
  // Position relative to disclaimer (if disclaimer is enabled)
  showAfterDisclaimer: true
};

/**
 * Available donation platforms
 * Configure your donation methods here
 */
export const donationPlatforms: DonationPlatform[] = [
  {
    name: 'GPay',
    url: '', // Not used for QR type
    icon: 'gpay',
    enabled: true,
    type: 'qr',
    upiId: 'anand@oksbi',
    qrImage: 'gpay-anand.png',
    description: 'Pay via UPI using Google Pay or any UPI app'
  },
  {
    name: 'PayPal',
    url: 'https://paypal.me/actionanand',
    icon: 'paypal',
    enabled: true,
    type: 'redirect',
    description: 'Support via PayPal'
  },
  {
    name: 'Buy Me A Coffee',
    url: 'https://buymeacoffee.com/actionanand',
    icon: 'buymeacoffee',
    enabled: true,
    type: 'redirect',
    description: 'Buy me a coffee to support my work'
  },
  {
    name: 'GitHub Sponsors',
    url: 'https://github.com/sponsors/actionanand',
    icon: 'github-sponsors',
    enabled: true,
    type: 'redirect',
    description: 'Become a GitHub sponsor'
  },
  {
    name: 'Patreon',
    url: 'https://patreon.com/yourusername',
    icon: 'patreon',
    enabled: false,
    type: 'redirect',
    description: 'Support via Patreon'
  },
  {
    name: 'Ko-fi',
    url: 'https://ko-fi.com/actionanand',
    icon: 'kofi',
    enabled: true,
    type: 'redirect',
    description: 'Support via Ko-fi'
  }
];