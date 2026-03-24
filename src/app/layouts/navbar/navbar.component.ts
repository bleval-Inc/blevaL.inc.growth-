import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="navbar" [class.navbar--sticky]="isSticky">
      <div class="navbar__container">
        <a routerLink="/" class="navbar__brand">
          <span class="navbar__brand-text">Apex Realty Group</span>
        </a>
        <button class="navbar__hamburger" (click)="menuOpen = !menuOpen" aria-label="Toggle navigation menu">
          <span class="navbar__hamburger-line"></span>
          <span class="navbar__hamburger-line"></span>
          <span class="navbar__hamburger-line"></span>
        </button>
        <nav class="navbar__menu" [class.navbar__menu--open]="menuOpen">
          <a routerLink="/" routerLinkActive="navbar__link--active" [routerLinkActiveOptions]="{exact: true}" class="navbar__link" (click)="menuOpen = false">Home</a>
          <a routerLink="/listings" routerLinkActive="navbar__link--active" class="navbar__link" (click)="menuOpen = false">Listings</a>
          <a routerLink="/buy" routerLinkActive="navbar__link--active" class="navbar__link" (click)="menuOpen = false">Buy</a>
          <a routerLink="/sell" routerLinkActive="navbar__link--active" class="navbar__link" (click)="menuOpen = false">Sell</a>
          <a routerLink="/rent" routerLinkActive="navbar__link--active" class="navbar__link" (click)="menuOpen = false">Rent</a>
          <a routerLink="/about" routerLinkActive="navbar__link--active" class="navbar__link" (click)="menuOpen = false">About</a>
          <a routerLink="/blog" routerLinkActive="navbar__link--active" class="navbar__link" (click)="menuOpen = false">Blog</a>
          <a routerLink="/contact" routerLinkActive="navbar__link--active" class="navbar__link" (click)="menuOpen = false">Contact</a>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    .navbar {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: rgba(26, 26, 46, 0.8);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 250ms ease;
    }

    .navbar--sticky {
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    }

    .navbar__container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 70px;
    }

    .navbar__brand {
      display: flex;
      align-items: center;
      z-index: 10;
    }

    .navbar__brand-text {
      font-family: 'Playfair Display', serif;
      font-size: 1.4rem;
      font-weight: 700;
      color: #e2b96f;
      letter-spacing: -0.5px;
    }

    .navbar__menu {
      display: flex;
      gap: 0;
      align-items: center;
      list-style: none;
      margin: 0;
      padding: 0;

      @media (max-width: 767px) {
        position: absolute;
        top: 70px;
        right: 0;
        flex-direction: column;
        background: rgba(20, 20, 38, 0.95);
        border-left: 1px solid rgba(255, 255, 255, 0.1);
        gap: 0;
        width: 100%;
        max-height: 0;
        overflow: hidden;
        transition: max-height 300ms ease;

        &.navbar__menu--open {
          max-height: 400px;
        }
      }
    }

    .navbar__link {
      color: #f5f0e8;
      font-weight: 500;
      padding: 1rem 1.25rem;
      position: relative;
      display: block;
      transition: color 250ms ease;
      border-radius: 0;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: #e2b96f;
        transition: width 350ms ease;
      }

      &:hover::after,
      &.navbar__link--active::after {
        width: 100%;
      }

      @media (max-width: 767px) {
        padding: 0.9rem 1rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);

        &::after {
          display: none;
        }

        &.navbar__link--active {
          background: rgba(226, 185, 111, 0.1);
        }
      }
    }

    .navbar__hamburger {
      display: none;
      border: none;
      background: transparent;
      cursor: pointer;
      padding: 0.5rem;
      z-index: 10;

      @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
    }

    .navbar__hamburger-line {
      width: 24px;
      height: 2px;
      background: #f5f0e8;
      border-radius: 2px;
      transition: all 300ms ease;
    }
  `]
})
export class NavbarComponent {
  menuOpen = false;
  isSticky = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY > 30;
  }

  @HostListener('window:click', ['$event'])
  onWindowClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.navbar')) {
      this.menuOpen = false;
    }
  }
}
