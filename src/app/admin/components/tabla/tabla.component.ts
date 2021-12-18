import { visitValue } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, filter } from 'rxjs';
import { Travel } from '../../../shared/interfaces/travels';
import { Dto } from '../../../shared/interfaces/dto';
import { User } from '../../../shared/interfaces/users';

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
  constructor() {}

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
}
