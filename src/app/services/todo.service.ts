import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private URL = "http://localhost:8080/api/todos"

  constructor(private httpClient: HttpClient) { }

  public createTodo(todo: Todo): Observable<Object>{
    return this.httpClient.post(`${this.URL}`, todo);
  }

  public getTodoList(): Observable<Todo[]>{
    return this.httpClient.get<Todo[]>(`${this.URL}`);
  }

  public getTodoById(id: number): Observable<Todo>{
    return this.httpClient.get<Todo>(`${this.URL}/${id}`);
  }

  public updateTodo(id: number, programmer: Todo): Observable<Object>{
    return this.httpClient.put<Todo>(`${this.URL}/${id}`, programmer);
  }

  public deleteTodo(id: number): Observable<Object>{
    return this.httpClient.delete<Todo>(`${this.URL}/${id}`);
  }
}
