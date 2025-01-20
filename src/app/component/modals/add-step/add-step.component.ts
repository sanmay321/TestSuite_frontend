import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef  } from '@angular/material/dialog';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-test-plan',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-step.component.html',
  styleUrl: './add-step.component.scss'
})
export class AddStepComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { title: string, testData: any },
    public dialogRef: MatDialogRef<AddStepComponent>,
  ) {
    this.form = this.fb.group({
      description: ['', Validators.required],
      expectedResult: ['', Validators.required],
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
