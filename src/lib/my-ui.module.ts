import { NgModule } from '@angular/core';
import { MyUiComponent } from './my-ui.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { CommonModule } from '@angular/common';
import { ExpansibleComponent } from './components/expansible/expansible.component';
import { GetTemplateDirective } from './directives/get-template.directive';
import { CardComponent } from './components/card/card.component';
//Testinho
@NgModule({
  declarations: [
    MyUiComponent,
    InputComponent,
    ButtonComponent,
    ExpansibleComponent,
    GetTemplateDirective,
    CardComponent
  ],
  imports: [ 
    CommonModule
  ],
  exports: [
    MyUiComponent,
    InputComponent,
    ButtonComponent,
    ExpansibleComponent,
    GetTemplateDirective,
    CardComponent
  ]
})
export class MyUiModule { }
