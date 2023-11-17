import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Task } from '../Task.type';
import { Days } from './Days.type';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<any> = new EventEmitter();

  days: Days[] = [
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
    'Domingo',
  ];

  task: string = '';
  day: string = '';
  reminder: boolean = false;

  onSubmit(): void {
    const new_t: Task = {
      task: this.task,
      day: this.day,
      reminder: this.reminder,
    };

    if (Object.values(new_t).some((v) => v === '')) {
      alert('Preencha todos os campos.');
      return;
    }

    this.onAddTask.emit(new_t);

    this.task = '';
    this.day = '';
    this.reminder = false;
  }
}
