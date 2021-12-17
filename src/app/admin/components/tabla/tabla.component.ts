import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { Travel } from '../../../shared/interfaces/travels';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
})
export class TablaComponent implements OnInit {

  @Input() displayedColumns: string[] = [];
  dataSource!: MatTableDataSource<Travel>;
  private _data = new BehaviorSubject<Travel[]>([])
  @Input()
  set data(value) {
    this._data.next(value)
  }
  get data() {
    return this._data.getValue()
  }
  constructor() {}

  ngOnInit(): void {
    this._data.subscribe((resp) => {
      this.dataSource= new MatTableDataSource<Travel>(resp)
    })
  }
}
