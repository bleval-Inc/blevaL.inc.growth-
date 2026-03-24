import { Injectable } from '@angular/core';

export interface PropertyImage {
  id: string;
  alt: string;
  url: string;
}

@Injectable({ providedIn: 'root' })
export class ImageService {
  public featuredProperties: PropertyImage[] = [
    {
      id: 'ct1',
      alt: 'Cape Town luxury home exterior',
      url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'ct2',
      alt: 'Modern kitchen with warm lighting',
      url: 'https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'ct3',
      alt: 'Cape Town penthouse living room',
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  public listings: PropertyImage[] = [...this.featuredProperties];

  lookupImage(id: string) {
    return this.featuredProperties.find((img) => img.id === id);
  }
}
