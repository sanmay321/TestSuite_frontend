import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TestcasesComponent } from '../../add-test-case/components/testcases/testcases.component';
import { SidebarComponent } from '../../add-test-case/components/sidebar/sidebar.component';
import { MatToolbar } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NavmenuComponent } from '../../component/navmenu/navmenu.component';
import { SidenavService } from '../../../services/sidenav.service';
import { NgFor } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddStepComponent } from '../../component/modals/add-step/add-step.component';

@Component({
  selector: 'app-edit-test-cases',
  standalone: true,
  imports: [
    MatToolbar,
    SidebarComponent,
    TestcasesComponent,
    CommonModule,
    CommonModule, // Angular core directives
    // Template-driven forms
    NavmenuComponent,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
  ],
  templateUrl: './edit-test-cases.component.html',
  styleUrl: './edit-test-cases.component.scss',
})
export class EditTestCasesComponent {
  steps: Array<{ description: string; expectedResult: string }> = [
    {
      description: 'Open the New Document wizard by selecting File | New.',
      expectedResult: 'The new dialog is displayed...',
    },
    {
      description:
        'Select the Corporate template and confirm it by clicking OK.',
      expectedResult: 'A new document is opened...',
    },
  ];

  constructor(
    private sidenavService: SidenavService, 
    private router: Router,
    public dialog: MatDialog,
  ) {}

  addStep(data: any = null) {
    const dialogRef = this.dialog.open(AddStepComponent, {
      width: '35%',
      minWidth: '35%',
      maxWidth: '100%',
      // borderRadius: '10px',
      data: {
        title: data ? 'Edit step' : 'Add step',
        testData: data ? data : null,
      },
    });

    dialogRef
      .afterClosed()
      .subscribe((result: { expectedResult: string; description: string }) => {
        if (result?.description) {
          this.steps.push({ ...result });
        }
      });
  }

  removeStep(index: number) {
    this.steps.splice(index, 1);
  }

  saveTestCase() {
    console.log('Test case saved:', this.steps);
  }

  cancel() {
    console.log('Test case canceled');
  }
}
