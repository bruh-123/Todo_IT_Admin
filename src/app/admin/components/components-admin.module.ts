import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialSharedModule } from '../../shared/material-shared.module';
import { MaterialAdminModule } from '../material-admin.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MaterialSharedModule, MaterialAdminModule,RouterModule],
  exports: [MaterialSharedModule, MaterialAdminModule,HeaderComponent],
})
export class ComponentsAdminModule {}
