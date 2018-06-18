import { Injectable } from '@angular/core';
import { User } from './models/User';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const USERS: User[] = [
  {id: 0, name: 'John', surname: 'Smith', age: 25, phone: '555555', role:'Admin'},
  {id: 1, name: 'Adam', surname: 'Johnson', age: 15, phone: '222222', role:'Admin'},
  {id: 2, name: 'Will', surname: 'Smith', age: 45, phone: '6666', role:'User'},
  {id: 3, name: 'John', surname: 'Travolta', age: 52, phone: '8888888', role:'Guest'}
]

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[]
  constructor(private http:HttpClient) { 
    this.users = USERS;
  }

  private getUserById(uid: number): User{
    return this.users.find(({id}) => uid === id);
  }

  getList(): Observable<User[]>{
    return this.http.get<User[]>('http://5b2153d4ca762000147b2730.mockapi.io/users');
  }

  get(id: number): Observable<User>{
    return this.http.get<User>(`http://5b2153d4ca762000147b2730.mockapi.io/users/${id}`);

  }

  delete(user: User): Observable<null>{
    return this.http.delete<null>(`http://5b2153d4ca762000147b2730.mockapi.io/users/${user.id}`);
  }
}
