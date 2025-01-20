import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  private sidenav!: MatSidenav;
  private isHeaderVisible = new BehaviorSubject<boolean>(true);
  headerVisibility$ = this.isHeaderVisible.asObservable();

  // Setter to bind the MatSidenav instance
  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  // Methods to control the Sidenav
  public open() {
    if (this.sidenav) {
      this.sidenav.open();
    } else {
      // console.error('Sidenav instance is not set.');
    }
  }

  public close() {
    if (this.sidenav) {
      this.sidenav.close();
    } else {
      // console.error('Sidenav instance is not set.');
    }
  }

  public toggle(): void {
    if (this.sidenav) {
      this.sidenav.toggle();
    } else {
      // console.error('Sidenav instance is not set.');
    }
  }

  public showHeader() {
    this.isHeaderVisible.next(true);
  }

  public hideHeader() {
    this.isHeaderVisible.next(false);
  }
}