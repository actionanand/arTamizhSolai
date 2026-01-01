import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { injectContentFiles } from '@analogjs/content';
import { paginationConfig } from '../config/pagination-config';
import { FormatDatePipe } from '../pipes/format-date.pipe';
import PostAttributes from '../post-attributes';

const DEFAULT_COVER_IMAGE = 'tamil-literature-default.svg';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, FormatDatePipe],
  template: `
    <section class="hero">
      <div class="hero__container">
        <div class="murugan-showcase">
          <div class="murugan-circle-bg"></div>
          <div class="tamil-letters-circle">
            <span class="letter" style="--angle: 0deg;">ஓ</span>
            <span class="letter" style="--angle: 45deg;">ம்</span>
            <span class="letter" style="--angle: 90deg;">ச</span>
            <span class="letter" style="--angle: 135deg;">ர</span>
            <span class="letter" style="--angle: 180deg;">வ</span>
            <span class="letter" style="--angle: 225deg;">ண</span>
            <span class="letter" style="--angle: 270deg;">ப</span>
            <span class="letter" style="--angle: 315deg;">வ</span>
          </div>
          <img 
            src="baby-murugan.webp" 
            alt="Lord Murugan" 
            class="murugan-image"
          />
        </div>
        <div class="hero__content">
          <h1 class="hero__title">ஆனந்த் ராஜாவின் தமிழ் சோலை</h1>
          <p class="hero__subtitle">Explore articles, stories, and insights on Tamil culture and technology</p>
          <a routerLink="/blog" class="hero__cta">Read Blog</a>
        </div>
      </div>
    </section>

    <section class="recent-posts">
      <h2>Recent Posts</h2>
      <div class="posts-grid">
        @for (post of recentPosts; track post.attributes.slug) {
        <article class="post-card">
          <img 
            class="post-card__image" 
            [src]="post.attributes.coverImage || defaultCoverImage" 
            [alt]="post.attributes.title"
          />
          <div class="post-card__content">
            @if (post.attributes.isDraft) {
            <div class="post-card__badge">📝 Draft</div>
            }
            @if (post.attributes.isPinned) {
            <div class="post-card__badge">📌 Pinned</div>
            }
            <h3 class="post-card__title">{{ post.attributes.title }}</h3>
            @if (post.attributes.date) {
            <p class="post-card__date">{{ post.attributes.date | formatDate }}</p>
            }
            <p class="post-card__description">{{ post.attributes.description }}</p>
            <a 
              [routerLink]="['/blog', post.attributes.slug]"
              class="post-card__link"
            >
              Read More →
            </a>
          </div>
        </article>
        }
      </div>
      <div class="all-posts-link">
        <a routerLink="/blog" class="btn-link">View All Posts →</a>
      </div>
    </section>
  `,
  styles: `
    @keyframes rotate-circle {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes bounce-murugan {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-20px);
      }
    }

    @keyframes pulse-glow {
      0%, 100% {
        box-shadow: 0 0 20px rgba(76, 175, 80, 0.3), 0 0 40px rgba(76, 175, 80, 0.15);
      }
      50% {
        box-shadow: 0 0 40px rgba(76, 175, 80, 0.5), 0 0 60px rgba(76, 175, 80, 0.3);
      }
    }

    .hero {
      background: linear-gradient(135deg, #0a3d62 0%, #1a5c7a 20%, #2a7f9e 40%, #16a085 70%, #138d75 100%);
      padding: 4rem 2rem;
      border-radius: 15px;
      margin-bottom: 4rem;
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at 80% 20%, rgba(76, 175, 80, 0.15) 0%, transparent 50%);
      pointer-events: none;
      z-index: 0;
    }

    .hero::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at 20% 80%, rgba(76, 175, 80, 0.08) 0%, transparent 50%);
      pointer-events: none;
      z-index: 0;
    }

    .hero__container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 3rem;
      position: relative;
      z-index: 1;
      max-width: 1200px;
      margin: 0 auto;
    }

    .murugan-showcase {
      flex: 0 0 300px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 350px;
    }

    .murugan-circle-bg {
      position: absolute;
      width: 280px;
      height: 280px;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(76, 175, 80, 0.08) 100%);
      border-radius: 50%;
      border: 2px solid rgba(255, 255, 255, 0.2);
      box-shadow: inset 0 0 30px rgba(255, 255, 255, 0.1);
    }

    .tamil-letters-circle {
      position: absolute;
      width: 320px;
      height: 320px;
      animation: rotate-circle 20s linear infinite;
      left: 50%;
      top: 50%;
      margin-left: -160px;
      margin-top: -160px;
    }

    .letter {
      position: absolute;
      width: 40px;
      height: 40px;
      left: 50%;
      top: 50%;
      margin-left: -20px;
      margin-top: -20px;
      transform: rotate(var(--angle)) translateY(-160px) rotateZ(calc(var(--angle) * -1));
      font-size: 1.8rem;
      font-weight: 700;
      color: rgba(255, 255, 255, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .murugan-image {
      width: 220px;
      height: 220px;
      object-fit: contain;
      filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3)) brightness(1.05);
      animation: bounce-murugan 2.5s ease-in-out infinite;
      position: relative;
      z-index: 2;
    }

    .hero__content {
      flex: 1;
      color: white;
      text-align: left;
    }

    .hero__title {
      font-size: 2.8rem;
      font-weight: 800;
      margin: 0 0 1rem 0;
      line-height: 1.3;
      text-shadow: 0 3px 15px rgba(0, 0, 0, 0.5);
      letter-spacing: 0.5px;
      background: linear-gradient(135deg, #ffffff 0%, #e8f5e9 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-family: 'Chenet Classic Tamil', serif;
    }

    .hero__subtitle {
      font-size: 1.15rem;
      margin: 0 0 2rem 0;
      opacity: 0.95;
      line-height: 1.6;
      text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    }

    .hero__cta {
      display: inline-block;
      padding: 0.85rem 2.5rem;
      background-color: #4CAF50;
      color: white;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 700;
      font-size: 1rem;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(76, 175, 80, 0.4);
      border: 2px solid #4CAF50;
    }

    .hero__cta:hover {
      background-color: #45a049;
      border-color: white;
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(76, 175, 80, 0.6);
    }

    .recent-posts {
      margin-bottom: 4rem;
    }

    .recent-posts h2 {
      font-size: 2rem;
      margin-bottom: 2rem;
      text-align: center;
    }

    .posts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .post-card {
      border: 1px solid #e9ecef;
      border-radius: 8px;
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      background-color: #fff;
    }

    .post-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    .post-card__image {
      width: 100%;
      height: 200px;
      object-fit: cover;
      display: block;
    }

    .post-card__content {
      padding: 1.5rem;
    }

    .post-card__title {
      font-size: 1.25rem;
      margin: 0 0 0.5rem 0;
      color: #212529;
      line-height: 1.4;
    }

    .post-card__date {
      font-size: 0.875rem;
      color: #6c757d;
      margin: 0 0 0.75rem 0;
    }

    .post-card__badge {
      display: inline-block;
      background: #fff3cd;
      color: #664d03;
      border: 1px solid #ffecb5;
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 600;
      margin-bottom: 0.75rem;
    }

    .post-card__description {
      color: #495057;
      margin: 0 0 1rem 0;
      line-height: 1.6;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .post-card__link {
      color: #0d6efd;
      text-decoration: none;
      font-weight: 600;
      transition: color 0.3s ease;
    }

    .post-card__link:hover {
      color: #0b5ed7;
    }

    .all-posts-link {
      text-align: center;
    }

    .btn-link {
      display: inline-block;
      padding: 0.75rem 2rem;
      border: 2px solid #0d6efd;
      color: #0d6efd;
      text-decoration: none;
      border-radius: 5px;
      font-weight: 600;
      transition: all 0.3s ease;
    }

    .btn-link:hover {
      background-color: #0d6efd;
      color: white;
    }

    @media (max-width: 768px) {
      .hero {
        padding: 2rem 1rem;
      }

      .hero__container {
        flex-direction: column;
        gap: 1.5rem;
      }

      .murugan-showcase {
        flex: 0 0 auto;
        width: 100%;
        max-width: 280px;
        margin: 0 auto;
        min-height: 280px;
      }

      .murugan-circle-bg {
        width: 200px;
        height: 200px;
      }

      .tamil-letters-circle {
        width: 240px;
        height: 240px;
        margin-left: -120px;
        margin-top: -120px;
        animation: rotate-circle 25s linear infinite;
      }

      .letter {
        font-size: 1.4rem;
        width: 32px;
        height: 32px;
        margin-left: -16px;
        margin-top: -16px;
        transform: rotate(var(--angle)) translateY(-120px) rotateZ(calc(var(--angle) * -1));
      }

      .murugan-image {
        width: 160px;
        height: 160px;
        animation: bounce-murugan 2.5s ease-in-out infinite;
      }

      .hero__content {
        text-align: center;
        width: 100%;
      }

      .hero__title {
        font-size: 1.8rem;
        letter-spacing: 0.3px;
      }

      .hero__subtitle {
        font-size: 0.95rem;
      }

      .posts-grid {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 480px) {
      .hero {
        padding: 1.5rem 1rem;
        margin-bottom: 2rem;
      }

      .murugan-showcase {
        min-height: 250px;
        max-width: 250px;
      }

      .murugan-circle-bg {
        width: 180px;
        height: 180px;
      }

      .tamil-letters-circle {
        width: 220px;
        height: 220px;
        margin-left: -110px;
        margin-top: -110px;
        animation: rotate-circle 28s linear infinite;
      }

      .letter {
        font-size: 1.2rem;
        width: 28px;
        height: 28px;
        margin-left: -14px;
        margin-top: -14px;
        transform: rotate(var(--angle)) translateY(-110px) rotateZ(calc(var(--angle) * -1));
      }

      .murugan-image {
        width: 140px;
        height: 140px;
      }

      .hero__title {
        font-size: 1.4rem;
      }

      .hero__subtitle {
        font-size: 0.85rem;
      }

      .hero__cta {
        padding: 0.7rem 1.8rem;
        font-size: 0.9rem;
      }
    }
  `,
})
export default class HomePage implements OnInit {
  posts = injectContentFiles<PostAttributes>();
  readonly  defaultCoverImage = DEFAULT_COVER_IMAGE;
  recentPosts: typeof this.posts = [];

