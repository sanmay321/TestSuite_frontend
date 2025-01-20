import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from './pages/pages.module';
import { SigninComponent } from './signin/signin.component';
// import { RegisterUserComponent } from './register-user/register-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './add-test-case/components/sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

// import { BrowserModule } from '@angular/platform-browser';
// -------------------------------------


// Angular Material Components
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    // SigninComponent,
    // RegisterUserComponent,
    // SidebarComponent,
    // TestCasesComponent,
    // MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,       // <-- MatCardModule for <mat-card>
    MatListModule,       // <-- MatListModule for <mat-list> and <mat-list-item>
    MatIconModule,       // <-- MatIconModule for <mat-icon>
    MatCheckboxModule,   // <-- MatCheckboxModule for <mat-checkbox>
    MatButtonModule,     // <-- MatButtonModule for <button mat-button>
    MatFormFieldModule,  // <-- MatFormFieldModule for <mat-form-field>
    MatSelectModule,     // <-- MatSelectModule for <mat-select> and <mat-option>
    MatInputModule ,
    // ---
    CommonModule,
    PagesModule,
    ReactiveFormsModule,
    RouterModule
  





    SidebarComponent
    // BrowserModule
  ]
})
export class AppModule { }
