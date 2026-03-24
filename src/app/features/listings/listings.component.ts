import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { PropertyCardComponent } from '../../shared/components/property-card/property-card.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { PropertyService } from '../../core/services/property.service';
import { Property } from '../../core/models/property.model';

@Component({
  selector: 'app-listings',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, PropertyCardComponent, ButtonComponent],
  template: `
    <main class="page">
      <section class="hero-light hero-light--listings section-dark">
        <div class="container">
          <h1>Explore Listings</h1>
          <p>Discover luxury homes across Cape Town with curated filters.</p>
        </div>
      </section>

      <section class="filter-bar section-light">
        <div class="container">
          <div class="filter-controls">
            <div class="filter-group">
              <label>Buy / Rent</label>
              <select [formControl]="getControl('type')" class="filter-select">
                <option value="">All</option>
                <option value="buy">Buy</option>
                <option value="rent">Rent</option>
              </select>
            </div>
            <div class="filter-group">
              <label>Price Range</label>
              <select [formControl]="getControl('price')" class="filter-select">
                <option value="">All Prices</option>
                <option value="low">Under R2M</option>
                <option value="mid">R2M - R4M</option>
                <option value="high">R4M+</option>
              </select>
            </div>
            <div class="filter-group">
              <label>Area</label>
              <select [formControl]="getControl('area')" class="filter-select">
                <option value="">All Areas</option>
                <option value="Atlantic Seaboard">Atlantic Seaboard</option>
                <option value="City Bowl">City Bowl</option>
                <option value="Southern Suburbs">Southern Suburbs</option>
                <option value="Northern Suburbs">Northern Suburbs</option>
                <option value="Constantia">Constantia</option>
              </select>
            </div>
            <div class="filter-group">
              <label>Bedrooms</label>
              <select [formControl]="getControl('bedrooms')" class="filter-select">
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>
            <app-button variant="primary" size="large" (click)="applyFilters()">Search Properties</app-button>
          </div>
        </div>
      </section>

      <section class="listings-section section-dark">
        <div class="container">
          <div *ngIf="isLoading" class="listings-grid">
            <div class="listing-skeleton" *ngFor="let i of [1,2,3,4,5,6,7,8,9]"></div>
          </div>

          <div *ngIf="!isLoading && filteredProperties.length === 0" class="empty-state">
            <h2>No Listings Found</h2>
            <p>Try adjusting your filters to find available properties.</p>
          </div>

          <div *ngIf="!isLoading && filteredProperties.length > 0" class="listings-grid">
            <a class="card-link" *ngFor="let prop of filteredProperties" [routerLink]="['/listing', prop.id]">
              <app-property-card [property]="prop"></app-property-card>
            </a>
          </div>
        </div>
      </section>

      <section class="cta-banner section-light">
        <div class="container">
          <h2>Register for new listing alerts</h2>
          <app-button variant="primary">Sign Up</app-button>
        </div>
      </section>
    </main>
  `,
  styles: [
    `
      .page { padding: 0; }
      .hero-light--listings {
        background: linear-gradient(120deg, rgba(26, 26, 46, 0.85), rgba(26, 26, 46, 0.85)), url('https://images.unsplash.com/photo-1560185127-6f7a0656b9a1?auto=format&fit=crop&w=1650&q=80');
        background-size: cover;
        background-position: center;
        color: #fff;
        text-align: center;
        padding: 80px 0;
      }
      .hero-light--listings h1 {
        margin-bottom: 0.5rem;
        font-size: 2.5rem;
        font-family: 'Playfair Display', serif;
      }
      .hero-light--listings p {
        font-size: 1.1rem;
        color: rgba(255, 255, 255, 0.9);
      }
      .filter-bar {
        padding: 40px 0;
        position: sticky;
        top: 0;
        z-index: 10;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      }
      .filter-controls {
        display: flex;
        gap: 16px;
        align-items: flex-end;
        justify-content: center;
        flex-wrap: wrap;
      }
      .filter-group {
        display: flex;
        flex-direction: column;
        min-width: 160px;
      }
      .filter-group label {
        margin-bottom: 8px;
        font-size: 0.9rem;
        font-weight: 500;
        color: #1a1a2e;
      }
      .filter-select {
        padding: 12px 16px;
        border: 1px solid #ddd;
        border-radius: 8px;
        background: white;
        color: #1a1a2e;
        font-family: 'Inter', sans-serif;
        font-size: 1rem;
      }
      .filter-select:focus {
        outline: none;
        border-color: #e2b96f;
        box-shadow: 0 0 0 3px rgba(226, 185, 111, 0.1);
      }
      .listings-section {
        padding: 80px 0;
      }
      .listings-grid {
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      }
      .card-link {
        text-decoration: none;
      }
      .listing-skeleton {
        height: 400px;
        border-radius: 12px;
        background: linear-gradient(90deg, #f0f0f0, #e0e0e0, #f0f0f0);
        animation: shimmer 1.4s ease-in-out infinite;
      }
      .empty-state {
        padding: 3rem;
        text-align: center;
        background: white;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }
      .empty-state h2 {
        color: #1a1a2e;
        font-family: 'Playfair Display', serif;
      }
      .empty-state p {
        color: #666;
      }
      .cta-banner {
        padding: 80px 0;
        text-align: center;
      }
      .cta-banner h2 {
        font-family: 'Playfair Display', serif;
        font-size: 2rem;
        margin-bottom: 2rem;
        color: #1a1a2e;
      }

      @keyframes shimmer {
        0% { background-position: -300px 0; }
        100% { background-position: 300px 0; }
      }

      @media (max-width: 768px) {
        .filter-controls {
          flex-direction: column;
          align-items: stretch;
        }
        .filter-group {
          min-width: auto;
        }
        .listings-grid {
          grid-template-columns: 1fr;
        }
      }
    `
  ]
})
export class ListingsComponent implements OnInit {
  allProperties: Property[] = [];
  filteredProperties: Property[] = [];
  isLoading = true;
  filters: FormGroup;

  constructor(private propertyService: PropertyService, private fb: FormBuilder) {
    this.filters = this.fb.group({
      type: [''],
      price: [''],
      area: [''],
      bedrooms: ['']
    });
  }

  ngOnInit(): void {
    this.propertyService.getProperties().subscribe((properties) => {
      this.allProperties = properties;
      this.filteredProperties = [...properties];
      this.isLoading = false;
    });
  }

  applyFilters(): void {
    const { type, price, area, bedrooms } = this.filters.value;
    this.propertyService
      .filterProperties({
        type: type || undefined,
        price: price || undefined,
        area: area || undefined,
        bedrooms: bedrooms || undefined
      })
      .subscribe((properties) => {
        this.filteredProperties = properties;
      });
  }

  resetFilters(): void {
    this.filters.reset({ type: '', price: '', area: '', sort: 'asc' });
    this.applyFilters();
  }

  getControl(name: string): FormControl {
    return this.filters.get(name) as FormControl;
  }

  openChat(): void {
    window.open('https://wa.me/27615550101?text=Hi%20I%20am%20interested%20in%20a%20custom%20listing', '_blank');
  }
}
