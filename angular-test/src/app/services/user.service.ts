import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError, timeout } from 'rxjs';
import { User } from '../models/User.interface';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL = 'http://127.0.0.1:8000'

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiURL}/users`).pipe(
      timeout(5000),
      catchError((error) => {
        return throwError(() => new Error(error));
      })
    );
  }

  createUser(user: User): Observable<any> {
    return this.httpClient.post<User>(`${this.apiURL}/user`, user, { observe: 'response' })
  }

}
