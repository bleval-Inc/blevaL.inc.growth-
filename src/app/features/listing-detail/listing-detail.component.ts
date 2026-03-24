import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PropertyService } from '../../core/services/property.service';
import { Property } from '../../core/models/property.model';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-listing-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent],
  template: `
    <main class="page page--detail" *ngIf="property; else loading">
      <section class="detail-hero" [style.background-image]="'linear-gradient(rgba(26,26,46,0.5), rgba(26,26,46,0.5)), url(' + property.image + ')'">
        <div class="detail-hero__content">
          <p class="badge badge--status">{{ property.status === 'sale' ? 'For Sale' : property.status === 'rent' ? 'For Rent' : 'Sold' }}</p>
          <h1>{{ property.title }}</h1>
          <p>{{ property.location }}</p>
          <h2>R{{ property.price | number:'1.0-0' }}</h2>
          <app-button variant="secondary" (click)="bookViewing()">Book Viewing</app-button>
        </div>
      </section>

      <section class="detail-content">
        <div class="grid-2">
          <div>
            <h3>Property Details</h3>
            <p>{{ property.description }}</p>
            <ul class="specs-list">
              <li><strong>Bedrooms:</strong> {{ property.bedrooms }}</li>
              <li><strong>Bathrooms:</strong> {{ property.bathrooms }}</li>
              <li><strong>Area:</strong> {{ property.area }} m²</li>
              <li><strong>Type:</strong> {{ property.type | titlecase }}</li>
              <li><strong>Area:</strong> {{ property.areaCategory }}</li>
            </ul>
          </div>
          <div>
            <h3>Image Gallery</h3>
            <img class="gallery-img" [src]="property.image" [alt]="property.title" />
          </div>
        </div>
      </section>

      <section class="detail-cta">
        <h3>Interested in this property?</h3>
        <p>Connect with our elite sales team and secure a private viewing.</p>
        <app-button variant="primary" (click)="bookViewing()">Book Viewing Now</app-button>
      </section>
    </main>

    <ng-template #loading>
      <div class="loading-state">Loading property details...</div>
    </ng-template>
  `,
  styles: [
    `
      .page--detail { padding: 0; }
      .detail-hero { min-height: 420px; background-size: cover; background-position: center; color: #fff; display: flex; align-items: center; justify-content: center; }
      .detail-hero__content { padding: 3rem 2rem; text-align: center; max-width: 780px; }
      .detail-hero h1 { font-size: clamp(1.8rem, 3vw, 2.6rem); margin: 0.5rem 0; }
      .detail-hero p { margin: 0.25rem 0; opacity: 0.95; }
      .detail-hero h2 { color: #e2b96f; margin: 0.5rem 0 1rem; }
      .detail-content { padding: 3rem 2rem; }
      .specs-list { list-style: none; padding: 0; margin: 1rem 0 0; }
      .specs-list li { margin-bottom: 0.65rem; color: rgba(255,255,255,0.9); }
      .gallery-img { width: 100%; border-radius: 14px; margin-top: 1rem; box-shadow: 0 12px 30px rgba(0,0,0,0.35); }
      .detail-cta { background: rgba(26,26,46,0.95); color: #fff; padding: 2.5rem 2rem; margin-top: -1rem; text-align: center; }
      .detail-cta h3 { margin-bottom: 0.75rem; }
      .loading-state { padding: 4rem; text-align: center; }
    `
  ]
})
export class ListingDetailComponent implements OnInit {
  property?: Property;

  constructor(private route: ActivatedRoute, private propertyService: PropertyService) {}

  ngOnInit() {
    const idParam = Number(this.route.snapshot.paramMap.get('id'));
    this.propertyService.getPropertyById(idParam).subscribe((item) => {
      this.property = item;
      if (!item) {
        // if property not found, redirect to /listings
        setTimeout(() => window.location.assign('/listings'), 1300);
      }
    });
  }

  bookViewing() {
    console.log('Book viewing requested for', this.property?.id);
    alert('Your viewing request has been submitted. We will contact you within 24 hours.');
  }
}
