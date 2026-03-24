import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="form-field">
      <label [for]="id">{{ label }}</label>
      <input
        [id]="id"
        [type]="type"
        [placeholder]="placeholder"
        [formControl]="control"
        [attr.autocomplete]="autocomplete"
      />
      <small class="error" *ngIf="control.invalid && (control.dirty || control.touched)">
        {{ getError() }}
      </small>
    </div>
  `,
  styles: [
    `
      .form-field {
        display: flex;
        flex-direction: column;
        gap: 0.45rem;
      }
      label {
        color: rgba(245, 240, 232, 0.9);
        font-size: 0.9rem;
      }
      input {
        padding: 0.8rem 1rem;
        font-size: 1rem;
        border-radius: 8px;
        border: 1px solid rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.08);
        color: #f5f0e8;
      }
      input:focus {
        outline: 2px solid rgba(226, 185, 111, 0.9);
      }
      .error {
        color: #ffe5c2;
        font-size: 0.8rem;
      }
    `
  ]
})
export class FormInputComponent {
  @Input() id = 'input';
  @Input() label = 'Field';
  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() autocomplete = 'off';
  @Input() control: FormControl<string | null> = new FormControl('');

  getError() {
    const c = this.control;
    if (!c.errors) {
      return '';
    }
    if (c.hasError('required')) {
      return 'This field is required.';
    }
    if (c.hasError('email')) {
      return 'Enter a valid email.';
    }
    return 'Invalid value.';
  }
}
