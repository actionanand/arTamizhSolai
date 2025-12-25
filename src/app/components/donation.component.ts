import { Component, Input, ChangeDetectionStrategy, PLATFORM_ID, inject, computed } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { donationConfig, donationPlatforms, DonationPlatform } from '../config/donation-config';
import PostAttributes from '../post-attributes';

@Component({
  selector: 'app-donation',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (shouldShowDonation()) {
      <div class="donation-section">
        <div class="donation-container">
          <div class="donation-header">
            <h3 class="donation-title">{{ donationConfig.sectionTitle }}</h3>
            @if (getDonationMessage()) {
              <p class="donation-message">{{ getDonationMessage() }}</p>
            }
          </div>

          <div class="donation-platforms">
            <!-- Row 1: External link platforms -->
            <div class="donation-row donation-row-links">
              @for (platform of redirectPlatforms(); track platform.name) {
                <a 
                  [href]="platform.url" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="donation-platform redirect-platform"
                  [title]="platform.description"
                >
                  <span class="platform-name">{{ platform.name }}</span>
                </a>
              }
            </div>

            <!-- Row 2: GPay QR + UPI ID (always below links) -->
            @if (gpay()) {
              <div class="donation-row donation-row-gpay">
                <div class="gpay-card" [title]="gpay()?.description ?? 'UPI via GPay'">
                  @if (gpay()?.qrImage) {
                    <img 
                      [src]="getAssetPath(gpay()?.qrImage!)"
                      [alt]="'GPay QR for UPI ' + (getUpiId(gpay()) || '')"
                      class="gpay-qr"
                    />
                  }
                  <div class="gpay-upi">
                    <p class="gpay-upi-id">{{ getUpiId(gpay()) }}</p>
                    <!-- <small class="gpay-upi-label">UPI ID</small> -->
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    }
  `,
  styleUrls: ['../../styles/donation.css']
})
export class DonationComponent {
  @Input() postAttributes?: PostAttributes | Record<string, never>;
  
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);
  
  donationConfig = donationConfig;
  
  // Signals for platforms
  readonly redirectPlatforms = computed(() =>
    donationPlatforms.filter(p => p.enabled && p.type === 'redirect')
  );
  readonly gpay = computed<DonationPlatform | null>(() =>
    donationPlatforms.find(p => p.enabled && p.name === 'GPay') ?? null
  );

  shouldShowDonation(): boolean {
    // Check global configuration
    if (!donationConfig.enabled) {
      // If globally disabled, check if post specifically enables it
      return this.getPostAttribute('enableDonation') === true;
    }

    // If globally enabled, check if post specifically disables it
    if (this.getPostAttribute('enableDonation') === false) {
      return false;
    }

    // If globally enabled and showing on all posts
    if (donationConfig.showOnAllPosts) {
      return true;
    }

    // If not showing on all posts by default, check post-specific setting
    return this.getPostAttribute('enableDonation') === true;
  }

  private getPostAttribute(key: keyof PostAttributes): any {
    if (!this.postAttributes || Object.keys(this.postAttributes).length === 0) {
      return undefined;
    }
    return (this.postAttributes as PostAttributes)[key];
  }

  // No popup/modal logic; QR is shown inline alongside other platforms

  getDonationMessage(): string {
    // Check if post has a custom donation message
    const customMessage = this.getPostAttribute('donationMessage');
    return customMessage || donationConfig.message || '';
  }

  getUpiId(platform: DonationPlatform | null): string {
    if (!platform) return '';
    return platform.upiId ?? '';
  }

  getAssetPath(imageName: string): string {
    if (!imageName) return '';
    if (!this.isBrowser) {
      return `/${imageName}`;
    }
    const baseHref = document.querySelector('base')?.getAttribute('href') || '/';
    const basePath = baseHref.endsWith('/') ? baseHref : `${baseHref}/`;
    return `${basePath}${imageName}`;
  }
}