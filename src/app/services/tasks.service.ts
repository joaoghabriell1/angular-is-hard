import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../components/Task.type';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private api_url = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.api_url);
  }

  deleteTask(t: Task): Observable<Task> {
    return this.http.delete<Task>(`${this.api_url}/${t.id}`);
  }

  addTask(t: Task): Observable<Task> {
    return this.http.post<Task>(`${this.api_url}`, t);
  }
}
