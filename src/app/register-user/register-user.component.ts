import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import { SigninComponent } from "../signin/signin.component";

interface SignupForm {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  email: FormControl<string>;
  phone: FormControl<string | null>;
  company: FormControl<string>;
  country: FormControl<string>;
  users: FormControl<string>;
  webAddress: FormControl<string>;
  terms: FormControl<boolean>;
  newsletter: FormControl<boolean>;
}

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.scss',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatDialogModule, SigninComponent, MatTabsModule]
})
export class RegisterUserComponent {
  signupForm: FormGroup<SignupForm>;
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
    
    this.signupForm = new FormGroup<SignupForm>({
      firstName: new FormControl('', { nonNullable: true, validators: Validators.required }),
      lastName: new FormControl('', { nonNullable: true, validators: Validators.required }),
      email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
      phone: new FormControl<string | null>(null),
      company: new FormControl('', { nonNullable: true, validators: Validators.required }),
      country: new FormControl('', { nonNullable: true, validators: Validators.required }),
      users: new FormControl('', { nonNullable: true, validators: Validators.required }),
      webAddress: new FormControl('', { nonNullable: true, validators: Validators.required }),
      terms: new FormControl(false, { nonNullable: true, validators: Validators.requiredTrue }),
      newsletter: new FormControl(false, { nonNullable: true })
    });
    
  
  }

  // passwordMatchValidator(form: FormGroup) {
  //   const password = form.get('password')?.value;
  //   const confirmPassword = form.get('confirmPassword')?.value;

  //   // return password === confirmPassword ? null : { mismatch: true };
  //   return true
  // }

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
