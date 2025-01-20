import { Component, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartEvent } from 'chart.js';

@Component({
  selector: 'app-stacked-bar-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './stacked-bar-chart.component.html',
  styleUrl: './stacked-bar-chart.component.scss'
})
export class StackedBarChartComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective<'bar'> | undefined;

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {
        stacked: true,
      },
      y: {
        min: 10,
        stacked: true,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      // datalabels: {
      //   anchor: 'end',
      //   align: 'end',
      // },
    },
  };
  public barChartType = 'bar' as const;

  public barChartData: ChartData<'bar'> = {
    labels: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40, 30, 43, 35, 20], label: 'Series A', backgroundColor: 'rgb(61, 185, 220)' },
      { data: [28, 48, 40, 19, 86, 27, 90, 22, 59, 45, 70], label: 'Series B', backgroundColor: 'rgb(27, 185, 154)' },
      { data: [18, 28, 50, 29, 46, 67, 30, 12, 59, 55, 10], label: 'Series C'},
    ],
  };

}
