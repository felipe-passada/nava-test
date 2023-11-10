import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { API_BASE_URL } from '../config/app.config';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private storage: StorageService) { }

  login(email: string, password: string): Observable<HttpResponse<any>> {
    return this.httpClient.post(
      `${API_BASE_URL}/login`,
      {email, password},
      { observe: 'response'}
    );
  }

}
