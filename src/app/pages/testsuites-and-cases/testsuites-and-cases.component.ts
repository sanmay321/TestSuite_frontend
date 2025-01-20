import { AfterViewInit, Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from '../../../services/sidenav.service';
import { NgFor } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddTestSuiteComponent } from '../../component/modals/add-test-suite/add-test-suite.component';

@Component({
  selector: 'app-testsuites-and-cases',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './testsuites-and-cases.component.html',
  styleUrl: './testsuites-and-cases.component.scss',
})
export class TestsuitesAndCasesComponent implements AfterViewInit {
  @Input() sidenav!: MatSidenav;

  testSuites = [
    {
      name: 'XYZ Project',
      description: 'Has 270 sections with 2787 test cases.',
      testRunsAmount: 2,
    },
  ];

  constructor(
    private sidenavService: SidenavService, 
    private router: Router,
    public dialog: MatDialog, 
  ) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.sidenavService.close();
    });
  }

  addTestSuite(data: any = null) {
    const dialogRef = this.dialog.open(
      AddTestSuiteComponent,
      {
        width: '35%',
        minWidth: '35%',
        maxWidth: '100%',
        // borderRadius: '10px',
        data: {
          title:  data ? 'Edit test suite' : 'Add test suite',
          testData: data ? data : null
        },
      }
    );

    dialogRef.afterClosed().subscribe((result: {name: string, description: string}) => {
      if (result?.name) {
        this.testSuites.push({...result, testRunsAmount: 2})
      }
    });
  }
}
