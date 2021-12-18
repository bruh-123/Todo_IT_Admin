import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/interfaces/users';
import { filter, map, Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  User(rol:number): Observable<User[]> {
    return this.http
      .get<User[]>('api/Users?userOperation=1')
      .pipe(map((i) => i.filter((u) => u.rol.id == rol)));
  }
  getUsers() {
    let cliente = this.User(3);
    let cadete = this.User(2);
    return forkJoin([cliente,cadete])
  }
}
