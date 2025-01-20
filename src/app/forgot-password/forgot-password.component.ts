// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { MatDialog, MatDialogRef } from '@angular/material/dialog';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-forgot-password',
//   templateUrl: './forgot-password.component.html',
//   styleUrl: './forgot-password.component.scss',
//   standalone: true,
//   imports: [ReactiveFormsModule]
// })
// export class ForgotPasswordComponent {
//   forgotPasswordForm: FormGroup;

//   constructor(private fb: FormBuilder, private router: Router, public dialogRef: MatDialogRef<ForgotPasswordComponent>, public dialog: MatDialog) {

//     this.forgotPasswordForm = this.fb.group({
//       password: ['', Validators.required],
//       confirmPassword: ['', Validators.required],
//     });
//   }

//   onSubmit() {
//     if (this.forgotPasswordForm.valid) {
//       console.log('Form Submitted', this.forgotPasswordForm.value);
//       const userInfo = localStorage.getItem('user');
//       if (userInfo) {
//         const user = JSON.parse(userInfo);
//         if(user.confirmPassword === this.forgotPasswordForm.value.confirmPassword && user.password === this.forgotPasswordForm.value.password) {
//           this.onClose();
//           this.router.navigate(['/pages/dashboard'], {skipLocationChange: true});
//         }
//       }
//       console.log(userInfo);
//     }
//   }

//   onClose(): void {
//     this.dialogRef.close();
//   }
// }

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public dialogRef: MatDialogRef<ForgotPasswordComponent>,
    public dialog: MatDialog
  ) {
    this.forgotPasswordForm = this.fb.group(
      {
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*].{7,}$'),
          ],
        ],
        confirmPassword: ['', Validators.required],
      },
      { validator: this.passwordMatchValidator }
    );
  }

  // Custom validator to check if passwords match
  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    console.log('aa', password, confirmPassword)
    if (password !== confirmPassword) {
      // control.get('confirmPassword')?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      return null;
    }
  }

  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      console.log('Form Submitted', this.forgotPasswordForm.value);
      const userInfo = localStorage.getItem('user');
      if (userInfo) {
        const user = JSON.parse(userInfo);
        if (
          user.confirmPassword === this.forgotPasswordForm.value.confirmPassword &&
          user.password === this.forgotPasswordForm.value.password
        ) {
          this.onClose();
          this.router.navigate(['/pages/dashboard'], { skipLocationChange: true });
        }
      }
      console.log(userInfo);
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
