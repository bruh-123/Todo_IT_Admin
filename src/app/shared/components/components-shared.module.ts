import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { MaterialSharedModule } from '../material-shared.module';
import { DialogComponent } from './dialogs/dialog/dialog.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [NotFoundComponent, SpinnerComponent, DialogComponent],
  imports: [CommonModule, MaterialSharedModule,ReactiveFormsModule],
  exports: [ SpinnerComponent],
})
export class ComponentsSharedModule {}
