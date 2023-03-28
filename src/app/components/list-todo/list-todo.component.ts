import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

  todos!: Todo[];

  constructor(private service: TodoService, private route: Router) { }

  ngOnInit(): void {
    this.getAllTodos();
  }

  public getAllTodos(){
    this.service.getTodoList().subscribe(data =>{
      this.todos = data;
    });
  }

  public todoDetails(id: number){
    this.route.navigate(['todo-details', id]);
  }

  public updateTodo(id: number){
    this.route.navigate(['update-todo', id]);
  }

  public deleteTodo(id: number){
    this.service.deleteTodo(id).subscribe(data =>{
      console.log(data);
      this.getAllTodos();
    });
  }

}
