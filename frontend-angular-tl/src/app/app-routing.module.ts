import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { TasksComponent } from './modules/terminal_log/components/tasks/tasks.component';

const routes: Routes = [
  {path: 'tasks', component: TasksComponent},
  {path: '', pathMatch: 'full', redirectTo: 'tasks' },
  {path: '**', pathMatch: 'full', redirectTo: 'tasks'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
  ]
})
export class AppRoutingModule { }
