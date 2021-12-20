import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable, Subject } from 'rxjs';
import { Travel } from '../../shared/interfaces/travels';

@Injectable({
  providedIn: 'root',
})
export class TravelsService {
  constructor(private http: HttpClient) {}
  private _refreshViajes$ = new Subject<void>();
  get refreshViajes$() {
    return this._refreshViajes$;
  }

  getViajes(status: number): Observable<Travel[]> {
    return this.http.get<Travel[]>('/api/Travel/1/' + status);
  }
  getActivos() {
    let activos1 = this.getViajes(1);
    let activos2 = this.getViajes(2);
    let activos3 = this.getViajes(3);
    let activos4 = this.getViajes(4);
    let activos5 = this.getViajes(5);
    let activos6 = this.getViajes(6);
    let activos7 = this.getViajes(7);
    let activos8 = this.getViajes(8);

    return forkJoin([
      activos1,
      activos2,
      activos3,
      activos4,
      activos5,
      activos6,
      activos7,
      activos8,
    ]);
  }
  postViaje(idT: number, newEstado: number, idC: number, obs: string) {
    return this.http.post(
      `api/Travel?travelId=${idT}&statusTravel=${newEstado}&userOperation=1&cadeteId=${idC}&isReasigned=false&observations=${obs}`,
      obs
    );
  }
}
