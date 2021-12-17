import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialSharedModule } from '../../shared/material-shared.module';
import { MaterialAdminModule } from '../material-admin.module';
import { RouterModule } from '@angular/router';
import { FormRegistroComponent } from './form-registro/form-registro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsSharedModule } from '../../shared/components/components-shared.module';



@NgModule({
  declarations: [HeaderComponent, FormRegistroComponent],
  imports: [
    CommonModule,
    MaterialSharedModule,
    MaterialAdminModule,
    RouterModule,
    ReactiveFormsModule,ComponentsSharedModule
  ],
  exports: [
    MaterialSharedModule,
    MaterialAdminModule,
    HeaderComponent,
    FormRegistroComponent,
  ],
})
export class ComponentsAdminModule {}
