import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef  } from '@angular/material/dialog';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-test-plan',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-test-plan.component.html',
  styleUrl: './add-test-plan.component.scss'
})
export class AddTestPlanComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { title: string, testData: any },
    public dialogRef: MatDialogRef<AddTestPlanComponent>,
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.data.testData) {
      this.form.reset(this.data.testData)
    }
}

  close() {
    this.dialogRef.close()
  }

  onSubmit() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }
}
