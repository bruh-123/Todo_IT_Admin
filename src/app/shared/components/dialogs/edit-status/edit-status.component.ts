import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Travel } from '../../../interfaces/travels';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../../../../admin/services/users.service';
import { TravelsService } from '../../../../admin/services/travels.service';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-edit-status',
  templateUrl: './edit-status.component.html',
  styleUrls: ['./edit-status.component.scss'],
})
export class EditStatusComponent implements OnInit {
  isLoading: boolean = false;
  estados: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  travelForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<EditStatusComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Travel,
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private travelsService: TravelsService,
    private alertService: AlertService
  ) {
    this.travelForm = this.formBuilder.group({
      estado: [data.lastStatusTravel],
      cadete: [
        data.travelEquipmentDTOs[data.travelEquipmentDTOs.length - 1].cadete
          ?.id ?? 0,
        [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)],
      ],
      obs: ['', Validators.maxLength(100)],
    });
  }
  editar() {
    this.isLoading = true;
    let idT = this.data.id;
    let newEstado = this.travelForm.value.estado;
    let idC = this.travelForm.value.cadete;
    let obs = this.travelForm.value.obs;
    // controla que no se quiera pasar a un estado que no requiera cadete
    if ((newEstado == 1 || newEstado == 5) && idC !== 0) {
      this.alertService.failure('El nuevo estado requiere cadete id=0');
      this.isLoading = false;
      return;
    } else if (idC == 0) {
      this.cambiarEstado(idT, newEstado, idC, obs);
      return;
    }

    console.log('pasoooooooo');
    this.usersService.singleUser(idC).subscribe({
      next: (r) => {
        if (r.rol.id == 2 && !r.isDeleted) {
          this.cambiarEstado(idT, newEstado, idC, obs);
        } else {
          this.alertService.failure('El cadete no existe / la id es invalida');
          this.dialogRef.close();
        }
      },
      error: (e) => {
        this.dialogRef.close();
        this.alertService.failure(e.error);
      },
    });
  }
  cambiarEstado(idT: number, newEstado: number, idC: number, obs: string) {
    this.travelsService.postViaje(idT, newEstado, idC, obs).subscribe({
      next: () => {
        this.alertService.success('Se cambió el viaje con exito!');
        this.dialogRef.close(true);
      },
      error: (e) => {
        this.isLoading = false;
        this.alertService.failure(e.error);
      },
    });
  }
  ngOnInit(): void {}
}
