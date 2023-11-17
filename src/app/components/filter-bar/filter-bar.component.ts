import { Component, Output, EventEmitter } from '@angular/core';
import { Days } from '../add-task/Days.type';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.css',
})
export class FilterBarComponent {
  @Output() onFilterOnlyReminders: EventEmitter<any> = new EventEmitter();

  isChecked = false;

  onCheck(e: boolean) {
    this.onFilterOnlyReminders.emit(e);
  }
}
