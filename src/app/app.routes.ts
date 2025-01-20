import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { HomeComponent } from './pages/home/home.component';
import { AddTestCaseComponent } from './add-test-case/add-test-case.component';
import { EditTestCasesComponent } from './pages/edit-test-cases/edit-test-cases.component';
import { ReportComponent } from './report/report.component';
import { AuthGuard } from './guards/auth.guard';
// import { PagesComponent } from './pages/pages.component';

export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  // {
  //   path: 'signup',
  //   component: RegisterUserComponent,
  // },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];
