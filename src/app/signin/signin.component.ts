import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class SigninComponent {
  signinForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, public dialogRef: MatDialogRef<SigninComponent>, public dialog: MatDialog) {

    this.signinForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.signinForm.valid) {
      console.log('Form Submitted', this.signinForm.value);
      const userInfo = localStorage.getItem('user');
      if (userInfo) {
        const user = JSON.parse(userInfo);
        if(user.username === this.signinForm.value.username && user.password === this.signinForm.value.password) {
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
