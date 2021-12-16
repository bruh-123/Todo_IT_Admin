import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidateService } from '../../../shared/services/validate.service';
import { AlertService } from '../../../shared/services/alert.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent implements OnInit {
  hide: boolean = true;
  isLoading: boolean = false;
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private validateService: ValidateService,
    private alertService: AlertService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
    });
  }
  ingresar() {
    if (this.loginForm.invalid) {
      this.alertService.failure('Email y contraseña requeridas');
      return;
    }
    this.isLoading = true;
    this.validateService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe({
        next: () => {
          this.router.navigateByUrl('/admin/registro');
        },
        error: (e) => {
          this.isLoading = false;
          console.log(e.error);
          this.alertService.failure(e.error);
        },
      });
  }
  ngOnInit(): void {}
}
