import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { ViajesComponent } from './viajes/viajes.component';
import { HistorialComponent } from './historial/historial.component';
import { ListasComponent } from './listas/listas.component';
import { ComponentsAdminModule } from '../components/components-admin.module';



@NgModule({
  declarations: [
    RegistroComponent,
    ViajesComponent,
    HistorialComponent,
    ListasComponent
  ],
  imports: [
    CommonModule,ComponentsAdminModule
  ]
})
export class PagesAdminModule { }
