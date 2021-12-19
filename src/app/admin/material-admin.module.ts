import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialSharedModule } from '../shared/material-shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialSharedModule,
    MatToolbarModule,
    MatTabsModule,
    MatTableModule,
  ],
  exports: [
    MaterialSharedModule,
    MatToolbarModule,
    MatTabsModule,
    MatTableModule,
  ],
})
export class MaterialAdminModule {}
