import { Component, Input, OnInit } from '@angular/core';
import * as mdi from '@mdi/js';

export type MdiIcons = keyof typeof import("@mdi/js");

@Component({
  selector: 'my-ui-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() icon!: MdiIcons;
  SelectedSVG!: string;
  constructor() { }

  ngOnInit(): void {
    this.SelectedSVG = mdi[this.icon];
  }

}
