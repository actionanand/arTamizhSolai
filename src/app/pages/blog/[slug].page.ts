import { Component, OnInit, OnDestroy, AfterViewInit, AfterViewChecked, ViewChild, ElementRef, PLATFORM_ID, Inject, ChangeDetectorRef } from '@angular/core';
import { isPlatformBrowser, AsyncPipe, CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { injectContent, injectContentFiles, MarkdownComponent } from '@analogjs/content';
import { paginationConfig } from '../../config/pagination-config';

import PostAttributes from '../../post-attributes';
import { extractHeadings, HeadingLink } from '../../utilities/markdown-utils';
import { TableOfContentsComponent } from '../../components/table-of-contents.component';
import { PostNavigationComponent } from '../../components/post-navigation.component';
import { AdmonitionTransformPipe } from '../../pipes/admonition-transform.pipe';
import { ProcessFootnotesPipe } from '../../pipes/process-footnotes.pipe';

@Component({
  selector: 'app-blog-post',
  imports: [
    AsyncPipe,
    CommonModule,
    RouterLink,
    MarkdownComponent,
    TableOfContentsComponent,
    PostNavigationComponent,
    AdmonitionTransformPipe,
    ProcessFootnotesPipe,
  ],
  template: `
    @if (post$ | async; as post) {
    <article class="blog-post">
      <header class="blog-post__header">
        <h1 class="blog-post__title">{{ post.attributes.title }}</h1>
        @if (post.attributes.date) {
        <p class="blog-post__date">{{ post.attributes.date }}</p>
        }
        <div class="blog-post__meta">
          @if (post.attributes.isDraft) {
          <span class="post-meta-tag draft-tag">📝 Draft</span>
          }
          @if (post.attributes.isPinned) {
          <span class="post-meta-tag pinned-tag">📌 Pinned</span>
          }
          <span class="post-meta-tag category-tag">{{ post.attributes.category || 'uncategorized' }}</span>
          @if (post.attributes.tags && post.attributes.tags.length > 0) {
          @for (tag of post.attributes.tags; track tag) {
          <span class="post-meta-tag tag-tag">{{ tag }}</span>
          }
          }
        </div>
        @if (post.attributes.author || post.attributes.epicName || post.attributes.verseNumber || post.attributes.articleMetadata) {
        <div class="blog-post__article-meta">
          @if (post.attributes.author) {
          <div class="article-meta-item">
            <strong>Author:</strong> {{ post.attributes.author }}
          </div>
          }
          @if (post.attributes.epicName) {
          <div class="article-meta-item">
            <strong>Epic:</strong> {{ post.attributes.epicName }}
          </div>
          }
          @if (post.attributes.verseNumber) {
          <div class="article-meta-item">
            <strong>Verse Number:</strong> {{ post.attributes.verseNumber }}
          </div>
          }
          @if (post.attributes.articleMetadata) {
          <div class="article-meta-item">
            <strong>Info:</strong> {{ post.attributes.articleMetadata }}
          </div>
          }
        </div>
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
          @if (post.content) {
          <analog-markdown [content]="(typeof post.content === 'string' ? post.content : '') | processFootnotes | admonitionTransform" />
          }
        </div>
      </div>

      @if (showDisclaimer) {
      <section class="blog-post__disclaimer">
        <div class="disclaimer-header">
          <svg class="disclaimer-icon" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/>
            <line x1="12" y1="8" x2="12" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <circle cx="12" cy="16" r="0.5" fill="currentColor"/>
          </svg>
          <h4>Disclaimer</h4>
        </div>
        <p>{{ disclaimerText }}</p>
      </section>
      }

      <section class="blog-post__related">
        @if (relatedPosts.length > 0) {
        <div class="related-posts">
          <h3>Related Posts</h3>
          <ul class="posts-list">
            @for (p of relatedPosts; track p.attributes.slug) {
            <li class="post-item">
              @if (p.attributes.coverImage || defaultCoverImage) {
              <img 
                class="post-thumbnail" 
                [src]="p.attributes.coverImage || defaultCoverImage"
                [alt]="p.attributes.title"
              />
              }
              <div class="post-info">
                <a [routerLink]="['/blog', p.attributes.slug]" class="post-link">{{ p.attributes.title }}</a>
                @if (p.attributes.date) {
                <span class="post-date">{{ p.attributes.date }}</span>
                }
              </div>
            </li>
            }
          </ul>
        </div>
        } @else {
        <div class="recent-posts">
          <h3>Recent Posts</h3>
          <ul class="posts-list">
            @for (p of recentPosts; track p.attributes.slug) {
            @if (p.attributes.slug !== currentSlug) {
            <li class="post-item">
              @if (p.attributes.coverImage || defaultCoverImage) {
              <img 
                class="post-thumbnail" 
                [src]="p.attributes.coverImage || defaultCoverImage"
                [alt]="p.attributes.title"
              />
              }
              <div class="post-info">
                <a [routerLink]="['/blog', p.attributes.slug]" class="post-link">{{ p.attributes.title }}</a>
                @if (p.attributes.date) {
                <span class="post-date">{{ p.attributes.date }}</span>
                }
              </div>
            </li>
            }
            }
          </ul>
        </div>
        }
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

    .blog-post__meta {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin: 0.75rem 0;
    }

    .post-meta-tag {
      display: inline-block;
      font-size: 0.75rem;
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      font-weight: 500;
    }

    .category-tag {
      background: #e3f2fd;
      color: #1976d2;
      border: 1px solid #1976d2;
    }

    .tag-tag {
      background: #f3e5f5;
      color: #7b1fa2;
      border: 1px solid #7b1fa2;
    }

    .pinned-tag {
      background: #fff3cd;
      color: #664d03;
      border: 1px solid #ffecb5;
      font-weight: 600;
    }

    .draft-tag {
      background: #f8d7da;
      color: #721c24;
      border: 1px solid #f5c6cb;
      font-weight: 600;
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
      padding: 1.25rem;
      background: linear-gradient(135deg, #f5f5f5 0%, #fafafa 100%);
      border-left: 4px solid #9e9e9e;
      border-radius: 6px;
      color: #424242;
      position: relative;
      transform: translateX(-8px);
      box-shadow: -4px 4px 12px rgba(158, 158, 158, 0.1);
    }

    .disclaimer-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 0.75rem;
    }

    .disclaimer-icon {
      width: 20px;
      height: 20px;
      color: #9e9e9e;
      flex-shrink: 0;
    }

    .blog-post__disclaimer h4 {
      margin: 0;
      font-size: 1rem;
      font-weight: 600;
      color: #9e9e9e;
    }

    .blog-post__disclaimer p {
      margin: 0;
      font-size: 0.95rem;
      line-height: 1.6;
      color: #616161;
    }

    .blog-post__related {
      margin: 3rem 0 2rem 0;
    }

    .related-posts,
    .recent-posts {
      padding: 1.5rem 0;
    }

    .related-posts h3,
    .recent-posts h3 {
      font-size: 1.25rem;
      margin: 0 0 1.5rem 0;
      color: #212529;
      border-bottom: 2px solid #0d6efd;
      padding-bottom: 0.75rem;
    }

    .posts-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }

    .post-item {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      padding: 1rem;
      background: #f8f9fa;
      border: 1px solid #dee2e6;
      border-radius: 8px;
      transition: all 0.3s ease;
    }

    .post-item:hover {
      border-color: #0d6efd;
      box-shadow: 0 4px 12px rgba(13, 110, 253, 0.1);
    }

    .post-thumbnail {
      width: 100%;
      height: 150px;
      object-fit: cover;
      border-radius: 6px;
      border: 1px solid #dee2e6;
    }

    .post-info {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      flex: 1;
    }

    .post-link {
      color: #0d6efd;
      text-decoration: none;
      font-weight: 600;
      font-size: 1rem;
      line-height: 1.4;
      transition: color 0.2s ease;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .post-link:hover {
      color: #0b5ed7;
      text-decoration: underline;
    }

    .post-date {
      font-size: 0.85rem;
      color: #6c757d;
    }

    @media (max-width: 768px) {
      .posts-list {
        grid-template-columns: 1fr;
      }

      .post-item {
        flex-direction: row;
      }

      .post-thumbnail {
        width: 120px;
        height: 120px;
        flex-shrink: 0;
      }

      .post-info {
        justify-content: center;
      }
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

    .blog-post__article-meta {
      background: #f8f9fa;
      border-left: 4px solid #0d6efd;
      padding: 1rem;
      border-radius: 6px;
      margin: 1.5rem 0;
    }

    .article-meta-item {
      font-size: 0.95rem;
      color: #495057;
      margin: 0.5rem 0;
      line-height: 1.5;
    }

    .article-meta-item:first-child {
      margin-top: 0;
    }

    .article-meta-item:last-child {
      margin-bottom: 0;
    }

    .article-meta-item strong {
      color: #212529;
      font-weight: 600;
      margin-right: 0.5rem;
    }
  `,
})
export default class BlogPost implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {
  @ViewChild('contentRef') contentRef?: ElementRef;

  readonly post$ = injectContent<PostAttributes>('slug');
  readonly defaultCoverImage = 'tamil-literature-default.svg';
  
  private allPostsData: any;
  allPosts: any[] = [];

  headings: HeadingLink[] = [];
  relatedPosts: any[] = [];
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
    
    // Filter and sort posts on initialization
    const allPostsData = injectContentFiles<PostAttributes>();
    const isDev = !import.meta.env.PROD;
    const publishedPosts = isDev ? allPostsData : allPostsData.filter(post => !post.attributes.isDraft);
    this.allPosts = publishedPosts.sort((a: any, b: any) => {
      if (a.attributes.isPinned && !b.attributes.isPinned) return -1;
      if (!a.attributes.isPinned && b.attributes.isPinned) return 1;
      return new Date(b.attributes.date || '').getTime() - new Date(a.attributes.date || '').getTime();
    });
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
        this.updateRelatedPosts(post.attributes.relatedPosts);
        // Fetch one extra post to account for filtering out current post in template
        this.recentPosts = this.allPosts.slice(0, paginationConfig.articleRecentPostsCount + 1);
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
      this.initObserver();
      this.setupFootnoteNavigation();
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

  private initObserver() {
    if (!this.isBrowser) return;
    if (!this.contentRef?.nativeElement) return;
    if (this.mutationObserver) return;
    this.mutationObserver = new MutationObserver(() => {
      this.updateContentHeadings();
      this.setupFootnoteNavigation();
    });
    this.mutationObserver.observe(this.contentRef.nativeElement, {
      childList: true,
      subtree: true,
      characterData: true,
    });
  }

  private setupFootnoteNavigation() {
    if (!this.isBrowser) return;

    // Use document to find footnote links since they're rendered inside analog-markdown
    const article = document.querySelector('article.blog-post');
    if (!article) return;

    const handleFootnoteClick = (e: Event) => {
      const link = (e.target as HTMLElement);
      const dataFn = link.getAttribute('data-fn');
      if (dataFn) {
        e.preventDefault();
        e.stopPropagation();
        
        const targetId = dataFn;
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'center' });
          // Get base href from document
          const baseHref = document.querySelector('base')?.getAttribute('href') || '/';
          const basePath = baseHref.endsWith('/') ? baseHref : `${baseHref}/`;
          // Update URL with full path including base href and blog slug
          const fullUrl = `${basePath}blog/${this.currentSlug}#${targetId}`;
          window.history.replaceState(null, '', fullUrl);
        }
      }
    };

    // Use event delegation - attach single listener to article
    article.addEventListener('click', (e: Event) => {
      const target = (e.target as HTMLElement);
      if (target.classList.contains('footnote-ref') || target.classList.contains('footnote-backref')) {
        handleFootnoteClick(e);
      }
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
      (p: any) => p.attributes.slug === this.currentSlug
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

  private updateRelatedPosts(relatedSlugs?: string[]) {
    this.relatedPosts = [];
    if (!relatedSlugs || relatedSlugs.length === 0) {
      return;
    }

    // Maximum 5 related posts
    const slugsToProcess = relatedSlugs.slice(0, 5);
    
    slugsToProcess.forEach(slug => {
      const post = this.allPosts.find((p: any) => p.attributes.slug === slug);
      if (post) {
        this.relatedPosts.push(post);
      }
    });
  }
}

