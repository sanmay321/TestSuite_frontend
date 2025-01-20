import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTestSuiteComponent } from './add-test-suite.component';

describe('AddTestSuiteComponent', () => {
  let component: AddTestSuiteComponent;
  let fixture: ComponentFixture<AddTestSuiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTestSuiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTestSuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
