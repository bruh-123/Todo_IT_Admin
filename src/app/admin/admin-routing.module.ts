import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ViajesComponent } from './pages/viajes/viajes.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { ListasComponent } from './pages/listas/listas.component';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
import { AdminGuard } from '../shared/guards/admin.guard';

const routes: Routes = [{
  path: '', component: AdminComponent,canActivateChild:[AdminGuard], children: [
    { path: 'registro', component: RegistroComponent },
    { path: 'viajes', component: ViajesComponent },
    { path: 'historial', component: HistorialComponent },
    { path: 'listas', component: ListasComponent },
    { path: '', redirectTo: 'registro',pathMatch:'full' },
    {path:'**',component:NotFoundComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
