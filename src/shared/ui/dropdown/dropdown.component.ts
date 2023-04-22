import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  TemplateRef
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import SimpleControlValueAccessor from 'src/shared/model/control-value-accessor/controlValueAccessor';

type ObjOption = Record<string, unknown>;

@Component({
  selector: 'ui-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss', './dropdown.properties.scss', '../styles.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent extends SimpleControlValueAccessor<unknown> {
  @Input('options') items: unknown[] = [];
  @Input('border') borderStyle: 'round' | 'square' | 'flat' = 'square';

  @ContentChild('select') selectTemplate?: TemplateRef<unknown>;
  @ContentChild('option') optionTemplate?: TemplateRef<unknown>;

  @Output() selectChange = new EventEmitter();

  isOpen = false;

  select(value: unknown): void {
    if (this.disabled) {
      return;
    }

    this.value = value;
    this.updateValue();
    this.isOpen = false;
  }

  updateValue(): void {
    this.onChange(this.value);
    this.selectChange.emit(this.value);
    this.onTouched();
  }

  open(): void {
    if (this.disabled) {
      return;
    }

    this.isOpen = !this.isOpen;
  }

  isSelected(value: unknown): boolean {
    return value instanceof Object && this.value instanceof Object
      ? Object.keys(value).every(
          key => (value as ObjOption)[key] === (this.value as ObjOption)[key]
        )
      : value === this.value;
  }
}