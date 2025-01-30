import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `<app-side-menu></app-side-menu>`,
  // styleUrl: './pages.component.scss'
})
export class PagesComponent {
  isMenuOpen = false;

  // toggleMenu() {
  //   this.isMenuOpen = !this.isMenuOpen;
  // }
}
