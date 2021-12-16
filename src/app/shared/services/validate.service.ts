import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Loged } from '../interfaces/loged';
import { User } from '../interfaces/users';

@Injectable({
  providedIn: 'root',
})
export class ValidateService {
  private loged!: Loged;
  get logedUser() {
    return { ...this.loged };
  }
  constructor(private http: HttpClient) {}
  login(email: string, password: string): Observable<User> {
    return this.http
      .get<User>(`api/Login?email=${email}&password${password}`)
      .pipe(
        tap((res) => {
          if (res.rol.id == 1) {
            this.loged = {
              id: res.id,
              fullname: res.fullName,
              email: res.email,
              rol: res.rol,
            };
            localStorage.setItem('userLoged', JSON.stringify(this.loged));
          } else {
            throw { error: 'Este sitio es solo para administradores' };
          }
        })
      );
  }
  isLoged(): boolean {
    let currentUser = JSON.parse(localStorage.getItem('userLoged')!);
    return currentUser ? true : false;
  }
}
