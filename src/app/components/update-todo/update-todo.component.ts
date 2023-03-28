import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {

  id!: number;
  todo: Todo = new Todo();

  constructor(private service: TodoService, private router: Router,
    private route: ActivatedRoute) { }
    
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getTodoById(this.id).subscribe(data =>{
      this.todo = data;
    }, error => console.log(error));
  }

  

  onSubmit(){
    this.service.updateTodo(this.id,
      this.todo).subscribe(data => {
        this.goToList();
      }, error => console.log(error));
  }
  
  goToList(){
    this.router.navigate(['/todos']);
  }

}
