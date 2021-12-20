import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/interfaces/users';
import {  map, Observable, forkJoin, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  private _refreshUsers$ = new Subject<void>();
  get refreshUsers$() {
    return this._refreshUsers$;
  }
  singleUser(id: number): Observable<User> {
    return this.http.get<User>(
      `http://logistica.asambleas.cl/api/Users/${id}?userOperation=1`
    );
  }
  Users(rol: number, deleted: boolean): Observable<User[]> {
    return this.http
      .get<User[]>('http://logistica.asambleas.cl/api/Users?userOperation=1')
      .pipe(
        map((i) => i.filter((u) => u.rol.id == rol && u.isDeleted == deleted))
      );
  }
  getUsers() {
    let cliente = this.Users(3, false);
    let cadete = this.Users(2, false);
    let deletedUsers1 = this.Users(2, true);
    let deletedUsers2 = this.Users(3, true);
    return forkJoin([cliente, cadete, deletedUsers1, deletedUsers2]);
  }
}
