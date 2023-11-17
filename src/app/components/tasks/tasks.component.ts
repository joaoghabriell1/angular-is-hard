import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../Task.type';
import { TasksService } from '../../services/tasks.service';
import { TaskItemComponent } from '../task-item/task-item.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import { FilterBarComponent } from '../filter-bar/filter-bar.component';
import { PaginationBarComponent } from '../pagination-bar/pagination-bar.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    CommonModule,
    TaskItemComponent,
    AddTaskComponent,
    FilterBarComponent,
    PaginationBarComponent,
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks: Task[] = [];
  current_page: number = 1;
  total_pages!: number;

  constructor(private service: TasksService) {}

  ngOnInit(): void {
    this.service.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
      this.updateTotalPages();
    });
  }

  onFilterOnlyReminders(e: boolean): void {
    if (e) {
      this.tasks = this.tasks.filter((task) => task.reminder);
      this.updateTotalPages();
      return;
    }

    this.service.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
      this.updateTotalPages();
    });
  }

  onDeleteTask(e: Task): void {
    this.service.deleteTask(e).subscribe((res) => {
      this.tasks = this.tasks.filter((task) => task.id !== e.id);
      this.updateTotalPages();

      if (this.current_page > this.total_pages && this.current_page > 1) {
        this.current_page = this.current_page - 1;
      }
    });
  }

  onAddTask(e: Task): void {
    this.service.addTask(e).subscribe((t) => {
      this.tasks = [...this.tasks, t];
      this.updateTotalPages();
    });
  }

  onChangePage(e: 'prev' | 'next'): void {
    if (e === 'prev' && this.current_page > 1) {
      this.current_page -= 1;
    }

    if (e === 'next' && this.current_page < this.total_pages) {
      this.current_page += 1;
    }
  }

  updateTotalPages() {
    this.total_pages = Math.ceil(this.tasks.length / 5) || 1;
  }
}
