import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './common-components/header/header.component';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { MilestoneComponent } from './milestone/milestone.component';
import { DoughnutChartComponent } from './charts/doughnut-chart/doughnut-chart.component';
import { TestsuitesAndCasesComponent } from './testsuites-and-cases/testsuites-and-cases.component';
import { TestrunsAndResultsComponent } from './testruns-and-results/testruns-and-results.component';
import { AuthGuard } from '../guards/auth.guard';
import { OverviewComponent } from './overview/overview.component';
import { TestExecutionComponent } from './test-execution/test-execution.component';
import { AddTestCaseComponent } from '../add-test-case/add-test-case.component';
import { EditTestCasesComponent } from './edit-test-cases/edit-test-cases.component';
import { ReportComponent } from '../report/report.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    // {
    //   path: 'home',
    //   component: HomeComponent,
    // },
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
      path: 'test-execution',
      component: TestExecutionComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'overview',
      component: OverviewComponent,
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
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
