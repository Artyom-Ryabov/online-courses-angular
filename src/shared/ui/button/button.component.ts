import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output
} from '@angular/core';
import SimpleControlValueAccessor from 'src/shared/model/control-value-accessor/controlValueAccessor';

@Component({
  selector: 'ui-button',
  template: `
    <button
      [ngClass]="borderStyle"
      [title]="title"
      [disabled]="disabled"
      (click)="click($event)"
    >
      <span>{{ label }}</span>
    </button>
  `,
  styles: [
    `
      button {
        margin: 0;
        padding-block: 0.5em;
        padding-inline: 1em;
        cursor: pointer;
        user-select: none;
      }

      button {
        color: var(--ui-button-text-color);
        background-color: var(--ui-button-bg-color);
        border-width: var(--ui-button-border-width);
        border-style: var(--ui-button-border-style);
        border-color: var(--ui-button-border-color);
      }

      button:is(:disabled, :active) {
        box-shadow: inset 0 0 0 100vmax rgba(0 0 0 / 0.2);
      }

      button:disabled {
        cursor: default;
      }

      button.capsule {
        border-radius: 100vmax;
      }

      button.round {
        border-radius: 0.8em;
      }

      button.square {
        border-radius: 5px;
      }

      button.flat {
        border-radius: 0;
      }
    `
  ],
  styleUrls: ['./button.properties.scss', '../styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent extends SimpleControlValueAccessor<null> {
  @Input() title = '';
  @Input() label = '';
  @Input('border') borderStyle: 'capsule' | 'round' | 'square' | 'flat' = 'square';
  @Input('disabled') set buttonDisable(state: boolean | 'true' | 'false' | '') {
    this.disabled = typeof state === 'boolean' ? state : state === 'true' || state === '';
  }

  @Output() onClick = new EventEmitter();

  click(event: any): void {
    if (this.disabled) {
      return;
    }

    this.onClick.emit(event);
  }
}

