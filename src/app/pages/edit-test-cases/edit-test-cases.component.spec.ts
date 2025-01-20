import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTestCasesComponent } from './edit-test-cases.component';

describe('EditTestCasesComponent', () => {
  let component: EditTestCasesComponent;
  let fixture: ComponentFixture<EditTestCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTestCasesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTestCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
