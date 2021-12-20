import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Registered } from 'src/app/shared/interfaces/registered';
import { User } from '../../../interfaces/users';
import { SignupService } from '../../../services/signup.service';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  editForm: FormGroup;
  isLoading: boolean = false;
  invalidForm: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private SignupService: SignupService,
    private alertService: AlertService
  ) {
    let vehicleValidator = this.data.rol.id == 2 ? [Validators.required] : [];
    this.editForm = this.formBuilder.group({
      fullName: [data.fullName, Validators.required],
      email: [data.email, [Validators.email, Validators.required]],
      address: [data.address, Validators.required],
      cellPhone: [
        data.cellPhone,
        [Validators.required, Validators.pattern(/^-?([0-9]\d*)?$/)],
      ],
      vehicleName: [data.vehicle?.name, vehicleValidator],
    });
  }

  
  ngOnInit(): void {
  }
  editar() {    
    if (this.editForm.invalid) {
      this.invalidForm = true;
      return;
    }
    this.isLoading = true;
    this.invalidForm = false;
    let data = this.userData(this.editForm.value);
    this.SignupService.registrar(data).subscribe({
      next: () => {
        this.dialogRef.close(true);
        this.alertService.success('Usuario editado exitosamente');
        this.isLoading = false;
      },
      error: (e) => {
        this.isLoading = false;
        this.alertService.failure(e.error);
      },
    });
  }
  userData(user: Registered): User {
    let resp: User = {
      id: this.data.id,
      fullName: user.fullName,
      email: user.email,
      password: this.data.password,
      address: user.address,
      cellPhone: user.cellPhone,
      isAccepted: true,
      isDeleted: false,
      observations: this.data.observations,
      vehicle:
        this.data.rol.id == 2
          ? {
              id:
                user.vehicleName == 'Bicicleta'
                  ? 1
                  : user.vehicleName == 'Motocicleta'
                  ? 2
                  : 3,
              name: user.vehicleName,
              isDeleted: 0,
            }
          : null,
      rol: {
        id: this.data.rol.id,
        name: this.data.rol.name,
        isDeleted: 0,
      },
    };
    return resp;
  }
}
