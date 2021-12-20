import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { MaterialSharedModule } from '../material-shared.module';
import { DialogComponent } from './dialogs/dialog/dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditStatusComponent } from './dialogs/edit-status/edit-status.component';
import { EstadoPipe } from '../../admin/pipes/estado';
import { DeleteComponent } from './dialogs/delete/delete.component';



@NgModule({
  declarations: [
    NotFoundComponent,
    SpinnerComponent,
    DialogComponent,
    EditStatusComponent,
    EstadoPipe,
    DeleteComponent,
  ],
  imports: [CommonModule, MaterialSharedModule, ReactiveFormsModule],
  exports: [SpinnerComponent, EstadoPipe],
})
export class ComponentsSharedModule {}
