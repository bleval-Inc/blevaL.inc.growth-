import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup, FormControl } from '@angular/forms';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { FormInputComponent } from '../../shared/components/form-input/form-input.component';

@Component({
  selector: 'app-sell',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent, FormInputComponent],
  template: `
    <main class="page">
      <section class="hero section-dark">
        <div class="hero-content">
          <h1>Sell Faster. Sell Smarter.</h1>
          <p>Maximize your property's value with our premium selling services</p>
        </div>
      </section>

      <section class="section-light">
        <div class="container">
          <h2>The Selling Process</h2>
          <div class="timeline">
            <div class="timeline-card">
              <div class="timeline-number">1</div>
              <h3>Professional Appraisal</h3>
              <p>Comprehensive market analysis and property valuation by certified experts</p>
            </div>
            <div class="timeline-card">
              <div class="timeline-number">2</div>
              <h3>Premium Marketing</h3>
              <p>High-end photography, virtual tours, and targeted marketing campaigns</p>
            </div>
            <div class="timeline-card">
              <div class="timeline-number">3</div>
              <h3>Elite Viewings</h3>
              <p>Exclusive showings for qualified buyers and professional negotiations</p>
            </div>
            <div class="timeline-card">
              <div class="timeline-number">4</div>
              <h3>Seamless Closing</h3>
              <p>Complete transaction support with our dedicated closing team</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section-dark">
        <div class="container">
          <h2>Market Insights</h2>
          <div class="area-grid">
            <div class="area-card">
              <div class="area-image">
                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop" alt="Cape Town Market">
              </div>
              <div class="area-content">
                <h3>Cape Town Market</h3>
                <p>Strong demand in premium suburbs with average sale time of 45 days</p>
              </div>
            </div>
            <div class="area-card">
              <div class="area-image">
                <img src="https://images.unsplash.com/photo-1576891160550-2173dba999ef?w=400&h=250&fit=crop" alt="Suburban Areas">
              </div>
              <div class="area-content">
                <h3>Suburban Growth</h3>
                <p>Rising property values in family-friendly neighborhoods</p>
              </div>
            </div>
            <div class="area-card">
              <div class="area-image">
                <img src="https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=400&h=250&fit=crop" alt="Luxury Estates">
              </div>
              <div class="area-content">
                <h3>Luxury Estates</h3>
                <p>Premium properties commanding top market prices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section-light">
        <div class="container">
          <h2>Get Your Free Valuation</h2>
          <form [formGroup]="valuationForm" (ngSubmit)="onSubmit()" class="valuation-form">
            <div class="form-grid">
              <app-form-input id="name" label="Full Name" [control]="getControl('name')"></app-form-input>
              <app-form-input id="address" label="Property Address" placeholder="123 Main St, Cape Town" [control]="getControl('address')"></app-form-input>
              <app-form-input id="contact" label="Contact Number" placeholder="+27..." [control]="getControl('contact')"></app-form-input>
              <app-form-input id="email" label="Email Address" placeholder="your@email.com" [control]="getControl('email')"></app-form-input>
            </div>
            <div class="form-actions">
              <app-button type="submit" variant="primary" size="large">Get Free Valuation</app-button>
            </div>
          </form>
          <p *ngIf="statusMessage" class="feedback">{{ statusMessage }}</p>
        </div>
      </section>
    </main>
  `,
  styles: [
    `
      .page {
        min-height: 100vh;
      }

      .hero {
        padding: 6rem 2rem;
        text-align: center;

        .hero-content {
          max-width: 800px;
          margin: 0 auto;

          h1 {
            font-size: 3.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: var(--color-text-light);
          }

          p {
            font-size: 1.25rem;
            color: var(--color-text-light);
            opacity: 0.9;
          }
        }
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 5rem 2rem;

        h2 {
          font-size: 2.5rem;
          font-weight: 600;
          text-align: center;
          margin-bottom: 3rem;
          color: var(--color-text-dark);
        }
      }

      .timeline {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
        margin-top: 3rem;
      }

      .timeline-card {
        background: whitesmoke;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        text-align: center;
        position: relative;
        transition: transform 0.3s ease, box-shadow 0.3s ease;

        &:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }

        .timeline-number {
          width: 50px;
          height: 50px;
          background: var(--color-accent-gold);
         
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0 auto 1.5rem;
        }

        h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--color-text-dark);
        }

        p {
          color: var(--color-text-muted);
          line-height: 1.6;
        }
      }

      .area-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2rem;
        margin-top: 3rem;
      }

      .area-card {
        background: slategray;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        overflow: hidden;
        transition: transform 0.3s ease, box-shadow 0.3s ease;

        &:hover {
          transform: scale(1.02);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }

        .area-image {
          height: 200px;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
          }

          &:hover img {
            transform: scale(1.05);
          }
        }

        .area-content {
          padding: 1.5rem;

          h3 {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: var(--color-text-dark);
          }

          p {
            color: var(--color-text-muted);
            line-height: 1.6;
          }
        }
      }

      .valuation-form {
        max-width: 800px;
        margin: 0 auto;
        // background: white;
        padding: 3rem;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 2rem;

          @media (max-width: 768px) {
            grid-template-columns: 1fr;
          }
        }

        .form-actions {
          text-align: center;
        }
      }

      .feedback {
        text-align: center;
        margin-top: 1.5rem;
        padding: 1rem;
        border-radius: 8px;
        background: #d4edda;
        color: #155724;
        font-weight: 500;
      }
    `
  ]
})
export class SellComponent {
  valuationForm: FormGroup;

  statusMessage = '';

  constructor(private fb: FormBuilder) {
    this.valuationForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      contact: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.valuationForm.invalid) {
      this.valuationForm.markAllAsTouched();
      return;
    }

    const payload = { ...this.valuationForm.value, submittedAt: new Date().toISOString() };
    const webhookUrl = 'https://example-n8n-webhook-url.com/webhook/sell-lead';

    fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then((response) => {
        if (response.ok) {
          this.statusMessage = 'Your request has been submitted. Our agent will contact you shortly.';
          this.valuationForm.reset();
        } else {
          throw new Error('Webhook error');
        }
      })
      .catch(() => {
        this.statusMessage = 'Could not submit at this time. Please try again later.';
      });
  }

  getControl(field: string): FormControl {
    return this.valuationForm.get(field) as FormControl;
  }

  scrollToForm() {
    document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' });
  }
}
