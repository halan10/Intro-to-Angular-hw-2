import { Component } from '@angular/core';
import { ITask, TASK_MOCK } from '../models/actual-task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: ITask[] = TASK_MOCK;
}
