import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HeaderComponent } from './common-components/header/header.component';
import { SideMenuComponent } from './common-components/side-menu/side-menu.component';
import { FooterComponent } from './common-components/footer/footer.component';
import { PagesComponent } from './pages.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { AboutComponent } from './home/about/about.component';
import { PricingComponent } from './home/pricing/pricing.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { StackedBarChartComponent } from "./charts/stacked-bar-chart/stacked-bar-chart.component";
import { DoughnutChartComponent } from "./charts/doughnut-chart/doughnut-chart.component";
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AddTestCaseComponent } from "../add-test-case/add-test-case.component";
import { MarqueeComponent } from './home/about/marquee/marquee.component';
import { DragScrollComponent, DragScrollItemDirective } from 'ngx-drag-scroll';
import { AchievementComponent } from './home/about/achievement/achievement.component';
import { ProductsComponent } from './home/about/products/products.component';
import { ProductsCardComponent } from './common-components/cards/products-card/products-card.component'

@NgModule({
  declarations: [
    HeaderComponent,
    SideMenuComponent,
    FooterComponent,
    PagesComponent,
    DashboardComponent,
    HomeComponent,
    AboutComponent,
    PricingComponent,
    ContactUsComponent,
    MarqueeComponent,
    AchievementComponent,
    ProductsCardComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatExpansionModule,
    StackedBarChartComponent,
    DoughnutChartComponent,
    MatProgressBarModule,
    AddTestCaseComponent,
    DragScrollComponent,
    DragScrollItemDirective,
],
bootstrap: [ MarqueeComponent ],
  // exports: [StackedBarChartComponent],
  providers: [provideCharts(withDefaultRegisterables())],
})
export class PagesModule { }
