import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats-counter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="stat-card">
      <h3>{{ value }}</h3>
      <p>{{ label }}</p>
    </div>
  `,
  styles: [
    `
      .stat-card {
        background: rgba(255, 255, 255, 0.07);
        border: 1px solid rgba(255, 255, 255, 0.15);
        padding: 1.25rem;
        border-radius: 14px;
        text-align: center;
      }
      h3 {
        margin: 0;
        font-size: 2rem;
        color: #e2b96f;
      }
      p {
        margin: 0.3rem 0 0;
        color: #f5f0e8;
      }
    `
  ]
})
export class StatsCounterComponent {
  @Input() value: string = '0';
  @Input() label: string = 'Metric';
}
