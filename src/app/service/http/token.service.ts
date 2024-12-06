import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

const httpOptions: any = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
  observe: "response",
  withCredentials: true,
}

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http: HttpClient) { }

  getCsrf() {
    return this.http.get<any>(`${environment.apiUrl}/sanctum/csrf-cookie`, httpOptions)
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/user`, { withCredentials: true })
  }

  getUserspagination(page: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/user-pagination?page=` + page)
  }
}
