import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import { SigninComponent } from "../signin/signin.component";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.scss',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatDialogModule, SigninComponent, MatTabsModule]
})
export class RegisterUserComponent {
  signupForm: FormGroup;
  signupFlag: boolean = false;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<RegisterUserComponent>) {

    // this.signupForm = this.fb.group({
    //   firstName: ['', Validators.required],
    //   lastName: ['', Validators.required],
    //   company: ['', Validators.required],
    //   email: ['', Validators.required],
    //   country: ['', Validators.required],
    //   numberOfUsers: ['', Validators.required],
    //   webAddress: ['', Validators.required]
    // });

    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Form Submitted', this.signupForm.value);
      localStorage.setItem('user', JSON.stringify(this.signupForm.value));
      this.onClose();
      alert('User Registered, You can login now!');
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
