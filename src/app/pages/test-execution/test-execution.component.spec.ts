import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestExecutionComponent } from './test-execution.component';

describe('TestExecutionComponent', () => {
  let component: TestExecutionComponent;
  let fixture: ComponentFixture<TestExecutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestExecutionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
