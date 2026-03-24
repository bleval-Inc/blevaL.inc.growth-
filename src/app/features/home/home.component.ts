import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { PropertyCardComponent } from '../../shared/components/property-card/property-card.component';
import { Property } from '../../core/models/property.model';
import { StatsCounterComponent } from '../../shared/components/stats-counter/stats-counter.component';
import { TestimonialCarouselComponent, TestimonialModel } from '../../shared/components/testimonial/testimonial.component';
import { FormInputComponent } from '../../shared/components/form-input/form-input.component';
import { ImageService } from '../../core/services/image.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, ButtonComponent, PropertyCardComponent, StatsCounterComponent, TestimonialCarouselComponent, FormInputComponent],
  template: `
    <main class="home-page">
      <section class="hero section-dark">
        <div class="hero-inner">
          <h1>Find Your Perfect Property in Cape Town</h1>
          <p>Exclusive listings, award-winning service, and tailored investment insights.</p>
          
          <!-- Search Bar -->
          <div class="search-bar">
            <div class="search-filters">
              <select class="search-select">
                <option value="buy">Buy</option>
                <option value="rent">Rent</option>
              </select>
              <select class="search-select">
                <option value="">Area</option>
                <option value="cape-town">Cape Town</option>
                <option value="claremont">Claremont</option>
                <option value="sea-point">Sea Point</option>
              </select>
              <select class="search-select">
                <option value="">Price Range</option>
                <option value="0-1000000">Under R1M</option>
                <option value="1000000-5000000">R1M - R5M</option>
                <option value="5000000+">R5M+</option>
              </select>
            </div>
            <app-button variant="primary" size="large">Search Properties</app-button>
          </div>

          <div class="actions">
            <a routerLink="/listings"><app-button variant="secondary">View All Listings</app-button></a>
          </div>
        </div>
      </section>

      <section class="stats-row section-light">
        <app-stats-counter value="152" label="Properties Sold"></app-stats-counter>
        <app-stats-counter value="14" label="Years Experience"></app-stats-counter>
        <app-stats-counter value="980+" label="Happy Clients"></app-stats-counter>
      </section>

      <section class="featured section-dark">
        <div class="container">
          <h2>Featured Listings</h2>
          <div class="grid">
            <a *ngFor="let property of featuredProperties" [routerLink]="['/listing', property.id]" class="property-link">
              <app-property-card [property]="property"></app-property-card>
            </a>
          </div>
        </div>
      </section>

      <section class="why-choose section-light">
        <div class="container">
          <h2>Why Choose Apex</h2>
          <div class="grid-icon">
            <div class="card">
              <strong>Curated Portfolio</strong>
              <p>Access top Cape Town estates handpicked for quality and value.</p>
            </div>
            <div class="card">
              <strong>Market Expertise</strong>
              <p>Local insights that deliver smart timing and premium returns.</p>
            </div>
            <div class="card">
              <strong>Luxury Experience</strong>
              <p>White-glove service from first contact to closing.</p>
            </div>
            <div class="card">
              <strong>Trust & Privacy</strong>
              <p>High-net-worth confidentiality aligned with boutique standards.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="testimonials section-dark">
        <div class="container">
          <h2>What Clients Say</h2>
          <app-testimonial-carousel [testimonials]="testimonials"></app-testimonial-carousel>
        </div>
      </section>

      <section class="lead-capture section-light">
        <div class="container">
          <h2>Get Free Property Valuation</h2>
          <form [formGroup]="valuationForm" (ngSubmit)="submitValuation()" class="form-grid">
            <app-form-input id="name" label="Name" placeholder="Your Name" [control]="getControl('name')"></app-form-input>
            <app-form-input id="email" label="Email" placeholder="you@domain.com" type="email" [control]="getControl('email')"></app-form-input>
            <app-form-input id="phone" label="Phone" placeholder="+27..." [control]="getControl('phone')"></app-form-input>
            <app-button type="submit" variant="primary">Request Valuation</app-button>
          </form>
          <p class="note" *ngIf="submitted">Thanks! We'll reach out within 24 hours.</p>
        </div>
      </section>
    </main>
  `,
  styles: [
    `
      .hero {
        min-height: 86vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: url('https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1800&q=80') center/cover no-repeat;
        color: #ffffff;
        text-align: center;
        position: relative;
      }
      .hero::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(26, 26, 46, 0.65), rgba(26, 26, 46, 0.85));
      }
      .hero-inner {
        position: relative;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 24px;
        z-index: 2;
      }
      .hero h1 {
        font-family: 'Playfair Display', serif;
        font-size: clamp(2.2rem, 5vw, 4rem);
        margin: 0 0 1rem;
      }
      .hero p {
        font-size: 1.25rem;
        margin: 0 0 2rem;
      }
      .search-bar {
        display: flex;
        gap: 16px;
        justify-content: center;
        align-items: center;
        margin-bottom: 2rem;
        flex-wrap: wrap;
      }
      .search-filters {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
      }
      .search-select {
        padding: 12px 16px;
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.1);
        color: white;
        font-family: 'Inter', sans-serif;
        font-size: 1rem;
        min-width: 140px;
      }
      .search-select:focus {
        outline: none;
        border-color: #e2b96f;
        background: rgba(255, 255, 255, 0.2);
      }
      .actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
      }
      .stats-row {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        gap: 1rem;
        padding: 40px 24px;
      }
      .featured, .why-choose, .testimonials, .lead-capture {
        padding: 80px 0;
      }
      .featured h2, .why-choose h2, .testimonials h2, .lead-capture h2 {
        margin-bottom: 2rem;
        font-family: 'Playfair Display', serif;
        font-size: 2.5rem;
        text-align: center;
      }
      .featured .grid, .why-choose .grid-icon {
        display: grid;
        gap: 2rem;
        margin-top: 2rem;
      }
      .featured .grid {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      }
      .why-choose .grid-icon {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      }
      .why-choose .card {
        background: white;
        border-radius: 12px;
        padding: 24px;
        text-align: center;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
      }
      .why-choose .card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
      }
      .why-choose strong {
        display: block;
        font-family: 'Playfair Display', serif;
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
        color: #1a1a2e;
      }
      .why-choose p {
        margin: 0;
        color: #666;
      }
      .testimonials {
        background: rgba(255, 255, 255, 0.03);
        border-radius: 14px;
        padding: 2rem;
      }
      .lead-capture .form-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1rem;
        max-width: 600px;
        margin: 0 auto;
      }
      .note {
        text-align: center;
        margin-top: 1rem;
        color: #666;
      }

      @media (max-width: 768px) {
        .search-bar {
          flex-direction: column;
          align-items: stretch;
        }
        .search-filters {
          justify-content: center;
        }
        .featured .grid {
          grid-template-columns: 1fr;
        }
        .why-choose .grid-icon {
          grid-template-columns: 1fr;
        }
        .lead-capture .form-grid {
          grid-template-columns: 1fr;
        }
      }
    `
  ]
})
export class HomeComponent {
  featuredProperties: Property[];
  testimonials: TestimonialModel[] = [
    { author: 'Ava M.', role: 'Investor', quote: 'Apex guided us to a high-return property with unmatched professionalism.' },
    { author: 'Daniel S.', role: 'Buyer', quote: 'Our dream waterfront home came true in under 30 days.' },
    { author: 'Maya K.', role: 'Professional', quote: 'Trusted advice and excellent ACL; this agency delivers luxury results every time.' }
  ];
  valuationForm!: import('@angular/forms').FormGroup;
  submitted = false;

