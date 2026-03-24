import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TestimonialModel {
  author: string;
  role: string;
  quote: string;
}

@Component({
  selector: 'app-testimonial-carousel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="testimonial" *ngFor="let item of testimonials; let idx = index" [class.active]="idx === active">
      <blockquote>“{{ item.quote }}”</blockquote>
      <p><strong>{{ item.author }}</strong>, {{ item.role }}</p>
    </div>
    <div class="dots">
      <button *ngFor="let _ of testimonials; let i = index" (click)="setActive(i)" [class.current]="i === active"></button>
    </div>
  `,
  styles: [
    `
      .testimonial {
        opacity: 0;
        transform: translateY(12px);
        transition: opacity 0.45s ease, transform 0.45s ease;
        display: none;
      }
      .testimonial.active {
        display: block;
        opacity: 1;
        transform: translateY(0);
      }
      blockquote {
        font-size: 1.1rem;
        line-height: 1.7;
        color: #f5f0e8;
        margin: 0 0 0.75rem;
      }
      .dots {
        display: flex;
        gap: 0.5rem;
        justify-content: center;
        margin-top: 1rem;
      }
      .dots button {
        border: 1px solid rgba(226, 185, 111, 0.8);
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: transparent;
        cursor: pointer;
      }
      .dots button.current {
        background: #e2b96f;
      }
    `
  ]
})
export class TestimonialCarouselComponent {
  @Input() testimonials: TestimonialModel[] = [];
  active = 0;

  constructor() {
    setInterval(() => {
      this.active = (this.active + 1) % this.testimonials.length;
    }, 5200);
  }

  setActive(index: number) {
    this.active = index;
  }
}
