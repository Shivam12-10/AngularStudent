import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/auth';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'https://localhost:7177/api/Users';

  constructor(private http: HttpClient) { }

  registerUser(userDetails: User) {
    return this.http.post(`${this.baseUrl}`, userDetails);
  }

  getUserByEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}`);
  }

  login(login: any): Observable<any> {
    debugger;
    const reqHeader = new HttpHeaders({ 'No-Auth': 'false' });
    return this.http.post<any>(`https://localhost:7177/api/Users/Auth`, login, { headers: reqHeader, responseType: 'text' as 'json' } )
  }

  // getToken(): string | null {
  //   return sessionStorage.getItem('access_token');
  // }
}
