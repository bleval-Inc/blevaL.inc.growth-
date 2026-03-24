import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { FormInputComponent } from '../../shared/components/form-input/form-input.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent, FormInputComponent],
  template: `
    <main class="page">
      <section class="hero-light section-dark">
        <div class="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our luxury real estate experts</p>
        </div>
      </section>

      <section class="contact-section section-light">
        <div class="container">
          <div class="contact-layout">
            <div class="contact-form">
              <h2>Send an Enquiry</h2>
              <form [formGroup]="contactForm" (ngSubmit)="submit()" class="form-area">
                <app-form-input id="name" label="Name" [control]="getControl('name')"></app-form-input>
                <app-form-input id="email" label="Email" type="email" [control]="getControl('email')"></app-form-input>
                <app-form-input id="phone" label="Phone" [control]="getControl('phone')"></app-form-input>
                <div class="form-group">
                  <label for="type">Enquiry Type</label>
                  <select id="type" formControlName="type" class="form-select">
                    <option value="general">General</option>
                    <option value="buy">Buy</option>
                    <option value="sell">Sell</option>
                    <option value="rent">Rent</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea id="message" formControlName="message" rows="4" placeholder="Tell us about your interest..." class="form-textarea" required></textarea>
                </div>
                <app-button type="submit" variant="primary" size="large">Submit Enquiry</app-button>
              </form>
            </div>

            <div class="contact-info">
              <div class="info-card">
                <h3>Office Location</h3>
                <p>Stellenbosch Rd, Cape Town</p>
                <h3>Phone</h3>
                <p>+27 21 555 0101</p>
                <p>+27 82 555 0101</p>
                <h3>Business Hours</h3>
                <p>Mon-Fri: 8:30 – 18:00</p>
                <p>Sat: 9:00 – 14:00</p>
                <a [href]="whatsappLink" target="_blank" class="whatsapp-btn">
                  <app-button variant="primary" size="large">
                    <svg class="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.868 1.172l-.348.174-3.61-.946.974 3.526-.228.36a9.828 9.828 0 00-1.433 5.073c0 5.487 4.531 9.948 10.086 9.948a10.043 10.043 0 007.105-2.933 9.933 9.933 0 002.866-7.005c0-5.55-4.531-10.048-10.086-10.048" />
                    </svg>
                    Chat on WhatsApp
                  </app-button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="map-section section-dark">
        <div class="container">
          <div class="map-container">
            <iframe loading="lazy" width="100%" height="400" allowfullscreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.6219513310497!2d18.423155415212176!3d-33.92486878066882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc67523f303dcf%3A0x19d3b03ef78e8b85!2sCape%20Town!5e0!3m2!1sen!2sza!4v1700000000000!5m2!1sen!2sza"></iframe>
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
      .contact-section, .map-section {
        padding: 80px 0;
      }
      .contact-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: start;
      }
      .contact-form h2 {
        font-family: 'Playfair Display', serif;
        font-size: 2rem;
        margin-bottom: 2rem;
        color: #1a1a2e;
      }
      .form-area {
        display: grid;
        gap: 1.5rem;
        grid-template-columns: 1fr;
      }
      .form-group {
        display: flex;
        flex-direction: column;
      }
      .form-group label {
        margin-bottom: 8px;
        font-weight: 500;
        color: #1a1a2e;
      }
      .form-select {
        padding: 12px 16px;
        border: 1px solid #ddd;
        border-radius: 8px;
        background: white;
        color: #1a1a2e;
        font-family: 'Inter', sans-serif;
        font-size: 1rem;
      }
      .form-textarea {
        width: 100%;
        padding: 12px 16px;
        border: 1px solid #ddd;
        border-radius: 8px;
        background: white;
        color: #1a1a2e;
        font-family: 'Inter', sans-serif;
        font-size: 1rem;
        resize: vertical;
        min-height: 100px;
      }
      .contact-info {
        position: sticky;
        top: 2rem;
      }
      .info-card {
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }
      .info-card h3 {
        font-family: 'Playfair Display', serif;
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
        color: #1a1a2e;
      }
      .info-card p {
        margin-bottom: 1rem;
        color: #666;
      }
      .whatsapp-btn {
        display: block;
        margin-top: 2rem;
        text-decoration: none;
      }
      .map-container {
        background: white;
        padding: 1rem;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        overflow: hidden;
      }
      .map-container iframe {
        border: none;
        border-radius: 8px;
      }

      .whatsapp-icon {
        width: 20px;
        height: 20px;
        display: inline-block;
        margin-right: 8px;
        vertical-align: middle;
      }

      @media (max-width: 768px) {
        .contact-layout {
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        .contact-info {
          position: static;
        }
        .hero-light h1 {
          font-size: 2.5rem;
        }
      }
    `
  ]
})
export class ContactComponent {
  whatsappLink = 'https://wa.me/27615550101?text=Hi%20I%E2%80%99m%20interested%20in%20a%20property';
  contactForm!: import('@angular/forms').FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      type: ['general', Validators.required],
      message: ['', Validators.required]
    });
  }

  submit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    alert('Thank you! We will get back to you shortly.');
    this.contactForm.reset({ type: 'general' });
  }

  getControl(field: string) {
    return this.contactForm.get(field) as import('@angular/forms').FormControl;
  }
}
