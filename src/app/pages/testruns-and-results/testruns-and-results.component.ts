import { AfterViewInit, Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from '../../../services/sidenav.service';
import { Router, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddTestRunComponent } from '../../component/modals/add-test-run/add-test-run.component';
import { AddTestPlanComponent } from '../../component/modals/add-test-plan/add-test-plan.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-testruns-and-results',
  standalone: true,
  imports: [RouterModule, NgFor],
  templateUrl: './testruns-and-results.component.html',
  styleUrl: './testruns-and-results.component.scss'
})
export class TestrunsAndResultsComponent implements AfterViewInit {
  @Input() sidenav!: MatSidenav;
  
  page: number = 1
  perPage: number = 5
  total: number = 20
  pages: number[] = [];

  constructor(
    private sidenavService: SidenavService, 
    private router: Router,
    public dialog: MatDialog, 
  ) {
    
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.sidenavService.close();
    });
    this.calculatePages()
  }

  openAddTestRun(modalName: 'run' | 'plan', testData: any = null) {
    const dialogRef = this.dialog.open<any>(modalName === 'run' ? AddTestRunComponent : AddTestPlanComponent, {
      width: '35%',
      minWidth: '35%',
      maxWidth: '100%',
      // borderRadius: '10px',
      data: { 
        title: modalName === 'run' ? (testData ? 'Edit test run' : 'Add test run') : (testData ? 'Edit test plan' : 'Add test plan'),
        testData
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Do something with the result if needed
    });
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
