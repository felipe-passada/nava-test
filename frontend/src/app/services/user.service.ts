import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  fetchUsers(): Observable<any> {
    //TODO: set all api variables to a const file
    return this.httpClient.get('http://127.0.0.1:8080/users');
  }

  fetchDetails(id: string): Observable<any> {
    return this.httpClient.get(`http://127.0.0.1:8080/users/${id}`)
  }

  // batchLoadUsers(): Observable<any> {
  //   return this.httpClient.post('http://127.0.0.1:8080/users');
  // }

  editUser(id: string, user: any): Observable<any> {
    return this.httpClient.put(`http://127.0.0.1:8080/users/${id}`, user);
  }
  deleteUser(id: string): Observable<any> {
    return this.httpClient.delete(`http://127.0.0.1:8080/users/${id}`);
  }
}
