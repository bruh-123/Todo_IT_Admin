import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertService } from '../../../shared/services/alert.service';
import { User } from '../../../shared/interfaces/users';
import { Registered } from '../../../shared/interfaces/registered';
import { SignupService } from '../../../shared/services/signup.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
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
  rolControl = new FormControl('', Validators.required);

  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private signupService: SignupService
  ) {
    this.signupForm = this.formBuilder.group({
      rol: this.rolControl,
      fullName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
      address: ['', Validators.required],
      cellPhone: [
        '',
        [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)],
      ],
      vehicle: [null],
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
    console.log(user);
    this.signupService.registrar(user).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.alertService.success('Usuario creado con éxito!');
        console.log(res);
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
              id: 0,
              name: user.vehicle,
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
