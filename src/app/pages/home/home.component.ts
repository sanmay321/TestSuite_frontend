import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { SidenavService } from '../../../services/sidenav.service';
import { MatSidenav } from '@angular/material/sidenav';
import { MatDialog } from '@angular/material/dialog';
import { RegisterUserComponent } from '../../register-user/register-user.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit {
  // @ViewChild('sidenav') sidenav!: MatSidenav;
  @Input() sidenav!: MatSidenav;
  navTags = [{
    name: "About",
    route: "about"
  },
  {
    name: "Pricing",
    route: "pricing"
  },
  {
    name: "Contact Us",
    route: "contact"
  },
  {
    name: "Add Test Case",
    route: "/pages/add-test-case"
  },
  {
    name: "Login / Signup",
    route: "signup"
  },
];
  routerTag: string = 'about';

  constructor(
    private sidenavService: SidenavService, 
    public dialog: MatDialog, 
    private router: Router
  ) {
    // this.sidenavService.close();
  }

  ngOnInit() {
    // this.sidenavService.close();
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.sidenavService.close();
    });
    this.sidenavService.hideHeader();

  }

  redirect(el: string) {
    if(el === 'signup') {
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
    } else if (el === '/pages/add-test-case') {
      this.router.navigate([el])
    } else {
      this.routerTag = el;
    }
    // this.routerTag = el;
    console.log(el);

  }

  ngOnDestroy() {
    this.sidenavService.showHeader();
  }

}
