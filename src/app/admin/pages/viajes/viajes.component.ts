import { Component, OnInit } from '@angular/core';
import { Travel } from 'src/app/shared/interfaces/travels';
import { TravelsService } from '../../services/travels.service';
import { AlertService } from '../../../shared/services/alert.service';
import { SortTravel } from '../../utils/sort';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.scss'],
})
export class ViajesComponent implements OnInit {
  isLoading: boolean = false;
  rol: string = 'Activos';
  columnasViajes: string[] = ['cliente', 'direccion', 'estado', 'editEstado'];
  viajesActivos!: Travel[];
  viajesPendientes!: Travel[];
  viajesCurso!: Travel[];
  constructor(
    private travelsService: TravelsService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.travelsService.refreshViajes$.subscribe(() => this.getViajes());
    this.getViajes();
  }
  getViajes() {
    this.isLoading = true;
    this.travelsService.getActivos().subscribe({
      next: (r) => {
        this.viajesActivos = [
          ...r[0],
          ...r[1],
          ...r[2],
          ...r[3],
          ...r[4],
          ...r[5],
          ...r[6],
          ...r[7],
        ];
        this.viajesPendientes = [...r[0], ...r[4]];
        this.viajesCurso = [
          ...r[1],
          ...r[2],
          ...r[3],
          ...r[5],
          ...r[6],
          ...r[7],
        ];
        this.viajesActivos = SortTravel(this.viajesActivos);
        this.viajesPendientes = SortTravel(this.viajesPendientes);
        this.viajesCurso = SortTravel(this.viajesCurso);
        this.isLoading = false;
      },
      error: (e) => {
        this.isLoading = false;
        this.alertService.failure(e.error);
      },
    });
  }
}
