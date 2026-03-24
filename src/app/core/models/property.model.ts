export type PropertyStatus = 'sale' | 'rent' | 'sold';

export interface Property {
  id: number;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  status: PropertyStatus;
  description: string;
  type: 'buy' | 'rent';
  areaCategory: 'Atlantic Seaboard' | 'City Bowl' | 'Southern Suburbs' | 'Northern Suburbs' | 'Constantia';
}
