import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Route, Router } from '@angular/router';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

interface SigninForm {
  email: FormControl<string>;
  password: FormControl<string>;
  keepLoggedIn: FormControl<boolean>;
}


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatIconModule]
})
export class SigninComponent {
  signinForm: FormGroup<SigninForm>;

  constructor(private fb: FormBuilder, private router: Router, public dialogRef: MatDialogRef<SigninComponent>, public dialog: MatDialog) {

    this.signinForm = new FormGroup<SigninForm>({
      email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
      password: new FormControl('', { nonNullable: true, validators: Validators.required }),
      keepLoggedIn: new FormControl(false, { nonNullable: true })
    });
  }

  onSubmit() {
    if (this.signinForm.valid) {
      console.log('Form Submitted', this.signinForm.value);
      const userInfo = localStorage.getItem('user');
      if (userInfo) {
        const user = JSON.parse(userInfo);
        if(user.username === this.signinForm.value.email && user.password === this.signinForm.value.password) {
          this.onClose();
          this.router.navigate(['/pages/dashboard'], {skipLocationChange: true});
        }
      }
      console.log(userInfo);
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }

  forgotPassword(){
    this.dialogRef.close();
    console.log('forgot password clicked');
    const dialogRef = this.dialog.open(ForgotPasswordComponent, {
      width: '55%',
      minWidth: '55%',
      maxWidth: '100%',
      // borderRadius: '10px',
      data: { /* You can pass data to the modal here */ }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Do something with the result if needed
    });
  }
}
