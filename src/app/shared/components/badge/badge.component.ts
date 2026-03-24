import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="badge" [ngClass]="variantClass">{{ label }}</span>
  `,
  styles: [`
    .badge {
      display: inline-block;
      padding: 0.4rem 0.85rem;
      border-radius: 999px;
      font-size: 0.75rem;
      letter-spacing: 0.05em;
      font-weight: 700;
      text-transform: uppercase;
      border: 1px solid rgba(226, 185, 111, 0.7);
      background: #e2b96f;
      color: #1a1a2e;
    }

    .badge--sold {
      background: rgba(255, 255, 255, 0.2);
      color: #f5f0e8;
      border-color: rgba(255, 255, 255, 0.4);
    }
  `]
})
export class BadgeComponent {
  @Input() label = 'Status';
  @Input() variant: 'sale' | 'sold' = 'sale';

  get variantClass(): string {
    return this.variant === 'sold' ? 'badge--sold' : '';
  }
}
