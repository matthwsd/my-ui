import { Component, Input, OnInit } from '@angular/core';
import { Theming } from '../../helpers/theming.class';
import { MdiIcons } from '../icon/icon.component';

type IconPosition = "start" | "end";
@Component({
  selector: 'my-ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent extends Theming implements OnInit {

  @Input() icon!: MdiIcons;
  @Input() iconPosition: IconPosition = "start"

  constructor() {
    super("button");
  }

  ngOnInit(): void {
  }

}
