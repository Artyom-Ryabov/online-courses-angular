import { ControlValueAccessor } from '@angular/forms';

export default class SimpleControlValueAccessor<T> implements ControlValueAccessor {
	value!: T;
	disabled: boolean = false;

	onChange!: (value: T) => void;
	onTouched!: () => void;

	writeValue(value: T): void {
		this.value = value;
	}

	setDisabledState(isDisabled: boolean): void {
		this.disabled = isDisabled;
	}

	registerOnChange(fn: (value: T) => void): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => void): void {
		this.onTouched = fn;
	}
}
