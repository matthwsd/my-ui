import { animate, AUTO_STYLE, state, style, transition, trigger } from '@angular/animations';
import { Component, ContentChild, OnInit } from '@angular/core';
import { GetTemplateDirective } from '../../directives/get-template.directive';
import { THEMING_ANIMATION_DURATION, Theming } from '../../helpers/theming.class';

@Component({
  selector: 'my-ui-expansible',
  templateUrl: './expansible.component.html',
  styleUrls: ['./expansible.component.scss'],
  animations: [
    trigger("collapse", [
      state('open', style({
        height: AUTO_STYLE,
        visibility: AUTO_STYLE
      })),
      state('close', style({
        height: 0,
        visibility: 'hidden',
        opacity: 0,
        padding: 0

      })),
      transition("open => close", [
        animate(THEMING_ANIMATION_DURATION)
      ]),
      transition("close => open", [
        animate(THEMING_ANIMATION_DURATION)
      ])
    ])
  ]
})
export class ExpansibleComponent extends Theming implements OnInit {

  @ContentChild(GetTemplateDirective) templateToRender!: GetTemplateDirective;

  isOpen: boolean = false;

  constructor() {
    super("expansible")
  }

  ngOnInit(): void {
  }

  changeState(): void {
    this.isOpen = !this.isOpen;
  }

}
