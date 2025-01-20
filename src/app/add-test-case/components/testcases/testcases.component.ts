import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-testcases',
  standalone: true,
  imports: [MatCardModule,    MatListModule,       // <-- MatListModule for <mat-list> and <mat-list-item>
    MatIconModule,       // <-- MatIconModule for <mat-icon>
    MatCheckboxModule,   // <-- MatCheckboxModule for <mat-checkbox>
    MatButtonModule,     // <-- MatButtonModule for <button mat-button>
    MatFormFieldModule,  // <-- MatFormFieldModule for <mat-form-field>
    MatSelectModule,     // <-- MatSelectModule for <mat-select> and <mat-option>
    MatInputModule ,],
  templateUrl: './testcases.component.html',
  styleUrl: './testcases.component.scss'
})
export class TestcasesComponent {
  testCasesPrerequisites = [
    { id: 'C1', title: 'Change text alignment in an inline table' },
    { id: 'C2', title: 'Format table with built-in style' },
    { id: 'C3', title: 'Add new review data point (including note)' },
    { id: 'C4', title: 'Verify CSV import with enclosed test data files' },
    { id: 'C5', title: 'Change page color and verify print output' },
  ];

  testCasesSoftware = [
    { id: 'C6', title: 'Add new review data point (including note)' },
    { id: 'C7', title: 'Change text alignment in an inline table' },
    { id: 'C8', title: 'Change page color and verify print output' },
    { id: 'C9', title: 'Export enclosed test document to PDF and verify rendering' },
    { id: 'C10', title: 'Test conditional formatting with basic value range' },
    { id: 'C11', title: 'Add footnotes to document and verify footnote numbering' },
  ];
}
