import { Component, OnInit, OnDestroy, AfterViewInit, AfterViewChecked, ViewChild, ElementRef, PLATFORM_ID, Inject, ChangeDetectorRef } from '@angular/core';
import { isPlatformBrowser, AsyncPipe, CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { injectContent, injectContentFiles, MarkdownComponent } from '@analogjs/content';

import PostAttributes from '../../post-attributes';
import { extractHeadings, HeadingLink } from '../../utilities/markdown-utils';
import { transformAdmonitions } from '../../utilities/marked-admonition-plugin';
import { TableOfContentsComponent } from '../../components/table-of-contents.component';
import { PostNavigationComponent } from '../../components/post-navigation.component';

@Component({
  selector: 'app-blog-post',
  imports: [
    AsyncPipe,
    CommonModule,
    RouterLink,
    MarkdownComponent,
    TableOfContentsComponent,
    PostNavigationComponent,
  ],
  template: `
    @if (post$ | async; as post) {
    <article class="blog-post">
      <header class="blog-post__header">
        <h1 class="blog-post__title">{{ post.attributes.title }}</h1>
        @if (post.attributes.date) {
        <p class="blog-post__date">{{ post.attributes.date }}</p>
        }
        <p class="blog-post__description">{{ post.attributes.description }}</p>
      </header>

      <img 
        class="blog-post__image" 
        [src]="post.attributes.coverImage || defaultCoverImage"
        [alt]="post.attributes.title"
      />

      <div class="blog-post__container" [class.blog-post__container--no-toc]="!showToc">
        @if (showToc && headings.length > 0) {
        <app-table-of-contents 
          [headings]="headings"
          class="blog-post__toc"
        ></app-table-of-contents>
        }

        <div class="blog-post__content" #contentRef>
          <analog-markdown [content]="post.content" />
        </div>
      </div>

      @if (showDisclaimer) {
      <section class="blog-post__disclaimer">
        <p>{{ disclaimerText }}</p>
      </section>
      }

      <section class="blog-post__sidebar">
        <div class="recent-posts-widget">
          <h3>Recent Posts</h3>
          <ul class="recent-posts-list">
            @for (p of recentPosts; track p.attributes.slug) {
            @if (p.attributes.slug !== currentSlug) {
            <li class="recent-post-item">
              @if (p.attributes.coverImage || defaultCoverImage) {
              <img 
                class="recent-post-thumbnail" 
                [src]="p.attributes.coverImage || defaultCoverImage"
                [alt]="p.attributes.title"
              />
              }
              <a [routerLink]="['/blog', p.attributes.slug]">
                {{ p.attributes.title }}
              </a>
            </li>
            }
            }
          </ul>
        </div>
      </section>

      <app-post-navigation 
        [previousPost]="previousPost"
        [nextPost]="nextPost"
      ></app-post-navigation>
    </article>
    }
  `,
  styles: `
    .blog-post {
      max-width: 900px;
      margin: 0 auto;
    }

    .blog-post__header {
      margin-bottom: 2rem;
      text-align: center;
    }

    .blog-post__title {
      font-size: 2.5rem;
      margin: 0 0 1rem 0;
      line-height: 1.2;
      color: #212529;
    }

    .blog-post__date {
      font-size: 0.95rem;
      color: #6c757d;
      margin: 0 0 0.5rem 0;
    }

    .blog-post__description {
      font-size: 1.125rem;
      color: #495057;
      margin: 0;
      line-height: 1.6;
    }

    .blog-post__image {
      width: 100%;
      height: auto;
      max-height: 500px;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 3rem;
      display: block;
    }

    .blog-post__container {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 2rem;
      margin-bottom: 1.5rem;
    }

    .blog-post__container--no-toc {
      grid-template-columns: 1fr;
    }

    .blog-post__toc {
      order: -1;
    }

    .blog-post__content {
      font-size: 1.05rem;
      line-height: 1.8;
      color: #333;
    }

    .blog-post__container--no-toc .blog-post__content {
      grid-column: 1;
    }

    .blog-post__sidebar {
      margin-top: 2rem;
    }

    .blog-post__disclaimer {
      margin: 2rem 0;
      padding: 1rem 1.25rem;
      border-left: 4px solid #ffc107;
      background: #fff3cd;
      color: #856404;
      border-radius: 6px;
    }

    .recent-posts-widget {
      background-color: #f8f9fa;
      border: 1px solid #dee2e6;
      border-radius: 8px;
      padding: 1.5rem;
      position: sticky;
      top: 100px;
      max-height: 70vh;
      overflow-y: auto;
    }

    .recent-posts-widget h3 {
      font-size: 1rem;
      margin: 0 0 1rem 0;
      color: #212529;
    }

    .recent-posts-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .recent-post-item {
      margin-bottom: 1rem;
      display: flex;
      gap: 0.75rem;
      align-items: flex-start;
    }

    .recent-post-thumbnail {
      width: 60px;
      height: 60px;
      object-fit: cover;
      border-radius: 6px;
      flex-shrink: 0;
    }

    .recent-posts-list a {
      color: #495057;
      text-decoration: none;
      transition: color 0.2s ease;
      font-size: 0.95rem;
      line-height: 1.4;
      display: block;
      flex: 1;
    }

    .recent-posts-list a:hover {
      color: #0d6efd;
    }

    @media (max-width: 1024px) {
      .blog-post__container {
        grid-template-columns: 1fr;
      }

      .blog-post__toc {
        display: none;
      }
    }

    @media (max-width: 768px) {
      .blog-post__title {
        font-size: 2rem;
      }

      .blog-post__container {
        grid-template-columns: 1fr;
        gap: 1rem;
      }

      .blog-post__sidebar {
        grid-column: 1;
      }

      .recent-posts-widget {
        position: static;
        max-height: none;
      }
    }

    :host ::ng-deep analog-markdown {
      font-size: 1.05rem;
      line-height: 1.8;
      color: #333;
    }

    :host ::ng-deep analog-markdown h2 {
      margin: 2rem 0 1rem 0;
      padding-top: 1rem;
      border-top: 1px solid #dee2e6;
    }

    :host ::ng-deep analog-markdown h3 {
      margin: 1.5rem 0 0.75rem 0;
    }

    :host ::ng-deep analog-markdown p {
      margin: 1rem 0;
    }

    :host ::ng-deep analog-markdown code {
      background-color: #f4f4f4;
      padding: 0.2rem 0.4rem;
      border-radius: 3px;
      font-size: 0.9em;
      font-family: 'Courier New', monospace;
    }

    :host ::ng-deep analog-markdown pre {
      background-color: #f4f4f4;
      padding: 1rem;
      border-radius: 5px;
      overflow-x: auto;
      margin: 1rem 0;
    }

    :host ::ng-deep analog-markdown pre code {
      background-color: transparent;
      padding: 0;
    }

    :host ::ng-deep analog-markdown blockquote {
      border-left: 4px solid #0d6efd;
      margin: 1rem 0;
      padding: 0 0 0 1rem;
      color: #6c757d;
    }

    :host ::ng-deep analog-markdown ul,
    :host ::ng-deep analog-markdown ol {
      margin: 1rem 0;
      padding-left: 2rem;
    }

    :host ::ng-deep analog-markdown li {
      margin: 0.5rem 0;
    }

    :host ::ng-deep analog-markdown img {
      max-width: 100%;
      height: auto;
      border-radius: 5px;
      margin: 1rem 0;
    }

    :host ::ng-deep analog-markdown a {
      color: #0d6efd;
      text-decoration: none;
    }

    :host ::ng-deep analog-markdown a:hover {
      text-decoration: underline;
    }
  `,
})
export default class BlogPost implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {
  @ViewChild('contentRef') contentRef?: ElementRef;

  readonly post$ = injectContent<PostAttributes>('slug');
  readonly allPosts = injectContentFiles<PostAttributes>();
  readonly defaultCoverImage = 'tamil-literature-default.svg';

  headings: HeadingLink[] = [];
  recentPosts: any[] = [];
  previousPost: any = null;
  nextPost: any = null;
  currentSlug: string = '';
  showToc = true;
  showDisclaimer = true;
  disclaimerText = 'The views expressed are personal and for informational purposes only.';
  private mutationObserver?: MutationObserver;
  private hasExtractedHeadings = false;
  private isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) platformId: object,
    private cdr: ChangeDetectorRef
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    this.post$.subscribe((post) => {
      if (post) {
        this.currentSlug = post.attributes.slug;
        // frontmatter overrides
        this.showToc = post.attributes.toc !== false; // default true
        this.showDisclaimer = post.attributes.disclaimerEnabled !== false; // default true
        this.disclaimerText = post.attributes.disclaimerText || this.disclaimerText;
        this.updateNavigation();
        this.recentPosts = this.allPosts.slice(0, 5);
        // Reset TOC state when navigating to a new post
        this.headings = [];
        this.hasExtractedHeadings = false;
      }
    });
  }

  ngAfterViewInit() {
    // Run after view is fully initialized
    this.updateContentHeadings();
    if (this.isBrowser) {
      setTimeout(() => {
        this.transformAdmonitionsInContent();
        this.initObserver();
      }, 100);
    }
  }

  ngAfterViewChecked() {
    // Keep checking until we get headings
    if (!this.hasExtractedHeadings && this.contentRef?.nativeElement && this.isBrowser) {
      const headingEls = this.contentRef.nativeElement.querySelectorAll('h1, h2, h3, h4');
      if (headingEls.length > 0 && this.headings.length === 0) {
        // Use setTimeout to avoid ExpressionChangedAfterItHasBeenCheckedError
        setTimeout(() => {
          this.updateContentHeadings();
          this.cdr.detectChanges();
        }, 0);
      }
    }
  }

  ngOnDestroy() {
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
      this.mutationObserver = undefined;
    }
  }

  private updateContentHeadings() {
    if (!this.isBrowser || !this.contentRef?.nativeElement) {
      return;
    }
    
    const container = this.contentRef.nativeElement;
    const headingEls = container.querySelectorAll('h1, h2, h3, h4');
    
    if (headingEls.length === 0) {
      return; // Content not ready yet
    }
    
    // Inject IDs into headings that don't have them
    headingEls.forEach((el: Element) => {
      if (!el.id) {
        const text = el.textContent || '';
        el.id = this.slugify(text);
      }
    });
    
    const html = container.innerHTML;
    const extractedHeadings = extractHeadings(html);
    
    if (extractedHeadings.length > 0 && !this.hasExtractedHeadings) {
      this.headings = extractedHeadings;
      this.hasExtractedHeadings = true;
    }
  }

  private transformAdmonitionsInContent() {
    if (!this.isBrowser || !this.contentRef?.nativeElement) {
      return;
    }
    
    const container = this.contentRef.nativeElement;
    let html = container.innerHTML;
    const transformed = transformAdmonitions(html);
    
    if (transformed !== html) {
      container.innerHTML = transformed;
    }
  }

  private initObserver() {
    if (!this.isBrowser) return;
    if (!this.contentRef?.nativeElement) return;
    if (this.mutationObserver) return;
    this.mutationObserver = new MutationObserver(() => {
      this.updateContentHeadings();
    });
    this.mutationObserver.observe(this.contentRef.nativeElement, {
      childList: true,
      subtree: true,
      characterData: true,
    });
  }

  private slugify(s: string): string {
    return s
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  private updateNavigation() {
    const currentIndex = this.allPosts.findIndex(
      (p) => p.attributes.slug === this.currentSlug
    );

    if (currentIndex > 0) {
      this.previousPost = this.allPosts[currentIndex - 1];
    } else {
      this.previousPost = null;
    }

    if (currentIndex < this.allPosts.length - 1) {
      this.nextPost = this.allPosts[currentIndex + 1];
    } else {
      this.nextPost = null;
    }
  }
}
