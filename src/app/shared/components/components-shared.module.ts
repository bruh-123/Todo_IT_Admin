import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { MaterialSharedModule } from '../material-shared.module';



@NgModule({
  declarations: [NotFoundComponent, SpinnerComponent],
  imports: [CommonModule, MaterialSharedModule],
  exports: [ SpinnerComponent],
})
export class ComponentsSharedModule {}
