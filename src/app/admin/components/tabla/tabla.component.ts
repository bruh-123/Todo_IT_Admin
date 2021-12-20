import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, filter } from 'rxjs';
import { Travel } from '../../../shared/interfaces/travels';
import { Dto } from '../../../shared/interfaces/dto';
import { User } from '../../../shared/interfaces/users';
import { AlertService } from '../../../shared/services/alert.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/components/dialogs/dialog/dialog.component';
import { UsersService } from '../../services/users.service';
import { EditStatusComponent } from '../../../shared/components/dialogs/edit-status/edit-status.component';
import { TravelsService } from '../../services/travels.service';
import { DeleteComponent } from '../../../shared/components/dialogs/delete/delete.component';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
})
export class TablaComponent implements OnInit {
  @Input() displayedColumns: string[] = [];
  dataSource!: MatTableDataSource<Travel | User>;
  private _data = new BehaviorSubject<Travel[] | User[]>([]);

  @Input()
  set data(value) {
    this._data.next(value);
  }
  get data() {
    return this._data.getValue();
  }
  constructor(
    private dialog: MatDialog,
    private usersService: UsersService,
    private travelsService: TravelsService
  ) {}

  ngOnInit(): void {
    this._data.subscribe((resp) => {
      this.dataSource = new MatTableDataSource<Travel | User>(resp);
    });
  }

  dto(viaje: Travel, num: number): Dto {
    return num == 0
      ? viaje.travelEquipmentDTOs[0]
      : viaje.travelEquipmentDTOs[viaje.travelEquipmentDTOs.length - 1];
  }

  openEdit(data: Travel) {
    const editRef = this.dialog.open(EditStatusComponent, {
      data,
      width: '50%',
      disableClose: true,
    });
    editRef.afterClosed().subscribe((r) => {
      if (r) {
        this.travelsService.refreshViajes$.next();
      }
    });
  }

  openDialog(data: User) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data,
      width: '50%',
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((r) => {
      if (r) {
        this.usersService.refreshUsers$.next();
      }
    });
  }

  openDelete(data: User) {
    const deleteRef = this.dialog.open(DeleteComponent, {
      data,
      width: '50%',
      autoFocus: false,
    });
    deleteRef.afterClosed().subscribe((r) => {
      if (r) {
        this.usersService.refreshUsers$.next();
      }
    });
  }
}
