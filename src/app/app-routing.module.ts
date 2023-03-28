import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTodoComponent } from './components/list-todo/list-todo.component';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { UpdateTodoComponent } from './components/update-todo/update-todo.component';
import { DetailsTodoComponent } from './components/details-todo/details-todo.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path: 'todos', component: ListTodoComponent},
  {path: 'create-todo', component: CreateTodoComponent},
  {path: 'update-todo/:id', component: UpdateTodoComponent},
  {path: 'todo-details/:id', component: DetailsTodoComponent},
  
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
