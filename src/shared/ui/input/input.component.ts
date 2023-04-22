import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import SimpleControlValueAccessor from 'src/shared/model/control-value-accessor/controlValueAccessor';

@Component({
  selector: 'ui-input',
  template: `
    <input type="text" [(ngModel)]="value" (ngModelChange)="updateValue($event)" />
  `,
  styles: [
    `
      input[type='text'] {
        border-width: 2px;
        border-style: solid;
        border-color: #efefef;
        border-radius: 5px;
        padding: 0.5em;
      }
    `
  ],
  styleUrls: ['./input.properties.scss', '../styles.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent extends SimpleControlValueAccessor<string> {
  updateValue(event: string): void {
    this.value = event;
    this.onChange(this.value);
    this.onTouched();
  }
}
