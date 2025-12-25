import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { aboutContent } from '../config/about-content.config';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about-page">
      <!-- Language Toggle -->
      <div class="language-toggle">
        <div class="toggle-label">
          <span [class.active]="isTamil()" class="label-tamil">தமிழ்</span>
          <label class="toggle-switch">
            <input type="checkbox" [checked]="!isTamil()" (change)="toggleLanguage()">
            <span class="slider"></span>
          </label>
          <span [class.active]="!isTamil()" class="label-english">English</span>
        </div>
      </div>

      <!-- Tamil Content -->
      @if (isTamil()) {
        <div class="about-content tamil-content">
          <div class="hero-section">
            <h1>ஆசிரியரை பற்றி</h1>
            <p class="tagline">தமிழ் இலக்கியம் மற்றும் சங்க பாடல்களின் ஆழமான உலகத்திற்கு உங்களை வரவேற்கிறோம்</p>
          </div>

          <div class="narrative-wrapper">
            @for (section of aboutContent.tamil.sections; track section.heading; let i = $index) {
              <section class="story-section" [class.contact-section]="section.heading === 'தொடர்புக்கு'">
                <div class="section-content">
                  <h2 class="section-title">{{ section.heading }}</h2>
                  <p class="section-text">{{ section.content }}</p>
                </div>
                @if (!($last)) {
                  <div class="divider"></div>
                }
              </section>
            }
          </div>
        </div>
      }

      <!-- English Content -->
      @if (!isTamil()) {
        <div class="about-content english-content">
          <div class="hero-section">
            <h1>About Author</h1>
            <p class="tagline">Welcome to a journey through Tamil literature and the timeless wisdom of Sangam poetry</p>
          </div>

          <div class="narrative-wrapper">
            @for (section of aboutContent.english.sections; track section.heading; let i = $index) {
              <section class="story-section" [class.contact-section]="section.heading === 'Get in Touch'">
                <div class="section-content">
                  <h2 class="section-title">{{ section.heading }}</h2>
                  <p class="section-text">{{ section.content }}</p>
                </div>
                @if (!($last)) {
                  <div class="divider"></div>
                }
              </section>
            }
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    .about-page {
      min-height: 100vh;
      padding: 4rem 2rem;
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
      position: relative;
      overflow: hidden;
    }

    .about-page::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 15% 40%, rgba(248, 113, 113, 0.08) 0%, transparent 50%),
        radial-gradient(circle at 85% 90%, rgba(96, 165, 250, 0.08) 0%, transparent 50%);
      pointer-events: none;
    }

    .language-toggle {
      display: flex;
      justify-content: center;
      margin-bottom: 4rem;
      position: relative;
      z-index: 10;
    }

    .toggle-label {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      background: rgba(255, 255, 255, 0.97);
      padding: 0.8rem 2.5rem;
      border-radius: 50px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
      backdrop-filter: blur(10px);
    }

    .label-tamil,
    .label-english {
      font-weight: 700;
      font-size: 1.15rem;
      color: #999;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .label-tamil.active,
    .label-english.active {
      color: #f87171;
      font-size: 1.25rem;
      text-shadow: 0 2px 8px rgba(248, 113, 113, 0.3);
    }

    .toggle-switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 32px;
      background-color: #e5e7eb;
      border-radius: 16px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .toggle-switch input {
      display: none;
    }

    .toggle-switch .slider {
      position: absolute;
      top: 3px;
      left: 3px;
      width: 26px;
      height: 26px;
      background-color: white;
      border-radius: 50%;
      transition: left 0.3s ease;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }

    .toggle-switch input:checked + .slider {
      left: 31px;
    }

    input:checked ~ .toggle-switch {
      background-color: #f87171;
    }

    .about-content {
      max-width: 900px;
      margin: 0 auto;
      position: relative;
      z-index: 10;
    }

    .hero-section {
      text-align: center;
      color: white;
      margin-bottom: 5rem;
      animation: slideDown 0.8s ease-out;
    }

    .hero-section h1 {
      font-size: 4.5rem;
      font-weight: 800;
      margin: 0 0 1.5rem 0;
      background: linear-gradient(135deg, #f87171, #fb923c, #fbbf24);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      letter-spacing: -1px;
    }

    .tagline {
      font-size: 1.35rem;
      opacity: 0.92;
      margin: 0;
      font-weight: 400;
      letter-spacing: 0.3px;
      color: rgba(255, 255, 255, 0.95);
    }

    .narrative-wrapper {
      display: flex;
      flex-direction: column;
      gap: 0;
    }

    .story-section {
      padding: 3.5rem 0;
      border-left: 3px solid rgba(248, 113, 113, 0.3);
      padding-left: 3rem;
      position: relative;
      animation: fadeInUp 0.8s ease-out;
    }

    .story-section::before {
      content: '';
      position: absolute;
      left: -9px;
      top: 0;
      width: 15px;
      height: 15px;
      background: linear-gradient(135deg, #f87171, #fb923c);
      border-radius: 50%;
      box-shadow: 0 0 0 4px #0f3460, 0 0 20px rgba(248, 113, 113, 0.4);
    }

    .story-section:first-child {
      padding-top: 0;
      margin-top: -3.5rem;
    }

    .story-section:last-child {
      padding-bottom: 0;
    }

    .section-content {
      animation: contentFadeIn 0.8s ease-out 0.3s both;
    }

    .section-title {
      font-size: 1.8rem;
      font-weight: 700;
      color: #fbbf24;
      margin: 0 0 1.2rem 0;
      letter-spacing: 0.5px;
    }

    .section-text {
      font-size: 1.05rem;
      line-height: 1.85;
      color: rgba(255, 255, 255, 0.88);
      margin: 0;
      font-weight: 300;
    }

    .divider {
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(248, 113, 113, 0.2), transparent);
      margin: 0.5rem 0;
    }

    .contact-section {
      border-left-color: rgba(248, 113, 113, 0.5);
      background: linear-gradient(90deg, rgba(248, 113, 113, 0.05), transparent);
      padding: 3rem 3rem;
      border-radius: 12px;
      margin-top: 2rem;
    }

    .contact-section::before {
      background: linear-gradient(135deg, #f87171, #fbbf24);
      box-shadow: 0 0 0 4px #0f3460, 0 0 30px rgba(248, 113, 113, 0.6);
    }

    .contact-section .section-title {
      color: #f87171;
    }

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-40px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes contentFadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @media (max-width: 768px) {
      .about-page {
        padding: 2.5rem 1.5rem;
      }

      .hero-section h1 {
        font-size: 3rem;
      }

      .tagline {
        font-size: 1.1rem;
      }

      .story-section {
        padding: 2.5rem 0 2.5rem 2rem;
        border-left-width: 2px;
      }

      .story-section::before {
        left: -7.5px;
        width: 12px;
        height: 12px;
      }

      .section-title {
        font-size: 1.5rem;
      }

      .section-text {
        font-size: 1rem;
        line-height: 1.75;
      }

      .contact-section {
        padding: 2.5rem 2rem;
      }

      .toggle-label {
        padding: 0.6rem 1.8rem;
        gap: 1rem;
      }

      .label-tamil,
      .label-english {
        font-size: 1rem;
      }

      .about-content {
        max-width: 100%;
      }
    }

    .tamil-content {
      font-family: 'Noto Sans Tamil', 'Tamil MN', sans-serif;
    }

    .english-content {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
  `]
})
export default class AboutPage {
  isTamil = signal(true);
  aboutContent = aboutContent;

  toggleLanguage() {
    this.isTamil.update(value => !value);
  }
}
