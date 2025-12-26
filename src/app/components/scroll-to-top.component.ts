import { Component, OnDestroy, AfterViewInit, PLATFORM_ID, Inject, signal } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (isVisible()) {
      <button 
        class="scroll-to-top" 
        (click)="scrollToTop()"
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        ↑
      </button>
    }
  `,
  styles: [`
    .scroll-to-top {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      background-color: var(--primary-color, #007bff);
      color: white;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease;
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.8;
    }

    .scroll-to-top:hover {
      opacity: 1;
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    }

    .scroll-to-top:active {
      transform: translateY(0);
    }

    @media (max-width: 768px) {
      .scroll-to-top {
        bottom: 1rem;
        right: 1rem;
        width: 2.5rem;
        height: 2.5rem;
        font-size: 1.25rem;
      }
    }
  `]
})
export class ScrollToTopComponent implements AfterViewInit, OnDestroy {
  isVisible = signal(false);
  private scrollThreshold = 300; // Show button after scrolling 300px
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      window.addEventListener('scroll', this.onScroll, { passive: true });
      // Check initial scroll position
      this.checkScrollPosition();
    }
  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
      window.removeEventListener('scroll', this.onScroll);
    }
  }

  private onScroll = (): void => {
    this.checkScrollPosition();
  };

  private checkScrollPosition(): void {
    if (this.isBrowser) {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      this.isVisible.set(scrollTop > this.scrollThreshold);
    }
  }

  scrollToTop(): void {
    if (this.isBrowser) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
