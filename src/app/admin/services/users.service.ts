import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/interfaces/users';
import { filter, map, Observable, forkJoin, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  private _refreshUsers$ = new Subject<void>();
  get refreshUsers$() {
    return this._refreshUsers$;
  }
  singleUser(id:number):Observable<User> {
    return this.http.get<User>(`api/Users/${id}?userOperation=1`);
  }
  Users(rol: number): Observable<User[]> {
    return this.http
      .get<User[]>('api/Users?userOperation=1')
      .pipe(map((i) => i.filter((u) => u.rol.id == rol)));
  }
  getUsers() {
    let cliente = this.Users(3);
    let cadete = this.Users(2);
    return forkJoin([cliente, cadete]);
  }
}