  ngOnInit() {
    this.loadRecentPosts();
  }

  private loadRecentPosts() {
    // Filter out draft posts in production, show all in development
    const isDev = !import.meta.env.PROD;
    const publishedPosts = isDev ? this.posts : this.posts.filter(post => !post.attributes.isDraft);
    
    // Sort with pinned posts at top, then by date
    const sortedPosts = [...publishedPosts].sort((a, b) => {
      // Pinned posts first
      if (a.attributes.isPinned && !b.attributes.isPinned) return -1;
      if (!a.attributes.isPinned && b.attributes.isPinned) return 1;
      // Then by date (newest first)
      return new Date(b.attributes.date || '').getTime() - new Date(a.attributes.date || '').getTime();
    });

    // Get pinned and non-pinned posts
    const pinnedPosts = sortedPosts.filter(p => p.attributes.isPinned);
    const regularPosts = sortedPosts.filter(p => !p.attributes.isPinned);

    // Combine: pinned posts get priority, but cap total at homeRecentPostsCount (max 3)
    const configCount = paginationConfig.homeRecentPostsCount;
    const maxPinned = Math.min(pinnedPosts.length, configCount);
    const remainingSlots = Math.max(0, configCount - maxPinned);
    this.recentPosts = [...pinnedPosts.slice(0, maxPinned), ...regularPosts.slice(0, remainingSlots)];
  }
}
