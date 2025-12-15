import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { injectContentFiles } from '@analogjs/content';
import PostAttributes from '../post-attributes';

const DEFAULT_COVER_IMAGE = '/tamil-literature-default.svg';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero">
      <h1 class="hero__title">Welcome to தமிழ் சோலை</h1>
      <p class="hero__subtitle">Explore articles, stories, and insights</p>
      <a routerLink="/blog" class="hero__cta">Read Blog</a>
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
            <h3 class="post-card__title">{{ post.attributes.title }}</h3>
            @if (post.attributes.date) {
            <p class="post-card__date">{{ post.attributes.date }}</p>
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
    .hero {
      text-align: center;
      padding: 4rem 2rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-radius: 10px;
      margin-bottom: 4rem;
    }

    .hero__title {
      font-size: 3rem;
      font-weight: 700;
      margin: 0 0 1rem 0;
      line-height: 1.2;
    }

    .hero__subtitle {
      font-size: 1.25rem;
      margin: 0 0 2rem 0;
      opacity: 0.9;
    }

    .hero__cta {
      display: inline-block;
      padding: 0.75rem 2rem;
      background-color: white;
      color: #667eea;
      text-decoration: none;
      border-radius: 5px;
      font-weight: 600;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .hero__cta:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
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

      .hero__title {
        font-size: 2rem;
      }

      .hero__subtitle {
        font-size: 1rem;
      }

      .posts-grid {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export default class HomePage implements OnInit {
  posts = injectContentFiles<PostAttributes>();
  readonly  defaultCoverImage = DEFAULT_COVER_IMAGE;
  recentPosts: typeof this.posts = [];

  ngOnInit() {
    this.recentPosts = this.posts.slice(0, 3);
  }
}
