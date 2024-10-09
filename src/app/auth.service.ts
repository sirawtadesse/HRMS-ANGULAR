
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from './models'; 
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersUrl = 'api/users'; 
  private loggedInUser: User | null = null;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<User | null> {
    return this.http.get<User[]>(`${this.usersUrl}?username=${username}&password=${password}`)
      .pipe(
        map(users => {
          this.loggedInUser = users.length > 0 ? users[0] : null;
          return this.loggedInUser;
        }),
        catchError(() => of(null))
      );
  }

  logout() {
    this.loggedInUser = null;
  }

  isLoggedIn(): boolean {
    return this.loggedInUser !== null;
  }

  getLoggedInUser(): User | null {
    return this.loggedInUser;
  }
}