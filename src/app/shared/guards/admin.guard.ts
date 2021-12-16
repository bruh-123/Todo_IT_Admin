import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertService } from '../services/alert.service';
import { ValidateService } from '../services/validate.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivateChild {
  constructor(
    private router: Router,
    private validateService: ValidateService,
    private alertService: AlertService
  ) {}
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (!this.validateService.isLoged()) {
      this.alertService.failure('Debes iniciar sesión primero');
      return this.router.navigateByUrl('auth/login').then(() => false);
    }  
    return true;
  }
}
