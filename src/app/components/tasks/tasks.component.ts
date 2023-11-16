import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../Task.type';
import { TasksService } from '../../services/tasks.service';
import { TaskItemComponent } from '../task-item/task-item.component';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItemComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks: Task[] = [];

  constructor(private service: TasksService) {}

  ngOnInit(): void {
    this.service.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  onDeleteTask(e: Task): void {
    this.service.deleteTask(e).subscribe((res) => {
      this.tasks = this.tasks.filter((task) => task.id !== e.id);
    });
  }

  onAddTask(e: Task): void {
    this.service.addTask(e).subscribe((t) => {
      console.log(t);
      this.tasks = [...this.tasks, t];
    });
  }
}
