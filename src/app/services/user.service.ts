import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "";
  

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<Object>{
    return this.http.post(`${this.url}`, user);
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

}
