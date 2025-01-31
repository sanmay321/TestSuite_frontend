import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-card',
  templateUrl: './status-card.component.html',
  styleUrls: ['./status-card.component.scss']
})
export class StatusCardComponent {
  @Input() cardData: any;

  // Generates formatted details based on the tag
  getDetails(): string[] {
    const { tag, details, links } = this.cardData;
    let dataLine = '';
    let linksLine = links?.map((link: { url: any; label: any; })  => `<a href="${link.url}" class="card-link">${link.label}</a>`).join(' | ') || '';

    if (tag === 'MileStone') {
      dataLine = `${details.activeTestPlan} active test plans | ${details.activeTestRun} active test runs`;
      return [`Due on ${details.dueDate} | ${linksLine}`, dataLine];
    } 
    else if (tag === 'TestRuns') {
      dataLine = `${details.passed} Passed, ${details.failed} Failed, ${details.incomplete} Incomplete, ${details.obsolete} Obsolete, ${details.notExecuted} Not Executed`;
      return [`By ${details.editor} on ${details.editedDate} | ${linksLine}`, dataLine];
    } 
    else if (tag === 'TestSuite') {
      dataLine = `${details.sections} Sections with ${details.testCases} Test Cases | ${details.activeTestRuns} Active Test Runs`;
      return [linksLine, dataLine]; // Links first, then data
    }

    return [];
  }

  getCompletion(): number  {
    return this.cardData.details.completion ?? this.cardData.details.percentage ?? -1;
  }
}