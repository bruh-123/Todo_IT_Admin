import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../../interfaces/users';
import { AlertService } from '../../../services/alert.service';
import { SignupService } from '../../../services/signup.service';
import { UsersService } from '../../../../admin/services/users.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private alertService: AlertService,
    private signupService: SignupService,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {}
  delete() {
    this.data.isDeleted =!this.data.isDeleted;
    this.signupService.registrar(this.data).subscribe({
      next: () => {
        this.alertService.success(`Has dado de ${this.data.isDeleted?'baja':'alta'} a ${this.data.fullName}`);
        this.dialogRef.close(true);
      },
      error: (e) => this.alertService.failure(e.error),
    });
  }
}
