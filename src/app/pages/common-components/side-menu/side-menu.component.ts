import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from '../../../../services/sidenav.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent implements AfterViewInit {
  // @Input() isMenuOpen: boolean = false;
  // showFiller = false;

  menuItems = [
    { name: 'Dashboard', route: '/pages/dashboard' },
  ];
  menuDropItems = [
    {
      name: 'Test Cases', route: '/pages/manufacturing',
      childrens: [{ name: 'Overview', route: '/pages/overview' },
      { name: 'Todo', route: '/pages/todo' },
      { name: 'Milestone', route: '/pages/milestone' },
      { name: 'Testrun and Results', route: '/pages/testrunAndResults' },
      { name: 'Testsuites and cases', route: '/pages/testsuiteAndCases' },
      { name: 'Report', route: '/pages/report' }]
    },
  ];

  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private sidenavService: SidenavService, private router: Router) { }

  ngAfterViewInit() {
    this.sidenavService.setSidenav(this.sidenav);
  }

  isRouteActive(route: string): boolean {
    return this.router.url === route;
  }
}
