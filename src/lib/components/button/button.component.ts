import { Component, Input, OnInit } from '@angular/core';
import { Theming } from '../../helpers/theming.class';

@Component({
  selector: 'my-ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent extends Theming implements OnInit {

  constructor() {
    super("button");
  }

  ngOnInit(): void {
    console.log(this.getTheming("button"))
  }

}
