import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialAdminModule } from '../material-admin.module';
import { RouterModule } from '@angular/router';
import { FormRegistroComponent } from './form-registro/form-registro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsSharedModule } from '../../shared/components/components-shared.module';
import { TablaComponent } from './tabla/tabla.component';



@NgModule({
  declarations: [HeaderComponent, FormRegistroComponent, TablaComponent],
  imports: [
    CommonModule,
    MaterialAdminModule,
    RouterModule,
    ReactiveFormsModule,
    ComponentsSharedModule,
  ],
  exports: [
    MaterialAdminModule,
    HeaderComponent,
    FormRegistroComponent,
    TablaComponent,
    ComponentsSharedModule
  ],
})
export class ComponentsAdminModule {}
