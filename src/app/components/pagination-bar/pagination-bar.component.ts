import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../Task.type';

@Component({
  selector: 'app-pagination-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination-bar.component.html',
  styleUrl: './pagination-bar.component.css',
})
export class PaginationBarComponent {
  @Input() tasks!: Task[];
  @Input() total_pages!: number;
  @Input() current_page!: number;
  @Output() changePage: EventEmitter<any> = new EventEmitter();

  onChangePage(e: 'prev' | 'next'): void {
    this.changePage.emit(e);
  }
}
