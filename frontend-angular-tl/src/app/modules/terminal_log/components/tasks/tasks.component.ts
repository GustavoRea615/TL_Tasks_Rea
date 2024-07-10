import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TasksService } from '../../tasks.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ModalTaskComponent } from './components/modal-task/modal-task.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  favorites: any[] = [];
  displayedColumns: string[] = ['title', 'description', 'createdAt', 'status', 'actions'];  
  data: any[] = [];
  dataSource = new MatTableDataSource<any>(this.data);

  constructor(
    private tasksService: TasksService, 
    private _snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }
  
  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks() {
    this.tasksService.getAllTasks().subscribe((response: any) => {
        this.data = response.tasks;
        this.dataSource = new MatTableDataSource<any>(this.data);
      },
      error => {
        this._snackBar.open('Failed to load tasks', 'Close', { duration: 3000 });
      }
    );
  }

  openModalCreateTask(){
    const dialogRef = this.dialog.open(ModalTaskComponent, {
      disableClose: false,
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.createTask(result);
      }
    });
  }

  openModalUpdateTask(data: any): void {
    const dialogRef = this.dialog.open(ModalTaskComponent, {
      width: '400px',
      disableClose: false,
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateTask(data._id, result);
      }
    });
  }

  createTask(data: any): void {
    this.tasksService.createTask(data).subscribe(
      (res: any) => {
        this._snackBar.open(res.response, 'Close', { duration: 3000 });
        this.fetchTasks();
      },
      error => {
        this._snackBar.open('Failed to create task', 'Close', { duration: 3000 });
      }
    );
  }

  updateTask(id: any, data: any): void {
    this.tasksService.updateTask(id, data).subscribe(
      (res: any) => {
        this._snackBar.open(res.response, 'Close', { duration: 3000 });
        this.fetchTasks();
      },
      error => {
        this._snackBar.open('Failed to update task', 'Close', { duration: 3000 });
      }
    );
  }

  deleteTask(id: string) {
    this.tasksService.deleteTask(id).subscribe(
      (res: any) => {
        this._snackBar.open(res.response, 'Close', { duration: 3000 });
        this.fetchTasks();
      },
      error => {
        this._snackBar.open('Failed to delete task', 'Close', { duration: 3000 });
      }
    );
  }
}
