import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatListModule,MatIcon],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  sections = [
    { name: 'Prerequisites', details: 'Contains 5 cases' },
    { name: 'Software & Versions', details: 'Contains 6 cases' },
    { name: 'Hardware', details: 'Contains 2 cases' },
    { name: 'Installation', details: 'Contains 8 cases' },
    { name: 'Updates', details: 'Contains 4 cases' },
  ];
}
