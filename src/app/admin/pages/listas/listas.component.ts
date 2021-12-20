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
  rol: string = 'Clientes';
  columnasLista: string[] = [
    'nombre',
    'direccionUser',
    'telefono',
    'email',
    'vehiculo',
    'editUser',
    'deleteUser',
  ];
  columnasDelete: string[] = [
    'nombre',
    'direccionUser',
    'telefono',
    'email',
    'vehiculo',
    'restoreUser',
  ];
  dataClientes!: User[];
  dataCadetes!: User[];
  dataDeleted!: User[];
  constructor(
    private usersService: UsersService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.usersService.refreshUsers$.subscribe(() => this.getUsers());
    this.getUsers();
  }
  getUsers() {
    console.log('geting Users');

    this.isLoading = true;
    this.usersService.getUsers().subscribe({
      next: (r) => {
        this.dataClientes = [...r[0]];
        this.dataCadetes = [...r[1]];
        this.dataDeleted = [...r[2], ...r[3]];
        this.isLoading = false;
      },
      error: (e) => {
        this.isLoading = false;
        this.alertService.failure(e.error);
      },
    });
  }
}
