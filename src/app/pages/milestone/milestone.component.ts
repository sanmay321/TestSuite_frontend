import { AfterViewInit, Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from '../../../services/sidenav.service';
import { Router, RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-milestone',
  standalone: true,
  imports: [RouterModule, NgFor],
  templateUrl: './milestone.component.html',
  styleUrl: './milestone.component.scss'
})
export class MilestoneComponent implements AfterViewInit {
  @Input() sidenav!: MatSidenav;

  page: number = 1
  perPage: number = 5
  total: number = 20
  pages: number[] = [];

  constructor(private sidenavService: SidenavService, private router: Router) {
    
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.sidenavService.close();
    });
    this.calculatePages()
  }

  nextPage() {
    if (this.page < this.pages.length) {
      this.page++
    }
  }

  prevPage() {
    if (this.page > 1) {
      this.page--
    }
  }

  toPage(page: number) {
    this.page = page
  }

  calculatePages() {
    const totalPages = Math.ceil(this.total / this.perPage); // Обчислюємо кількість сторінок
    this.pages = Array.from({ length: totalPages }, (_, i) => i + 1); // Масив [1, 2, 3, ...]
  }

}
