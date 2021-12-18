import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/interfaces/users';
import { UsersService } from '../../services/users.service';
import { AlertService } from '../../../shared/services/alert.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
  isLoading: boolean = false;
  rol: boolean = true;
  columnasLista: string[] = [
    'nombre',
    'direccionUser',
    'telefono',
    'email',
    'vehiculo',
    'actions'
    // 'rol'
  ];
  dataClientes!: User[];
  dataCadetes!: User[];
  constructor(
    private usersService: UsersService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.isLoading = true;
    this.usersService.getUsers().subscribe({
      next: (r) => {
        this.dataClientes = [...r[0]];
        this.dataCadetes = [...r[1]];
        this.isLoading = false;
      },
      error: (e) => {
        this.isLoading = false;
        this.alertService.failure(e.error);
      },
    });
  }
}
