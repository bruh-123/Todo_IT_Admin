import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AlertService } from '../services/alert.service';
import { ValidateService } from '../services/validate.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivateChild {
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
    if (this.validateService.isLoged()) {
      this.alertService.failure('Debes cerrar sesión primero');
      return this.router.navigateByUrl('admin/registro').then(() => false);
    }
    return true;
  }
}
