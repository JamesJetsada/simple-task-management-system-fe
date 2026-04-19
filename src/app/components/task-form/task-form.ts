import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule
  ],
  templateUrl: './task-form.html',
  styleUrls: ['./task-form.css'],
})
export class TaskForm {
  task: any;

  constructor(
    public dialogRef: MatDialogRef<TaskForm>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // Clone the task to avoid modifying the original
    this.task = { ...data.task };
    // Format date for input type="date" (yyyy-MM-dd)
    if (this.task.dueDate) {
      this.task.dueDate = this.formatDateForInput(this.task.dueDate);
    }
  }

  // Format date to yyyy-MM-dd for input type="date"
  formatDateForInput(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close(this.task);
  }
}
