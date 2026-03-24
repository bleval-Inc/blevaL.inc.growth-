import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Property, PropertyStatus } from '../models/property.model';

const MOCK_PROPERTIES: Property[] = [
  {
    id: 1,
    title: 'Clifton Penthouse With Atlantic Views',
    price: 4200000,
    location: 'Clifton, Cape Town',
    bedrooms: 4,
    bathrooms: 3,
    area: 320,
    image: 'https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1200&q=80',
    status: 'sale',
    type: 'buy',
    areaCategory: 'Atlantic Seaboard',
    description: 'Experience exceptional luxury living in this sunlit penthouse with sweeping ocean views, designer finishes and private terraces.'
  },
  {
    id: 2,
    title: 'V&A Waterfront Loft Apartment',
    price: 2600000,
    location: 'V&A Waterfront, Cape Town',
    bedrooms: 2,
    bathrooms: 2,
    area: 180,
    image: 'https://images.unsplash.com/photo-1572120360610-d971b9a9c4f6?auto=format&fit=crop&w=1200&q=80',
    status: 'sale',
    type: 'buy',
    areaCategory: 'City Bowl',
    description: 'Stylish loft apartment in the heart of Waterfront with modern architecture, secure parking and premium amenities.'
  },
  {
    id: 3,
    title: 'Camps Bay Beachfront Retreat',
    price: 3500000,
    location: 'Camps Bay, Cape Town',
    bedrooms: 3,
    bathrooms: 3,
    area: 270,
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
    status: 'sale',
    type: 'buy',
    areaCategory: 'Atlantic Seaboard',
    description: 'Immaculate 3-bedroom property with panoramic sea views, open-plan living and immediate beach access.'
  },
  {
    id: 4,
    title: 'Sea Point Stylish Apartment',
    price: 42000,
    location: 'Sea Point, Cape Town',
    bedrooms: 2,
    bathrooms: 1,
    area: 95,
    image: 'https://images.unsplash.com/photo-1549122728-f519709caa9c?auto=format&fit=crop&w=1200&q=80',
    status: 'rent',
    type: 'rent',
    areaCategory: 'Atlantic Seaboard',
    description: 'Fully furnished apartment with mountain views in a secure building, ideal for premium short-term rental.'
  },
  {
    id: 5,
    title: 'Green Point Executive Condo',
    price: 32000,
    location: 'Green Point, Cape Town',
    bedrooms: 1,
    bathrooms: 1,
    area: 80,
    image: 'https://images.unsplash.com/photo-1596115336417-166705a1cc64?auto=format&fit=crop&w=1200&q=80',
    status: 'rent',
    type: 'rent',
    areaCategory: 'City Bowl',
    description: 'Cosy city apartment, fully equipped kitchen, concierge service and close to the stadium and promenade.'
  },
  {
    id: 6,
    title: 'Constantia Family Villa',
    price: 5200000,
    location: 'Constantia, Cape Town',
    bedrooms: 5,
    bathrooms: 4,
    area: 450,
    image: 'https://images.unsplash.com/photo-1598928506317-35b7d5883a4d?auto=format&fit=crop&w=1200&q=80',
    status: 'sale',
    type: 'buy',
    areaCategory: 'Constantia',
    description: 'Prestigious family home with vineyard views, separate guest suite and endless garden space.'
  },
  {
    id: 7,
    title: 'City Bowl Designer Loft',
    price: 2200000,
    location: 'City Bowl, Cape Town',
    bedrooms: 2,
    bathrooms: 2,
    area: 145,
    image: 'https://images.unsplash.com/photo-1618223275093-20e09c4ff3dc?auto=format&fit=crop&w=1200&q=80',
    status: 'sale',
    type: 'buy',
    areaCategory: 'City Bowl',
    description: 'Minimalist loft near Kloof Street with double-volume ceilings and bespoke cabinetry.'
  },
  {
    id: 8,
    title: 'Northern Suburbs Family House',
    price: 2900000,
    location: 'Northern Suburbs, Cape Town',
    bedrooms: 4,
    bathrooms: 3,
    area: 380,
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80',
    status: 'sale',
    type: 'buy',
    areaCategory: 'Northern Suburbs',
    description: 'Secure garden estate with double garage, pool and separate artisan workshop.'
  },
  {
    id: 9,
    title: 'Southern Suburbs Green Retreat',
    price: 1750000,
    location: 'Southern Suburbs, Cape Town',
    bedrooms: 3,
    bathrooms: 2,
    area: 210,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
    status: 'sale',
    type: 'buy',
    areaCategory: 'Southern Suburbs',
    description: 'Charming property close to top schools and mountain trails, perfect for families seeking lifestyle upgrades.'
  },
  {
    id: 10,
    title: 'Claremont Loft for Rent',
    price: 28500,
    location: 'Claremont, Cape Town',
    bedrooms: 2,
    bathrooms: 2,
    area: 105,
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
    status: 'rent',
    type: 'rent',
    areaCategory: 'Southern Suburbs',
    description: 'Modern loft with easy access to shops, schools and high-quality security for professional couples.'
  },
  {
    id: 11,
    title: 'Sea Point Studio Executive',
    price: 18000,
    location: 'Sea Point, Cape Town',
    bedrooms: 1,
    bathrooms: 1,
    area: 58,
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80',
    status: 'rent',
    type: 'rent',
    areaCategory: 'Atlantic Seaboard',
    description: 'Luxury compact studio walking distance to the beach and prominent restaurants.'
  },
  {
    id: 12,
    title: 'Paarden Eiland Warehouse Conversion',
    price: 1350000,
    location: 'Paarden Eiland, Cape Town',
    bedrooms: 3,
    bathrooms: 2,
    area: 190,
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80',
    status: 'sale',
    type: 'buy',
    areaCategory: 'Northern Suburbs',
    description: 'Trendy industrial conversion with expansive windows, city skyline panorama and creative workspace.'
  }
];

@Injectable({ providedIn: 'root' })
export class PropertyService {
  private properties = MOCK_PROPERTIES;

  getProperties(): Observable<Property[]> {
    return of(this.properties).pipe(delay(500));
  }

  getPropertyById(id: number): Observable<Property | undefined> {
    return this.getProperties().pipe(map((list) => list.find((item) => item.id === id)));
  }

  filterProperties(options: { type?: 'buy' | 'rent'; area?: string; price?: 'low' | 'mid' | 'high'; bedrooms?: string }): Observable<Property[]> {
    return this.getProperties().pipe(
      map((list) => {
        return list
          .filter((property) => (options.type ? property.type === options.type : true))
          .filter((property) => (options.area ? property.areaCategory === options.area : true))
          .filter((property) => {
            if (!options.price) return true;
            if (options.price === 'low') return property.price <= 2000000;
            if (options.price === 'mid') return property.price > 2000000 && property.price <= 4000000;
            return property.price > 4000000;
          })
          .filter((property) => (options.bedrooms ? property.bedrooms >= parseInt(options.bedrooms) : true));
      })
    );
  }
}
