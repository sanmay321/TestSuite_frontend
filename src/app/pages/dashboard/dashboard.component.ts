import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  firstRowStats = [
    { title: 'ORDERS', value: '1,587', change: '+11%', period: 'From previous period', icon: 'assets/icons/Papers.png' , badgeColor: '#1bb99a'},
    { title: 'REVENUE', value: '$46,782', change: '-29%', period: 'From previous period', icon: 'assets/icons/Paypal.png' , badgeColor: '#ff5d48' },
    { title: 'AVG PRICE', value: '$15.9', change: '0%', period: 'From previous period', icon: 'assets/icons/bar-graph.png' , badgeColor: '#cccccc' },
    { title: 'PRODUCT SOLD', value: '1,890', change: '-8%', period: 'Last year', icon: 'assets/icons/Rocket.png' , badgeColor: '#ffc107' }
  ];

  inboxMessages = [
    { name: 'Chadengle', message: "Hey! I'm available...", time: '13:40 PM' },
    { name: 'Tomaslau', message: "I've finished it!", time: '13:34 PM' },
    { name: 'Stillnotdavid', message: "This theme is awesome!", time: '12:17 PM' },
    { name: 'Kurafire', message: "Nice to meet you", time: '12:20 PM' },
    { name: 'Shaheck', message: "Hey! there I'm available...", time: '10:15 AM' },
  ];

  contracts = [
    { company: 'Apple Technology', start: '20/02/2014', end: '19/02/2020', status: 'Paid', statusClass: 'paid' },
    { company: 'Envato Pty Ltd.', start: '20/02/2014', end: '19/02/2020', status: 'Unpaid', statusClass: 'unpaid' },
    { company: 'Apple Technology', start: '20/02/2014', end: '19/02/2020', status: 'Paid', statusClass: 'paid' },
    { company: 'Envato Pty Ltd.', start: '20/02/2014', end: '19/02/2020', status: 'Unpaid', statusClass: 'unpaid' },
    { company: 'Apple Technology', start: '20/02/2014', end: '19/02/2020', status: 'Paid', statusClass: 'paid' },
    { company: 'Envato Pty Ltd.', start: '20/02/2014', end: '19/02/2020', status: 'Unpaid', statusClass: 'unpaid' }
  ];

 
  salesStats = [
    { title: "Sales Statistics", label: "iMacs", percentage: 78, barColor: "#ff5d48" },  // Red
    { title: "Monthly Sales",label: "Macbooks", percentage: 25, barColor: "rgb(61, 185, 220)" },  // Blue
    { title: "Daily Sales",label: "Mobiles", percentage: 75, barColor: "#1bb99a" }  // Green
  ];
}