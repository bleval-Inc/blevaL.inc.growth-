import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
    <main class="page">
      <section class="hero-light section-dark">
        <div class="container">
          <h1>Market Insights</h1>
          <p>Expert analysis and trends in Cape Town luxury real estate</p>
        </div>
      </section>

      <section class="blog-section section-light">
        <div class="container">
          <div class="blog-grid">
            <article class="blog-card">
              <div class="blog-image">
                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80" alt="2026 Cape Town Market Update" />
              </div>
              <div class="blog-content">
                <h3>2026 Cape Town Market Update</h3>
                <div class="blog-meta">
                  <span>March 15, 2026</span>
                  <span>5 min read</span>
                </div>
                <p>High-end demand is driving premium gains in the Atlantic Seaboard.</p>
                <app-button variant="secondary" size="small">Read More</app-button>
              </div>
            </article>
            <article class="blog-card">
              <div class="blog-image">
                <img src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?auto=format&fit=crop&w=800&q=80" alt="Luxury Buying Guide" />
              </div>
              <div class="blog-content">
                <h3>Luxury Buying Guide</h3>
                <div class="blog-meta">
                  <span>March 10, 2026</span>
                  <span>8 min read</span>
                </div>
                <p>Step-by-step advisory for first-time luxury home buyers.</p>
                <app-button variant="secondary" size="small">Read More</app-button>
              </div>
            </article>
            <article class="blog-card">
              <div class="blog-image">
                <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80" alt="Investment Tips" />
              </div>
              <div class="blog-content">
                <h3>Investment Tips</h3>
                <div class="blog-meta">
                  <span>March 5, 2026</span>
                  <span>6 min read</span>
                </div>
                <p>How to optimize rental yield in prime Cape Town districts.</p>
                <app-button variant="secondary" size="small">Read More</app-button>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="newsletter section-dark">
        <div class="container">
          <div class="newsletter-content">
            <h2>Subscribe for Updates</h2>
            <p>Get direct email alerts for new listings and market reports.</p>
            <form class="newsletter-form">
              <input type="email" placeholder="you@domain.com" class="newsletter-input" />
              <app-button variant="primary">Subscribe</app-button>
            </form>
          </div>
        </div>
      </section>
    </main>
  `,
  styles: [
    `
      .page { padding: 0; }
      .hero-light {
        padding: 80px 0;
        text-align: center;
      }
      .hero-light h1 {
        font-size: 3rem;
        font-family: 'Playfair Display', serif;
        margin-bottom: 1rem;
      }
      .hero-light p {
        font-size: 1.2rem;
        color: rgba(255, 255, 255, 0.9);
      }
      .blog-section, .newsletter {
        padding: 80px 0;
      }
      .blog-grid {
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      }
      .blog-card {
        background: white;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        transition: all 0.3s ease;
      }
      .blog-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
      }
      .blog-card:hover .blog-image img {
        transform: scale(1.05);
      }
      .blog-image {
        overflow: hidden;
        height: 200px;
      }
      .blog-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
      }
      .blog-content {
        padding: 24px;
      }
      .blog-content h3 {
        font-family: 'Playfair Display', serif;
        font-size: 1.3rem;
        margin-bottom: 0.5rem;
        color: #1a1a2e;
        transition: color 0.3s ease;
      }
      .blog-card:hover .blog-content h3 {
        color: #e2b96f;
      }
      .blog-meta {
        display: flex;
        gap: 1rem;
        font-size: 0.9rem;
        color: #666;
        margin-bottom: 1rem;
      }
      .blog-content p {
        color: #666;
        margin-bottom: 1.5rem;
        line-height: 1.5;
      }
      .newsletter-content {
        text-align: center;
        max-width: 600px;
        margin: 0 auto;
      }
      .newsletter h2 {
        font-family: 'Playfair Display', serif;
        font-size: 2rem;
        margin-bottom: 1rem;
        color: #f5f0e8;
      }
      .newsletter p {
        color: rgba(245, 240, 232, 0.9);
        margin-bottom: 2rem;
      }
      .newsletter-form {
        display: flex;
        gap: 1rem;
        max-width: 400px;
        margin: 0 auto;
        flex-wrap: wrap;
      }
      .newsletter-input {
        flex: 1;
        padding: 12px 16px;
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.1);
        color: white;
        font-family: 'Inter', sans-serif;
        min-width: 200px;
      }
      .newsletter-input::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }

      @media (max-width: 768px) {
        .blog-grid {
          grid-template-columns: 1fr;
        }
        .newsletter-form {
          flex-direction: column;
        }
        .newsletter-input {
          min-width: auto;
        }
      }
    `
  ]
})
export class BlogComponent {}
