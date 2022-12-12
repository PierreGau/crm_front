import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './components/ui/ui.component';
import { CoreModule } from '../core/core.module';
import { Ui3Component } from './components/ui3/ui3.component';



@NgModule({
  declarations: [
    UiComponent,
    Ui3Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UiComponent,
    Ui3Component
  ]
})
export class UiModule { }
