import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  name: string;
  age: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL = 'http://127.0.0.1:8000'

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiURL}/users`);
  }

  createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.apiURL}/user`, user);
  }


}
