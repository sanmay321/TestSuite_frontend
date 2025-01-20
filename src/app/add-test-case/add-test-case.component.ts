import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TestcasesComponent } from './components/testcases/testcases.component';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { NavmenuComponent } from "../component/navmenu/navmenu.component";
import { TodoComponent } from '../todo/todo.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-test-case',
  standalone: true,
  imports: [MatToolbar, SidebarComponent, TestcasesComponent, CommonModule, MatIcon, NavmenuComponent, TodoComponent, RouterModule, FormsModule],
  templateUrl: './add-test-case.component.html',
  styleUrl: './add-test-case.component.scss'
})
export class AddTestCaseComponent {
  activeNav: string = 'Test Cases';
  setActive(nav: string): void {
    this.activeNav = nav;
  }
  // testCasesPrerequisites = [
  //   { id: 'C1', title: 'Change text alignment in an inline table' },
  //   { id: 'C2', title: 'Format table with built-in style' },
  //   { id: 'C3', title: 'Add new review data point (including note)' },
  //   { id: 'C4', title: 'Verify CSV import with enclosed test data files' },
  //   { id: 'C5', title: 'Change page color and verify print output' },
  // ];

  // testCasesSoftware = [
  //   { id: 'C6', title: 'Add new review data point (including note)' },
  //   { id: 'C7', title: 'Change text alignment in an inline table' },
  //   { id: 'C8', title: 'Change page color and verify print output' },
  //   { id: 'C9', title: 'Export enclosed test document to PDF and verify rendering' },
  //   { id: 'C10', title: 'Test conditional formatting with basic value range' },
  //   { id: 'C11', title: 'Add footnotes to document and verify footnote numbering' },
  // ];
  sections = [
    {
      title: 'Prerequisites',
      subsections: ['Software & Versions', 'Hardware', 'Installation', 'Updates']
    },
    {
      title: 'Tutorial',
      subsections: ['Goals', 'Metrics']
    },
    {
      title: 'Login & Account',
      subsections: ['Reset Password']
    },
    {
      title: 'Administration',
      subsections: ['Projects', 'Settings', 'Users & Roles']
    }
  ];

  testCases = [
    {
      name: 'Prerequisites',
      count: 5,
      cases: [
        { id: 'C1', title: 'Change text alignment in an inline table', selected: false },
        { id: 'C2', title: 'Format table with built-in style', selected: false },
        { id: 'C3', title: 'Add new review data point (including note)', selected: false },
        { id: 'C4', title: 'Verify CSV import with enclosed test data files', selected: false },
        { id: 'C5', title: 'Change page color and verify print output', selected: false }
      ]
    },
    {
      name: 'Software & Versions',
      count: 6,
      cases: [
        { id: 'C6', title: 'Add new review data point (including note)', selected: false },
        { id: 'C7', title: 'Change text alignment in an inline table', selected: false },
        { id: 'C8', title: 'Change page color and verify print output', selected: false },
        { id: 'C9', title: 'Export enclosed test document to PDF and verify rendering', selected: false },
        { id: 'C10', title: 'Test conditional formatting with basic value range', selected: false },
        { id: 'C11', title: 'Add footnotes to document and verify footnote numbering', selected: false }
      ]
    }
  ];

   // Sections data with expandable/collapsible functionality
   fileSections = [
    {
      name: 'Prerequisites',
      expanded: false,
      subSections: ['Software & Versions', 'Hardware', 'Installation', 'Updates']
    },
    {
      name: 'Tutorial',
      expanded: false,
      subSections: ['Goals', 'Metrics']
    },
    {
      name: 'Login & Account',
      expanded: false,
      subSections: ['Reset Password']
    },
    {
      name: 'Feature 1',
      expanded: false,
      subSections: []
    },
    {
      name: 'Administration',
      expanded: false,
      subSections: ['Projects', 'Settings', 'Users & Roles', 'Permissions']
    },
    {
      name: 'Search',
      expanded: false,
      subSections: []
    },
    {
      name: 'Help & Documentation',
      expanded: false,
      subSections: []
    }
  ];

  // Toggle section expand/collapse
  toggleSection(section: any) {
    section.expanded = !section.expanded;
  }

  toggleAll(section: any, event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    section.cases.forEach((caseItem: any) => {
      caseItem.selected = isChecked; // Update the selected state for all cases in the section
    });
  }
}
