import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { FormInputComponent } from '../../shared/components/form-input/form-input.component';

@Component({
  selector: 'app-buy',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent, FormInputComponent],
  template: `
    <main class="page">
      <section class="hero-light section-dark">
        <div class="container">
          <h1>Find Your Dream Home</h1>
          <p>Personalized buying journey for affluent professionals and investors.</p>
        </div>
      </section>

      <section class="timeline section-light">
        <div class="container">
          <h2>Buying Journey</h2>
          <div class="timeline-grid">
            <div class="timeline-item">
              <div class="timeline-number">1</div>
              <h3>Discovery</h3>
              <p>Define requirements and preferred neighborhoods.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-number">2</div>
              <h3>Shortlisting</h3>
              <p>Curated luxury selections tailored to your goals.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-number">3</div>
              <h3>Viewings</h3>
              <p>Private inspections with expert insights.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-number">4</div>
              <h3>Offer & Purchase</h3>
              <p>End-to-end negotiation and contract support.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="area-guides section-dark">
        <div class="container">
          <h2>Area Guides</h2>
          <div class="grid-area">
            <article class="area-card">
              <div class="area-image">
                <img src="https://images.unsplash.com/photo-1570129477492-45a003537e1f?auto=format&fit=crop&w=800&q=80" alt="Clifton" />
              </div>
              <h3>Clifton</h3>
              <p>World-class beaches with secluded private estates.</p>
            </article>
            <article class="area-card">
              <div class="area-image">
                <img src="https://images.unsplash.com/photo-1613977257363-0fa9e8000bc7?auto=format&fit=crop&w=800&q=80" alt="Constantia" />
              </div>
              <h3>Constantia</h3>
              <p>Vineyards, gated communities and family-focused elegance.</p>
            </article>
            <article class="area-card">
              <div class="area-image">
                <img src="https://images.unsplash.com/photo-1536738749571-8d33b6ecbed4?auto=format&fit=crop&w=800&q=80" alt="Camps Bay" />
              </div>
              <h3>Camps Bay</h3>
              <p>Sunset vistas with cosmopolitan living.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="consult-form section-light">
        <div class="container">
          <h2>Book a Consultation</h2>
          <form [formGroup]="consultForm" (ngSubmit)="submitConsult()" class="form-area">
            <app-form-input id="name" label="Name" [control]="getControl('name')"></app-form-input>
            <app-form-input id="email" label="Email" type="email" [control]="getControl('email')"></app-form-input>
            <app-form-input id="phone" label="Phone" [control]="getControl('phone')"></app-form-input>
            <app-form-input id="budget" label="Budget" [control]="getControl('budget')"></app-form-input>
            <app-button type="submit" variant="primary" size="large">Request Consultation</app-button>
          </form>
          <p *ngIf="submitted" class="success">Thank you! Your request is submitted and we'll contact you within 24 hours.</p>
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
      .timeline, .area-guides, .consult-form {
        padding: 80px 0;
      }
      .timeline h2, .area-guides h2, .consult-form h2 {
        font-family: 'Playfair Display', serif;
        font-size: 2.5rem;
        text-align: center;
        margin-bottom: 3rem;
      }
      .timeline-grid {
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      }
      .timeline-item {
        background: white;
        border-radius: 12px;
        padding: 2rem;
        text-align: center;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        position: relative;
      }
      .timeline-item::before {
        content: '';
        position: absolute;
        top: 2rem;
        left: -1rem;
        width: 0;
        height: 0;
        border-left: 1rem solid #e2b96f;
        border-top: 1rem solid transparent;
        border-bottom: 1rem solid transparent;
      }
      .timeline-number {
        display: inline-flex;
        width: 50px;
        height: 50px;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: #e2b96f;
        color: #1a1a2e;
        margin-bottom: 1rem;
        font-weight: 700;
        font-size: 1.2rem;
      }
      .timeline-item h3 {
        font-family: 'Playfair Display', serif;
        font-size: 1.3rem;
        margin-bottom: 0.5rem;
        color: #1a1a2e;
      }
      .timeline-item p {
        color: #666;
        margin: 0;
      }
      .grid-area {
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      }
      .area-card {
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
      }
      .area-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
      }
      .area-image {
        height: 200px;
        overflow: hidden;
      }
      .area-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
      }
      .area-card:hover .area-image img {
        transform: scale(1.05);
      }
      .area-card h3 {
        font-family: 'Playfair Display', serif;
        font-size: 1.3rem;
        margin: 1rem 1.5rem 0.5rem;
        color: #1a1a2e;
      }
      .area-card p {
        margin: 0 1.5rem 1.5rem;
        color: #666;
      }
      .form-area {
        display: grid;
        gap: 1.5rem;
        grid-template-columns: 1fr;
        max-width: 500px;
        margin: 0 auto;
      }
      .success {
        text-align: center;
        margin-top: 1rem;
        color: #4CAF50;
        font-weight: 500;
      }

      @media (max-width: 768px) {
        .timeline-grid {
          grid-template-columns: 1fr;
        }
        .timeline-item::before {
          display: none;
        }
        .grid-area {
          grid-template-columns: 1fr;
        }
      }
    `
  ]
})
export class BuyComponent {
  consultForm: import('@angular/forms').FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.consultForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      budget: ['', Validators.required]
    });
  }

  submitConsult() {
    if (this.consultForm.invalid) {
      this.consultForm.markAllAsTouched();
      return;
    }

    console.log('Buy consultation', this.consultForm.value);
    this.submitted = true;
    setTimeout(() => {
      this.submitted = false;
      this.consultForm.reset();
    }, 3000);
  }

  getControl(controlName: string): import('@angular/forms').FormControl {
    return this.consultForm.get(controlName) as import('@angular/forms').FormControl;
  }
}

