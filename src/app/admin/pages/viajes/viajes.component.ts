import { Component, OnInit } from '@angular/core';
import { Travel } from 'src/app/shared/interfaces/travels';
import { TravelsService } from '../../../shared/services/travels.service';
import { AlertService } from '../../../shared/services/alert.service';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.scss'],
})
export class ViajesComponent implements OnInit {
  isLoading: boolean = false;
  columnasViajes: string[] = ['cliente', 'direccion', 'estado'];
  viajesActivos!: Travel[];
  viajesPendientes!: Travel[];
  viajesCurso!: Travel[];
  constructor(
    private travelsService: TravelsService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
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
        this.isLoading = false;
      },
      error: (e) => {
        this.isLoading = false;
        this.alertService.failure(e.error);
      },
    });
  }
}
