import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from '../../../../services/sidenav.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RegisterUserComponent } from '../../../register-user/register-user.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  @Input() sidenav!: MatSidenav;
  isVisible: boolean = true; 
  constructor(private sidenavService: SidenavService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.sidenavService.headerVisibility$.subscribe((isVisible) => {
      this.isVisible = isVisible;
    });
  }

  toggleSidenav() {
    this.sidenavService.toggle();
  }

  login() {
    // const dialogRef = this.dialog.open(RegisterUserComponent, {
    //   width: '55%',
    //   minWidth: '55%',
    //   maxWidth: '100%',
    //   data: { /* You can pass data to the modal here */ }
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   // Do something with the result if needed
    // });
    console.log('Clicked');
  }

}
