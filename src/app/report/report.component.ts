import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';

import { ChartComponent, NgApexchartsModule } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
@Component({
  selector: 'app-report',
  standalone: true,
  imports: [NgApexchartsModule,CommonModule],
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss'
})
export class ReportComponent {

  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {

      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["142 Passes", "10 Blocked", "28 Retest", "19 Falied"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  items = [
    {
      name: 'Prerequisites',
      open: false,
      children: [
        { name: 'Licensing & Terms', open: false, children: [] },
        { name: 'Documentation & Help', open: false, children: [] }
      ]
    },
    {
      name: 'Automation',
      open: false,
      children: []
    },
    {
      name: 'Copy & Paste',
      open: false,
      children: [
        { name: 'Charting and Formulas', open: false, children: [] }
      ]
    }
  ];

  toggle(item: any) {
    item.open = !item.open;
  }
  // --------------------------
  prerequisites = [
    { id: 'T1533', title: 'Apply built-in theme to document and verify print output', assignedTo: 'Dennis G.', defects: 'DH-341', status: 'Passed' },
    { id: 'T1534', title: 'Verify clipboard history with platform independent graphic file', assignedTo: 'Ciaran D.', defects: 'N/A', status: 'Passed' },
    { id: 'T1535', title: 'Add numbered list to inline table within a document', assignedTo: 'Colin Q.', defects: 'DH-355', status: 'Failed' },
    { id: 'T1536', title: 'Test incremental search with multi-page document', assignedTo: 'Colin Q.', defects: 'N/A', status: 'Untested' },
    { id: 'T1537', title: 'Verify interoperability with system file dialogs', assignedTo: 'Colin Q.', defects: 'DH-956', status: 'Retest' },
    { id: 'T1540', title: 'Test add-in installation and verify menu appearance', assignedTo: 'Alexis G.', defects: 'N/A', status: 'Untested' }
    // Add more entries as needed
  ];

  getStatusClass(status: string): string {
    return {
      'Passed': 'status-passed',
      'Failed': 'status-failed',
      'Retest': 'status-retest',
      'Blocked': 'status-blocked',
      'Untested': 'status-untested'
    }[status] || '';
  }


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
}
