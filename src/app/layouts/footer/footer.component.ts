import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer__grid">
          <div class="footer__col">
            <h3 class="footer__title">Apex Realty Group</h3>
            <p class="footer__desc">Luxury homes in Cape Town. Expert service, curated listings, and private viewings for discerning clients.</p>
            <div class="footer__socials">
              <a href="https://instagram.com" target="_blank" rel="noopener" class="footer__social-link" aria-label="Instagram">Instagram</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener" class="footer__social-link" aria-label="LinkedIn">LinkedIn</a>
              <a href="https://facebook.com" target="_blank" rel="noopener" class="footer__social-link" aria-label="Facebook">Facebook</a>
            </div>
          </div>
          <div class="footer__col">
            <h4 class="footer__col-title">Contact</h4>
            <p class="footer__text"><strong>Phone:</strong></p>
            <p><a href="tel:+27215550101">+27 21 555 0101</a></p>
            <p class="footer__text"><strong>Email:</strong></p>
            <p><a href="mailto:info@apexrealtygroup.co.za">info@apexrealtygroup.co.za</a></p>
          </div>
          <div class="footer__col">
            <h4 class="footer__col-title">Office</h4>
            <p>Stellenbosch Rd<br/>Cape Town, South Africa</p>
          </div>
          <div class="footer__col">
            <h4 class="footer__col-title">Hours</h4>
            <p><strong>Mon-Fri:</strong> 8:30 – 18:00</p>
            <p><strong>Sat:</strong> 9:00 – 14:00</p>
            <p><strong>Sun:</strong> Closed</p>
          </div>
        </div>
        <div class="footer__divider"></div>
        <div class="footer__bottom">
          <p>© {{ currentYear }} Apex Realty Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: #0d0d1a;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding: 4rem 1rem 2rem;
      margin-top: 2rem;
    }

    .footer .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .footer__grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
      margin-bottom: 2rem;

      @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
      }
    }

    .footer__col {
      opacity: 0.95;
    }

    .footer__title {
      font-family: 'Playfair Display', serif;
      font-size: 1.3rem;
      font-weight: 700;
      margin: 0 0 0.75rem 0;
      color: #e2b96f;
    }

    .footer__col-title {
      font-size: 0.95rem;
      font-weight: 700;
      margin: 0 0 0.75rem 0;
      color: #e2b96f;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .footer__desc {
      font-size: 0.9rem;
      line-height: 1.6;
      color: rgba(245, 240, 232, 0.9);
      margin: 0 0 1rem 0;
    }

    .footer__text {
      font-size: 0.9rem;
      margin: 0.5rem 0;
      color: rgba(245, 240, 232, 0.85);
    }

    .footer__socials {
      display: flex;
      gap: 1.5rem;
      margin-top: 1rem;
    }

    .footer__social-link {
      font-size: 0.85rem;
      color: #e2b96f;
      transition: color 250ms ease;

      &:hover {
        color: #f0d794;
      }
    }

    .footer__divider {
      height: 1px;
      background: rgba(255, 255, 255, 0.1);
      margin: 1.5rem 0;
    }

    .footer__bottom {
      text-align: center;
      font-size: 0.85rem;
      color: rgba(245, 240, 232, 0.6);
    }

    a {
      color: #e2b96f;
      transition: color 250ms ease;

      &:hover {
        color: #efe0a0;
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
