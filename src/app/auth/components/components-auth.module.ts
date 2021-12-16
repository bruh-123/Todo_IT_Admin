import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLoginComponent } from './form-login/form-login.component';
import { MaterialSharedModule } from '../../shared/material-shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormLoginComponent
  ],
  imports: [
    CommonModule,MaterialSharedModule,ReactiveFormsModule
  ],
  exports:[FormLoginComponent]
})
export class ComponentsAuthModule { }
