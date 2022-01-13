import { Component, Input, OnInit } from '@angular/core';
import { Theming } from '../../helpers/theming.class';

@Component({
  selector: 'my-ui-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent extends Theming implements OnInit {

  @Input() type: string = "text";
  @Input() placeholder: string = "";
  @Input() label: string = "";

  constructor() {
    super("input");
  }

  ngOnInit(): void {

  }

}
