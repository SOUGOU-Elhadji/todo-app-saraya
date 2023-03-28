import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  todo: Todo = new Todo();

  constructor(private service: TodoService, private route: Router) { }

  ngOnInit(): void {
  }

  public saveTodo(){
    this.service.createTodo(this.todo).subscribe(data => {
      console.log(data);
      this.goToList();
    },
    error => console.log(error));
  }

  goToList(){
    this.route.navigate(['/todos'])
  }

}
