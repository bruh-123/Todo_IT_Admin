import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertService } from '../../../shared/services/alert.service';
import { User } from '../../../shared/interfaces/users';
import { Registered } from '../../../shared/interfaces/registered';
import { SignupService } from '../../../shared/services/signup.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.scss'],
})
export class FormRegistroComponent implements OnInit {
  signupForm: FormGroup;
  hide: boolean = true;
  isLoading: boolean = false;
  @ViewChild('myForm') myForm!: any;

  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private signupService: SignupService
  ) {
    this.signupForm = this.formBuilder.group({
      rol: ['', Validators.required],
      fullName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
      address: ['', Validators.required],
      cellPhone: [
        '',
        [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)],
      ],
      vehiculo: [null],
    });
  }
  get form() {
    return this.signupForm.controls;
  }
  registrar() {
    if (this.signupForm.invalid) {
      this.alertService.failure(
        'Los datos son inválidos/faltan datos por cargar'
      );
      return;
    }
    this.isLoading = true;
    let user = this.userData(this.signupForm.value);
    this.signupService.registrar(user).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.alertService.success('Usuario creado con éxito!');
      },
      error: (e) => {
        this.isLoading = false;
        this.alertService.failure(e.error);
      },
    });
    this.clearForm();
  }

  userData(user: Registered): User {
    let data: User = {
      id: 0,
      fullName: user.fullName,
      email: user.email,
      password: user.password,
      address: user.address,
      cellPhone: user.cellPhone,
      isAccepted: true,
      isDeleted: false,
      observations: 'Nuevo usuario',
      vehicle:
        user.rol == 2
          ? {
              id: user.vehiculo,
              name:
                user.vehiculo == 1
                  ? 'Bicicleta'
                  : user.vehiculo == 2
                  ? 'Motocicleta'
                  : 'Automóvil',
              isDeleted: 0,
            }
          : null,
      rol: {
        id: user.rol,
        name: user.rol == 2 ? 'Cadete' : 'Usuario Final',
        isDeleted: 0,
      },
    };
    return data;
  }

  clearForm() {
    this.myForm.resetForm();
  }
  ngOnInit(): void {}
}
