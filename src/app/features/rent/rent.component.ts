import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { FormInputComponent } from '../../shared/components/form-input/form-input.component';

@Component({
  selector: 'app-rent',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent, FormInputComponent],
  template: `
    <main class="page">
      <section class="hero section-dark">
        <div class="hero-content">
          <h1>Rent with Confidence</h1>
          <p>Discover premium rental properties in Cape Town's finest locations</p>
        </div>
      </section>

      <section class="section-light">
        <div class="container">
          <h2>The Rental Process</h2>
          <div class="timeline">
            <div class="timeline-card">
              <div class="timeline-number">1</div>
              <h3>Property Search</h3>
              <p>Browse our curated selection of premium rental properties</p>
            </div>
            <div class="timeline-card">
              <div class="timeline-number">2</div>
              <h3>Application Review</h3>
              <p>Quick and thorough tenant screening process</p>
            </div>
            <div class="timeline-card">
              <div class="timeline-number">3</div>
              <h3>Lease Agreement</h3>
              <p>Professional lease preparation and signing</p>
            </div>
            <div class="timeline-card">
              <div class="timeline-number">4</div>
              <h3>Move-In Support</h3>
              <p>Complete move-in assistance and property management</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section-dark">
        <div class="container">
          <h2>Popular Rental Areas</h2>
          <div class="area-grid">
            <div class="area-card">
              <div class="area-image">
                <img src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=250&fit=crop" alt="Sea Point">
              </div>
              <div class="area-content">
                <h3>Sea Point</h3>
                <p>Modern apartments with ocean views and vibrant lifestyle</p>
              </div>
            </div>
            <div class="area-card">
              <div class="area-image">
                <img src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=250&fit=crop" alt="Camps Bay">
              </div>
              <div class="area-content">
                <h3>Camps Bay</h3>
                <p>Luxury beachfront properties and exclusive living</p>
              </div>
            </div>
            <div class="area-card">
              <div class="area-image">
                <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?w=400&h=250&fit=crop" alt="City Bowl">
              </div>
              <div class="area-content">
                <h3>City Bowl</h3>
                <p>Urban convenience with modern amenities and nightlife</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section-light">
        <div class="container">
          <h2>Tenant Application</h2>
          <form [formGroup]="tenantForm" (ngSubmit)="submitTenant()" class="rental-form">
            <div class="form-grid">
              <app-form-input id="tenantName" label="Full Name" [control]="getControl('name', tenantForm)"></app-form-input>
              <app-form-input id="tenantEmail" label="Email Address" type="email" [control]="getControl('email', tenantForm)"></app-form-input>
              <app-form-input id="tenantPhone" label="Phone Number" [control]="getControl('phone', tenantForm)"></app-form-input>
              <app-form-input id="tenantIncome" label="Monthly Income" placeholder="R50,000" [control]="getControl('income', tenantForm)"></app-form-input>
            </div>
            <div class="form-actions">
              <app-button type="submit" variant="primary" size="large">Submit Application</app-button>
            </div>
          </form>
        </div>
      </section>

      <section class="section-dark">
        <div class="container">
          <h2>List Your Property</h2>
          <form [formGroup]="landlordForm" (ngSubmit)="submitLandlord()" class="rental-form">
            <div class="form-grid">
              <app-form-input id="landlordName" label="Full Name" [control]="getControl('name', landlordForm)"></app-form-input>
              <app-form-input id="landlordProperty" label="Property Address" [control]="getControl('property', landlordForm)"></app-form-input>
              <app-form-input id="landlordContact" label="Contact Number" [control]="getControl('contact', landlordForm)"></app-form-input>
              <app-form-input id="landlordEmail" label="Email Address" type="email" [control]="getControl('email', landlordForm)"></app-form-input>
            </div>
            <div class="form-actions">
              <app-button type="submit" variant="secondary" size="large">List Property</app-button>
            </div>
          </form>
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
        background: white;
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
        background-color: slategray;
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

      .rental-form {
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
    `
  ]
})
export class RentComponent {
  tenantForm!: import('@angular/forms').FormGroup;
  landlordForm!: import('@angular/forms').FormGroup;

  constructor(private fb: FormBuilder) {
    this.tenantForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      income: ['', Validators.required]
    });
    this.landlordForm = this.fb.group({
      name: ['', Validators.required],
      property: ['', Validators.required],
      contact: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  submitTenant() {
    if (this.tenantForm.invalid) {
      this.tenantForm.markAllAsTouched();
      return;
    }
    alert('Tenant application submitted!');
    this.tenantForm.reset();
  }

  submitLandlord() {
    if (this.landlordForm.invalid) {
      this.landlordForm.markAllAsTouched();
      return;
    }
    alert('Landlord enquiry sent!');
    this.landlordForm.reset();
  }

  getControl(field: string, form: import('@angular/forms').FormGroup) {
    return form.get(field) as import('@angular/forms').FormControl;
  }
}
