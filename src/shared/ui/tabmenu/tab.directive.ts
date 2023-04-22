import { Directive, Input, TemplateRef, inject } from '@angular/core';

@Directive({
  selector: '[tab]'
})
export class TabDirective {
  @Input() set tab(header: string) {
    this.header = header;
  }

  header!: string;
  
  template = inject(TemplateRef);
}
