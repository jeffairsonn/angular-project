import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

const backUrl = "http://localhost:8000"
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  token?: string | null;

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<{token: string, id: string}> {
    return this.http.post<{token: string, id: string}>(`${backUrl}/api/user/login`, {email, password});
  }

  register(email: string, password: string): Observable<{token: string, id: string}> {
    return this.http.post<{token: string, id: string}>(`${backUrl}/api/user/`, {email, password});
  }

  setToken(token: string, user_id: string) {
    this.token = token 
    localStorage.setItem('token', token);
    localStorage.setItem('user_id', user_id);
  }

  get isLogged(): boolean {
    this.token = localStorage.getItem('token') || null;
    return this.token !== undefined && this.token !== null;
  }
}
