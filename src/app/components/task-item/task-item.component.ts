import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../Task.type';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<any> = new EventEmitter();

  deleteTask(e: Task) {
    this.onDeleteTask.emit(e);
  }
}
