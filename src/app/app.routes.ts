import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent)
  },
  {
    path: 'listings',
    loadComponent: () => import('./features/listings/listings.component').then((m) => m.ListingsComponent)
  },
  {
    path: 'buy',
    loadComponent: () => import('./features/buy/buy.component').then((m) => m.BuyComponent)
  },
  {
    path: 'sell',
    loadComponent: () => import('./features/sell/sell.component').then((m) => m.SellComponent)
  },
  {
    path: 'rent',
    loadComponent: () => import('./features/rent/rent.component').then((m) => m.RentComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then((m) => m.AboutComponent)
  },
  {
    path: 'blog',
    loadComponent: () => import('./features/blog/blog.component').then((m) => m.BlogComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component').then((m) => m.ContactComponent)
  },
  {
    path: 'listing/:id',
    loadComponent: () => import('./features/listing-detail/listing-detail.component').then((m) => m.ListingDetailComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
