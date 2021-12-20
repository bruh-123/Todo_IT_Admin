import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/users';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient) {}

  registrar(user: User) {
    return this.http.post('http://logistica.asambleas.cl/api/Users', user);
  }
}
