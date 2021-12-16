import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsSharedModule } from './components/components-shared.module';
import { MaterialSharedModule } from './material-shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsSharedModule,
    MaterialSharedModule
  ]
})
export class SharedModule { }
