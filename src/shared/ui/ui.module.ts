import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FormsModule } from '@angular/forms';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TabmenuComponent } from './tabmenu/tabmenu.component';
import { TabDirective } from './tabmenu/tab.directive';
import { InputComponent } from './input/input.component';


const components = [
	ButtonComponent,
	CheckboxComponent,
	DropdownComponent,
	InputComponent,
	TabmenuComponent,
	TabDirective
];

@NgModule({
	declarations: components,
	imports: [
		CommonModule,
		FormsModule
	],
	exports: components
})
export class UiModule { }
