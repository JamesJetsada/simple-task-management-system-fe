import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Task } from '../../model/Task';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskForm } from '../task-form/task-form';
import { TaskService } from '../../services/task';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-home',
  imports: [
    FormsModule,
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  
  constructor(
    private taskService: TaskService,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {}


  tasks: Task[] = [];
  isLoading = false;


  // Load all tasks on component init
  ngOnInit() {
    this.loadTasks();
  }

  // Load all tasks from API
  loadTasks() {
    this.isLoading = true;
    this.taskService.getTasks().subscribe({
      next: (tasks) => {
        this.tasks = tasks;
        this.isLoading = false;
        this.cdr.detectChanges();
        console.log('Tasks loaded successfully:', this.isLoading);
      },
      error: (error) => {
        console.error('Error loading tasks:', error);
        this.isLoading = false;
        this.cdr.detectChanges();
        console.log('Tasks loaded successfully:', this.isLoading);
      }
    });
  }

  // OPEN CREATE DIALOG
  openCreate() {
    const newTask = {
      title: '',
      description: '',
      priority: 'LOW',
      dueDate: '',
      status: 'TODO'
    };
    this.openDialog(newTask);
  }

  // OPEN EDIT DIALOG
  openEdit(task: any) {
    this.openDialog(task);
  }

  // OPEN DIALOG
  openDialog(task: any) {
    const dialogRef = this.dialog.open(TaskForm, {
      width: '500px',
      data: { task }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.saveTask(result);
      }
    });
  }

  // SAVE - Create or Update task via API
  saveTask(task: any) {

    console.log('Saving task:', task);
    if (task.id) {
      // UPDATE existing task
      this.taskService.updateTask(task.id, task).subscribe({
        next: (updatedTask) => {
          console.log('Task updated successfully:', updatedTask);
          this.loadTasks();
        },
        error: (error) => {
          console.error('Error updating task:', error);

        }
      });
    } else {
      // CREATE new task
      this.taskService.createTask(task).subscribe({
        next: (newTask) => {
          console.log('Task created successfully:', newTask);
          this.loadTasks(); 
        },
        error: (error) => {
          console.error('Error creating task:', error);

        }
      });
    }
  }

  // DELETE task via API
  deleteTask(id: number) {

    this.taskService.deleteTask(id).subscribe({
      next: () => {
        this.loadTasks(); // Refresh list
      },
      error: (error) => {
        console.error('Error deleting task:', error);

      }
    });
  }

  // CHANGE STATUS
  changeStatus(task: Task, status: any) {

    const updatedTask = { ...task, status };
    this.taskService.updateTask(task.id, updatedTask).subscribe({
      next: (result) => {
        this.loadTasks(); // Refresh list
      },
      error: (error) => {
        console.error('Error updating task status:', error);
 
      }
    });
  }

  // Format date to Buddhist Era (พ.ศ.) dd/MM/yyyy
  formatDate(dateString: string): string {
    if (!dateString) return '-';
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const yearBE = date.getFullYear();
    return `${day}/${month}/${yearBE}`;
  }
}
