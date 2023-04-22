import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import SimpleControlValueAccessor from 'src/shared/model/control-value-accessor/controlValueAccessor';

@Component({
	selector: 'ui-checkbox',
	template: `
		<label>
			<ng-container *ngIf="!isDefault">
				<ng-container [ngTemplateOutlet]="labelTemplate"></ng-container>
			</ng-container>

			<input
				type="checkbox"
				ngDefaultControl
				[(ngModel)]="value"
				(ngModelChange)="update($event)"
				[disabled]="disabled"
			/>

			<ng-container *ngIf="isDefault">
				<ng-container [ngTemplateOutlet]="labelTemplate"></ng-container>
			</ng-container>

			<ng-template #labelTemplate>
				<span>{{ label }}</span>
			</ng-template>
		</label>
	`,
	styles: [
		`
			:host {
				display: flex;
				width: auto;
			}

			label {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				flex-direction: row;
				flex-wrap: nowrap;
				gap: 0.2em;
				padding: 0.1em;
				width: auto;
				cursor: pointer;
				user-select: none;
			}

			input[type='checkbox'] {
				margin: 0.2em;
				padding: 0;
				cursor: inherit;
			}
		`
	],
	styleUrls: ['../styles.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => CheckboxComponent),
			multi: true
		}
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent extends SimpleControlValueAccessor<boolean> {
	@Input() label = '';
	@Input('labelSide') set labelPosition(side: 'right' | 'left') {
		this.isDefault = side === 'right';
	}

	isDefault = true;

	update(value: boolean): void {
		this.onChange(value);
		this.onTouched();
	}
}

