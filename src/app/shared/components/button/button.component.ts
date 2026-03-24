import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      [type]="type" 
      [ngClass]="buttonClasses"
      (click)="onClick($event)"
      [disabled]="disabled">
      <ng-content></ng-content>
    </button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() size: 'default' | 'small' | 'large' = 'default';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;

  get buttonClasses(): string {
    const baseClass = this.variant === 'primary' ? 'btn-primary' : 'btn-secondary';
    const sizeClass = this.size === 'small' ? 'btn-small' : this.size === 'large' ? 'btn-large' : '';
    return `${baseClass} ${sizeClass}`.trim();
  }

  onClick(event: Event) {
    event.stopPropagation();
  }
}
