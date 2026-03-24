import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { Property } from '../../../core/models/property.model';

@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
    <article class="property-card">
      <div class="property-card__image-wrapper">
        <img loading="lazy" class="property-card__image" [src]="property.image" [alt]="property.title" />
        <span class="property-card__badge">{{ property.status === 'sale' ? 'For Sale' : property.status === 'rent' ? 'For Rent' : 'Sold' }}</span>
      </div>
      <div class="property-card__content">
        <div class="property-card__price" style="color: #e2b96f; font-weight: 600;">R{{ property.price | number:'1.0-0' }}</div>
        <h3 class="property-card__title">{{ property.title }}</h3>
        <p class="property-card__location">📍 {{ property.location }}</p>
        <div class="property-card__specs">
          <span>🛏 {{ property.bedrooms }}</span>
          <span>🛁 {{ property.bathrooms }}</span>
          <span>📐 {{ property.area }} m²</span>
        </div>
        <app-button class="property-card__cta" variant="secondary" size="small">View Details</app-button>
      </div>
    </article>
  `,
  styles: []
})
export class PropertyCardComponent {
  @Input() property!: Property;
}
