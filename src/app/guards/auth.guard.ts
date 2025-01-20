import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { RegisterUserComponent } from '../register-user/register-user.component';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, public dialog: MatDialog) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const userInfo = localStorage.getItem('user');
    if (userInfo) {
      return true; // Доступ дозволений
    }
    // Якщо користувач не авторизований, перенаправляємо на сторінку входу
    const dialogRef = this.dialog.open(RegisterUserComponent, {
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
    this.router.navigate(['/']);
    return false;
  }
}
