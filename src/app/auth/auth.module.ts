import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { MaterialAuthModule } from './material-auth.module';
import { PagesAuthModule } from './pages/pages-auth.module';
import { ComponentsAuthModule } from './components/components-auth.module';


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialAuthModule,
    PagesAuthModule,
    ComponentsAuthModule,
    
  ]
})
export class AuthModule { }
