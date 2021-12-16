import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
import { AuthGuard } from '../shared/guards/auth.guard';

const routes: Routes = [{
  path: '', component: AuthComponent,canActivateChild:[AuthGuard], children: [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {path:'**',component:NotFoundComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
