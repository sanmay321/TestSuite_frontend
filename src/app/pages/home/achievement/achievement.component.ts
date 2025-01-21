import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.scss']
})
export class AchievementComponent implements OnInit {
  achievements = [
    { target: 65, value: 0, description: 'of customers increase test coverage by more than half using TestRail' },
    { target: 82, value: 0, description: 'of customers significantly increase their test visibility' },
    { target: 84, value: 0, description: 'of customers save up to 3 hours per QA team member — every single week' }
  ];

  ngOnInit() {
    this.animatePercentages();
  }

  animatePercentages() {
    this.achievements.forEach((achievement) => {
      const interval = setInterval(() => {
        if (achievement.value < achievement.target) {
          achievement.value += 1; // Increment by whole numbers
        } else {
          achievement.value = achievement.target; // Ensure exact target at the end
          clearInterval(interval);
        }
      }, 50); // Adjust speed as needed
    });
  }
}