// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/auth';

  constructor(private http: HttpClient) {}


  
  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }

  register(username: string, password: string, role: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { username, password, role });
  }

  isAuthenticated(): boolean {

     if (typeof window !== 'undefined' && localStorage.getItem('token')) {
      // Token existe, donc l'utilisateur est authentifié
      return true;
    }
    return false; // L'utilisateur n'est pas authentifié
  }
  

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUserRole(): string | null {
    return localStorage.getItem('role');
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }
}
