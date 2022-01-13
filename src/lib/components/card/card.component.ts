import { Component, ContentChild, OnInit } from '@angular/core';
import { GetTemplateDirective } from '../../directives/get-template.directive';
import { Theming } from '../../helpers/theming.class';

@Component({
  selector: 'my-ui-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent extends Theming implements OnInit {

  @ContentChild(GetTemplateDirective) templateToRender!: GetTemplateDirective;

  constructor() {
    super("card")
  }

  ngOnInit(): void {
  }

}
