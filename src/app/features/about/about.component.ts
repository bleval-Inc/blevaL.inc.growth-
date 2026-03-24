import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { StatsCounterComponent } from '../../shared/components/stats-counter/stats-counter.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ButtonComponent, StatsCounterComponent],
  template: `
    <main class="page">
      <section class="hero hero-dark">
        <div class="hero-overlay"></div>
        <div class="container hero-content">
          <h1>Apex Realty</h1>
          <h2>Cape Town’s strategic leader in luxury real estate</h2>
          <p>Performance-first property advisory built for owners, investors and global private clients.</p>
          <app-button variant="primary" size="large">Book a Private Consultation</app-button>
        </div>
      </section>

      <section class="about-intro section-light">
        <div class="container">
          <div class="intro-grid">
            <article>
              <h3>Proven Market Leadership</h3>
              <p>For over 14 years, Apex Realty has set benchmark pricing across the most premium Cape Town neighborhoods.</p>
            </article>
            <article>
              <h3>Global Network Access</h3>
              <p>Leveraging a global investor syndicate and discrete buyer circle that accelerates competitive offers.</p>
            </article>
            <article>
              <h3>Personalized Growth Strategy</h3>
              <p>Data-driven acquisition plans and legacy portfolio management tailored to each client’s wealth objectives.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="vision section-light">
        <div class="container">
          <h2>Our Vision</h2>
          <div class="vision-box">
            <p>We unite Cape Town lifestyle estates with private capital through a premium, hands-on process that is discreet, disciplined and outcome-focused.</p>
            <ul class="vision-bullets">
              <li>Bespoke property positioning & enhanced listing services (photo, film, staging)</li>
              <li>Concierge-level buyer qualification system with global investor access</li>
              <li>Maximize property value while reducing transaction friction for all parties</li>
            </ul>
            <p class="vision-closing">Our firm's guiding promise: deliver exceptional results.</p>
          </div>

          <div class="pillar-grid">
            <article class="pillar-card">
              <h3>1. Discovery</h3>
              <p>In-depth property & client profiling for accurate target positioning.</p>
            </article>
            <article class="pillar-card">
              <h3>2. Curation</h3>
              <p>Luxury marketing asset creation, tailored buyer outreach, and premium presentation</p>
            </article>
            <article class="pillar-card">
              <h3>3. Exposure</h3>
              <p>Global campaigns across elite networks, private investor circles and premium publications.</p>
            </article>
            <article class="pillar-card">
              <h3>4. Closing</h3>
              <p>White-glove negotiation and transaction coordination from offer through legal, title and handover.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="awards section-dark">
        <div class="container">
          <h2>Awards & Industry Recognition</h2>
          <p class="section-intro-text">Curated excellence is our standard. We are honored leaders in luxury real estate performance.</p>
          <div class="awards-grid-alt">
            <article class="award-card-alt">
              <img src="https://images.unsplash.com/photo-1572365992253-3cb3e56dd362?auto=format&fit=crop&w=300&q=80" alt="Best Luxury Agency 2025" />
              <h4>Best Luxury Agency 2025</h4>
              <p>Premier global accolade for high-end listing capability and client success.</p>
            </article>
            <article class="award-card-alt">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=300&q=80" alt="Top Real Estate Innovator" />
              <h4>Top Real Estate Innovator</h4>
              <p>Recognized for modern buyer experience and market intelligence platforms.</p>
            </article>
            <article class="award-card-alt">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80" alt="Cape Town Elite Seller" />
              <h4>Cape Town Elite Seller</h4>
              <p>Top-rated luxury seller with highest transaction volume on the Atlantic Seaboard.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="team section-light">
        <div class="container">
          <h2>Executive Team</h2>
          <p class="section-intro-text">Built for strategic, confidential collaboration with clients and investment partners.</p>
          <div class="team-grid">
            <article class="team-card">
              <div class="team-image"><img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&q=80" alt="Elena Vos" /></div>
              <h3>Elena Vos</h3>
              <p>Founder & CEO</p>
              <app-button variant="secondary" size="small">Request Call</app-button>
            </article>
            <article class="team-card">
              <div class="team-image"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" alt="James Laher" /></div>
              <h3>James Laher</h3>
              <p>Director, Investment Strategy</p>
              <app-button variant="secondary" size="small">Request Call</app-button>
            </article>
            <article class="team-card">
              <div class="team-image"><img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80" alt="Mia Kroon" /></div>
              <h3>Mia Kroon</h3>
              <p>Director, Client Experience</p>
              <app-button variant="secondary" size="small">Request Call</app-button>
            </article>
          </div>
        </div>
      </section>

      <section class="philosophy section-dark">
        <div class="container">
          <h2>Corporate Philosophy</h2>
          <ul>
            <li>Long-term value creation over transactional volume</li>
            <li>Strategic rigor with design-forward presentation</li>
            <li>Privacy, transparency and compliance in all transactions</li>
          </ul>
        </div>
      </section>

      <section class="stats section-light">
        <div class="container stats-grid">
          <app-stats-counter value="152" label="High-End Sales"></app-stats-counter>
          <app-stats-counter value="980+" label="Satisfied Clients"></app-stats-counter>
          <app-stats-counter value="96%" label="Close Rate"></app-stats-counter>
        </div>
      </section>

      <section class="cta section-dark">
        <div class="container">
          <h2>Start your landmark property journey with Apex</h2>
          <p class="cta-text">Contact us to receive a curated advisory package and exclusive market intelligence report.</p>
          <div class="cta-button-wrapper"><app-button variant="primary" size="large">Schedule Strategy Review</app-button></div>
        </div>
      </section>
    </main>
  `,
  styles: [
    `
      .page { padding: 0; }
      .hero, .hero-light {
        padding: 80px 0;
        text-align: center;
      }
      .hero h1, .hero-light h1 {
        font-size: 3rem;
        font-family: 'Playfair Display', serif;
        margin-bottom: 1rem;
        color: #f5f0e8;
      }
      .hero p, .hero-light p {
        font-size: 1.2rem;
        color: rgba(245, 240, 232, 0.9);
      }
      .vision, .team, .awards, .philosophy, .stats-row, .cta {
        padding: 80px 0;
      }
      .vision h2 {
        font-family: 'Playfair Display', serif;
        font-size: 2.4rem;
        margin-bottom: 1.5rem;
        color: #1a1a2e;
        text-align: center;
      }

      .story p {
        font-size: 1.1rem;
        line-height: 1.6;
        color: #1a1a2e;
        max-width: 830px;
        margin: 0 auto 1rem;
        text-align: center;
      }

      .value-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.25rem;
        margin-top: 2rem;
      }

      .value-card {
        background: white;
        padding: 1.5rem;
        border-radius: 12px;
        box-shadow: 0 6px 22px rgba(0, 0, 0, 0.1);
        text-align: left;
      }

      .value-card h3 {
        font-family: 'Playfair Display', serif;
        font-size: 1.25rem;
        margin-bottom: 0.65rem;
        color: #1a1a2e;
      }

      .value-card p {
        color: #4f5160;
        line-height: 1.6;
      }

      .hero {
        position: relative;
        display: flex;
        align-items: center;
        min-height: 520px;
        color: #f5f0e8;
        background: linear-gradient(135deg, rgba(26,26,46,0.8), rgba(26,26,46,0.85)), url('https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat;
      }
      .hero-overlay {
        position: absolute;
        inset: 0;
        background: rgba(26, 26, 46, 0.55);
      }
      .hero-content {
        position: relative;
        z-index: 1;
        max-width: 1040px;
        margin: 0 auto;
        text-align: center;
        padding: 2rem;
      }
      .hero h1 {
        font-family: 'Playfair Display', serif;
        font-size: clamp(2.75rem, 4vw, 4rem);
        margin-bottom: 0.85rem;
      }
      .hero h2 {
        font-size: clamp(1.45rem, 2vw, 1.8rem);
        margin-bottom: 1rem;
        color: #f1e8dc;
      }
      .hero p {
        font-size: 1.05rem;
        color: rgba(245, 240, 232, 0.95);
        max-width: 780px;
        margin: 0 auto 1.6rem;
      }

      .about-intro .intro-grid,
      .pillar-grid,
      .team-grid,
      .awards-grid-alt,
      .stats-grid {
        display: grid;
        gap: 1.25rem;
      }

      .about-intro .intro-grid {
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      }

      .about-intro article,
      .pillar-card,
      .award-card-alt,
      .team-card,
      .philosophy-card {
        background: white;
        border-radius: 14px;
        box-shadow: 0 10px 30px rgba(9, 14, 29, 0.08);
        border: 1px solid rgba(226, 185, 111, 0.2);
        padding: 1.6rem;
      }

      .about-intro h3,
      .pillar-card h3,
      .award-card-alt h4,
      .team-card h3,
      .philosophy-card h3 {
        font-family: 'Playfair Display', serif;
        margin-bottom: 0.65rem;
        color: #1a1a2e;
      }

      .about-intro p,
      .pillar-card p,
      .award-card-alt p,
      .philosophy-card p,
      .vision p,
      .team p,
      .stats p,
      .cta p {
        color: #505565;
        line-height: 1.6;
      }

      .vision,
      .about-intro,
      .team,
      .philosophy,
      .stats,
      .cta {
        padding: 80px 0;
      }

      .vision h2,
      .team h2,
      .awards h2,
      .philosophy h2,
      .cta h2 {
        font-family: 'Playfair Display', serif;
        font-size: 2.4rem;
        text-align: center;
        margin-bottom: 1rem;
      }

      .vision p {
        max-width: 860px;
        margin: 0 auto 1rem;
        text-align: center;
      }

      .vision-box {
        background: white;
        border: 2px solid rgba(226, 185, 111, 0.5);
        border-radius: 14px;
        padding: 2rem;
        margin-bottom: 2.5rem;
        max-width: 900px;
        margin-left: auto;
        margin-right: auto;
      }

      .vision-box p {
        color: #1a1a2e;
        margin-bottom: 1.25rem;
      }

      .vision-bullets {
        list-style: none;
        padding: 0;
        margin: 0 0 1.25rem 0;
      }

      .vision-bullets li {
        color: #1a1a2e;
        margin-bottom: 0.75rem;
        padding-left: 1.8rem;
        position: relative;
        line-height: 1.6;
      }

      .vision-bullets li::before {
        content: "✓";
        position: absolute;
        left: 0;
        color: #e2b96f;
        font-weight: bold;
      }

      .vision-closing {
        font-style: italic;
        color: #505565;
        margin: 0;
      }

      .section-intro-text {
        text-align: center;
      }

      .cta-text {
        text-align: center;
      }

      .cta-button-wrapper {
        text-align: center;
      }


      .awards-grid-alt {
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      }

      .award-card-alt img {
        width: 100%;
        height: 180px;
        object-fit: cover;
        border-radius: 10px;
        margin-bottom: 1rem;
      }

      .team-grid {
        grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
      }

      .team-card {
        text-align: left;
        min-height: 390px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .team-image img {
        width: 100%;
        height: 210px;
        object-fit: cover;
        border-radius: 10px;
        margin-bottom: 1rem;
      }

      .team-card app-button {
        margin-top: 1rem;
      }

      .philosophy ul {
        list-style: none;
        padding: 0;
        max-width: 760px;
        margin: 0 auto;
        display: grid;
        gap: 0.8rem;
      }

      .philosophy ul li {
        background: #f7f4ed;
        border-radius: 10px;
        padding: 0.95rem 1.2rem;
        border: 1px solid rgba(226, 185, 111, 0.3);
        text-align: center;
        color: #1a1a2e;
      }

      .stats-grid {
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 1rem;
      }

      .cta {
        background: #1a1a2e;
        color: #f5f0e8;
      }

      .cta h2,
      .cta p {
        color: #f5f0e8;
      }

      .cta app-button {
        margin-top: 1rem;
      }

      @media (max-width: 768px) {
        .hero {
          min-height: 420px;
        }

        .about-intro,
        .vision,
        .team,
        .awards,
        .philosophy,
        .stats,
        .cta {
          padding: 60px 0;
        }

        .hero h1 {
          font-size: 2.25rem;
        }

        .hero h2 {
          font-size: 1.2rem;
        }
      }
      .team-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
      }
      .team-card {
        text-align: center;
        position: relative;
      }
      .team-image {
        position: relative;
        overflow: hidden;
        border-radius: 12px;
        margin-bottom: 1rem;
      }
      .team-image img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        transition: transform 0.3s ease;
      }
      .team-overlay {
        position: absolute;
        inset: 0;
        background: rgba(226, 185, 111, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      .team-card:hover .team-overlay {
        opacity: 1;
      }
      .team-card:hover .team-image img {
        transform: scale(1.05);
      }
      .team-card h3 {
        font-family: 'Playfair Display', serif;
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        color: #1a1a2e;
      }
      .team-card p {
        color: #666;
        margin-bottom: 0;
      }

      .awards-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
        margin-top: 1rem;
      }

      .award-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        background: white;
        padding: 1rem 1.2rem;
        border-radius: 12px;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
        color: #1a1a2e;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .award-item:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
      }

      .award-image {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        overflow: hidden;
        flex-shrink: 0;
        border: 2px solid rgba(226, 185, 111, 0.7);
      }

      .award-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .award-item strong {
        display: block;
        font-family: 'Playfair Display', serif;
        font-size: 1rem;
        margin-bottom: 0.2rem;
      }

      .award-item p {
        margin: 0;
        color: #505565;
        font-size: 0.95rem;
      }
      .mission-quote {
        font-family: 'Playfair Display', serif;
        font-size: 1.8rem;
        font-style: italic;
        text-align: center;
        color: #f5f0e8;
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
        border-left: 4px solid #e2b96f;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 8px;
      }
      .stats-row {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem;
      }

      @media (max-width: 768px) {
        .team-grid {
          grid-template-columns: 1fr;
        }
        .awards-list {
          flex-direction: column;
          align-items: center;
        }
        .mission-quote {
          font-size: 1.4rem;
          padding: 1.5rem;
        }
      }
    `
  ]
})
export class AboutComponent {}
