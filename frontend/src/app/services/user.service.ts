import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, Observable } from 'rxjs';
import { API_BASE_URL } from '../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  fetchUsers(): Observable<any> {
    return this.httpClient.get(`${API_BASE_URL}/users`);
  }

  fetchDetails(id: string): Observable<any> {
    return this.httpClient.get(`${API_BASE_URL}/users/${id}`)
  }

  batchLoadUsers(): Observable<any> {
    return this.httpClient.post(`${API_BASE_URL}/users`, {});
  }

  editUser(id: string, user: any): Observable<any> {
    return this.httpClient.put(`${API_BASE_URL}/users/${id}`, user);
  }

  deleteUser(id: string): Observable<any> {
    return this.httpClient.delete(`${API_BASE_URL}/users/${id}`);
  }
}
