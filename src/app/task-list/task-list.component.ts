import { Component } from '@angular/core';
import { ITask, TASK_MOCK } from '../models/actual-task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  searchText: any;
  inputTask: ITask = {
    status: false,
    priority: false,
    name: '',
    deadline: new Date()
  };

  tasks: ITask[] = TASK_MOCK;

  sort_by_priority(): void {
    this.tasks.sort(a => {
      return a.priority ? -1 : 1
    })
  }
  
  sort_by_status(): void {
    this.tasks.sort(a => {
      return a.status ? -1 : 1
    })
  }
  delete(task: ITask): void {
    let index = this.tasks.indexOf(task);
    if (index != -1)
      this.tasks.splice(index, 1);
  }
  createTask(): void {
    this.tasks.push({ ...this.inputTask });
  }
}
