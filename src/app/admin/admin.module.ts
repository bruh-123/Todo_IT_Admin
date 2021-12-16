import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MaterialAdminModule } from './material-admin.module';
import { PagesAdminModule } from './pages/pages-admin.module';
import { ComponentsAdminModule } from './components/components-admin.module';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialAdminModule,
    PagesAdminModule,
    ComponentsAdminModule
  ]
})
export class AdminModule { }
