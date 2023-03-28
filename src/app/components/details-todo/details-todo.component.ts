import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-details-todo',
  templateUrl: './details-todo.component.html',
  styleUrls: ['./details-todo.component.css']
})
export class DetailsTodoComponent implements OnInit {

  id!: number;
  todo!: Todo;

  constructor(private route: ActivatedRoute, private service: TodoService,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo();
    this.service.getTodoById(this.id).subscribe(data => {
      this.todo = data;

    });
  }

  goToList() {
    this.router.navigate(['/todos'])
  }

}
