import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myUiGetTemplate]'
})
export class GetTemplateDirective {

  constructor(public readonly template: TemplateRef<any>) {
  }

}
