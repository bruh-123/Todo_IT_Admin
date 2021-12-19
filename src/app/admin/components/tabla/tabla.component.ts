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
    private alertService: AlertService,
    private dialog: MatDialog,
    private usersService: UsersService
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

  openDialog(data: Travel | User) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data,
      width: '50%',
      disableClose: true,
    });
    dialogRef
      .afterClosed()
      .subscribe(() => this.usersService.refreshUsers$.next());
  }
}
