import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';  //  Acts as the layout container
import { DashboardComponent } from './dashboard/dashboard.component';
import { MilestoneComponent } from './milestone/milestone.component';
import { TestsuitesAndCasesComponent } from './testsuites-and-cases/testsuites-and-cases.component';
import { TestrunsAndResultsComponent } from './testruns-and-results/testruns-and-results.component';
import { OverviewComponent } from './overview/overview.component';
import { TestExecutionComponent } from './test-execution/test-execution.component';
import { AddTestCaseComponent } from '../add-test-case/add-test-case.component';
import { EditTestCasesComponent } from './edit-test-cases/edit-test-cases.component';
import { ReportComponent } from '../report/report.component';
import { SideMenuComponent } from './common-components/side-menu/side-menu.component';

import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,  // ✅ Acts as the layout with the sidebar
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'milestone',
        component: MilestoneComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'testsuiteAndCases',
        component: TestsuitesAndCasesComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'testrunAndResults',
        component: TestrunsAndResultsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'overview',
        component: OverviewComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'test-execution',
        component: TestExecutionComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'add-test-case',
        component: AddTestCaseComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'edit-test-case',
        component: EditTestCasesComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'report',
        component: ReportComponent,
        canActivate: [AuthGuard]
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }