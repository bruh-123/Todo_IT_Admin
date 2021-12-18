import { Component, OnInit } from '@angular/core';
import { Travel } from '../../../shared/interfaces/travels';
import { AlertService } from '../../../shared/services/alert.service';
import { TravelsService } from '../../services/travels.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit {
  isLoading: boolean = false;
  columnasHistorial: string[] = ['cadete', 'cliente', 'fecha', 'hora', 'estado'];
  viajesHistorial!: Travel[];

  constructor(private alertService: AlertService, private travelsService: TravelsService) { }
  
  ngOnInit(): void {
    this.getViajes()
  }
  getViajes() {
    this.isLoading = true;
    this.travelsService.getViajes(9).subscribe({
      next: (r) => {
        this.viajesHistorial = r;
        this.isLoading = false;
      },
      error: (e) => {
        this.alertService.failure(e.error);
        this.isLoading = false;
      }
    })
    
  }
}