  constructor(private imageService: ImageService, private fb: FormBuilder) {
    this.valuationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
    this.featuredProperties = [
      { id: 1, title: 'Clifton Cove Estate', location: 'Clifton, Cape Town', price: 24800000, bedrooms: 4, bathrooms: 5, area: 380, image: this.imageService.featuredProperties[0].url, status: 'sale', type: 'buy', areaCategory: 'Atlantic Seaboard', description: 'Panoramic ocean views from this exquisite Clifton estate.' },
      { id: 2, title: 'V&A Waterfront Loft', location: 'V&A, Cape Town', price: 16250000, bedrooms: 3, bathrooms: 3, area: 225, image: this.imageService.featuredProperties[1].url, status: 'sale', type: 'buy', areaCategory: 'City Bowl', description: 'Exclusive loft with direct access to harbourside attractions.' },
      { id: 3, title: 'Bishops Court Retreat', location: 'Bishops Court', price: 32700000, bedrooms: 5, bathrooms: 6, area: 620, image: this.imageService.featuredProperties[2].url, status: 'sale', type: 'buy', areaCategory: 'Southern Suburbs', description: 'Prestigious residence in one of Cape Town’s most coveted neighbourhoods.' }
    ];
  }

  submitValuation() {
    if (this.valuationForm.invalid) {
      this.valuationForm.markAllAsTouched();
      return;
    }
    this.submitted = true;
    this.valuationForm.reset();
  }

  getControl(field: string) {
    return this.valuationForm.get(field) as import('@angular/forms').FormControl;
  }
}
