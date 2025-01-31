import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { SidenavService } from '../../../services/sidenav.service';
import { Router, RouterModule } from '@angular/router';
import { NgFor, NgClass, NgIf } from '@angular/common';
@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [RouterModule, NgFor, NgClass, NgIf],
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements AfterViewInit {
  milestones: { title: string; date: string }[] = [];
  testRuns: { title: string; date: string }[] = [];
  activeTab: string = 'history';

  activities = [
    { tag: "Test Run", title: "CM - Manual Test Cases v2024.06", completed: true, closedBy: "Vaibhav P.", closedDate: "July 23, 2024" },
    { tag: "Test Run", title: "CM - Manual Test Cases v2024.07", completed: true, closedBy: "Vaibhav P.", closedDate: "July 22, 2024"  },
    { tag: "Milestone", title: "V2024.7", completed: false, closedBy: "Vaibhav P.", closedDate: "July 22, 2024" },
    { tag: "Milestone", title: "V2024.6", completed: true, closedBy: "Vaibhav P.", closedDate:  "July 23, 2024" }
  ];

  filteredActivities: { date: string; activities: any[] }[] = [];

  constructor(private sidenavService: SidenavService, private router: Router) {
    
  }

  ngAfterViewInit() {
    this.loadBarChart();
    setTimeout(() => {
      this.sidenavService.close();
      this.filterActivities();
      
      this.milestones = [{ title: 'V2024.7', date: 'Due on 7/26/2024' }];
    this.testRuns = [
      { title: 'CM - Manual Test Cases v2024.07', date: 'By Vaibhav P. on 7/23/2024' },
      { title: 'Automation Test Run', date: 'By Shubham K. on 3/11/2024' }
    ];

   

     
    }, 100);
   
  }
 
  setActiveTab(tab: string) {
    this.activeTab = tab;
    this.filterActivities();
  }

  filterActivities() {
    let filtered = [...this.activities];

    if (this.activeTab === "testChanges") {
      filtered = filtered.filter(activity => activity.tag === "Test Run");
    }

    // Group activities by closedDate
    const groupedActivities: { date: string; activities: any[] }[] = [];
    filtered.forEach(activity => {
      let group = groupedActivities.find(g => g.date === activity.closedDate);
      if (!group) {
        group = { date: activity.closedDate, activities: [] };
        groupedActivities.push(group);
      }
      group.activities.push(activity);
    });

    this.filteredActivities = groupedActivities;
  }
  loadBarChart() {
    const ctx = document.getElementById('barChart') as HTMLCanvasElement;
    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['5/4', '5/5', '5/6', '5/9'],
          datasets: [
            {
              label: 'Test Executions',
              data: [0, 0, 0, 0],
              backgroundColor: '#007bff'
            }
          ]
        },
        options: {
          responsive: true,
          scales: {
            y: { beginAtZero: true }
          }
        }
      });
    }
  }
}