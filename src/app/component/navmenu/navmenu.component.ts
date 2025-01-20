import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { TodoComponent } from '../../todo/todo.component';
import { AddTestCaseComponent } from '../../add-test-case/add-test-case.component';

@Component({
  selector: 'app-navmenu',
  standalone: true,
  imports: [CommonModule, TodoComponent, AddTestCaseComponent],
  templateUrl: './navmenu.component.html',
  styleUrl: './navmenu.component.scss'
})
export class NavmenuComponent {
  @Output() navSelected = new EventEmitter<string>();
  navItems = ['Overview', 'Todo', 'Milestones', 'Test Runs & Results', 'Test Cases', 'Reports', 'ADMINISTRATION'];
  activeNav: string = 'Test Cases';

  // setActive(nav: string): void {
  //   console.log('nn', nav);
  //   if(nav == 'Todo' || nav == 'Test Cases'){
  //     this.activeNav = nav;
  //   }
  // }

  setActive(nav: string): void {
    this.activeNav = nav;
    this.navSelected.emit(nav);
  }
}
