import { Component, Input } from '@angular/core';
import { ITask, TASK_MOCK } from '../models/actual-task';

@Component({
  selector: 'app-actual-task',
  templateUrl: './actual-task.component.html',
  styleUrls: ['./actual-task.component.css']
})
export class ActualTaskComponent {
  
  @Input()
  task: ITask = {
  status:  false,
  priority: true,
  name:  "Sport",
  deadline:  new Date (2023,8,30)
    }
}
