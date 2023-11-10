import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../config/app.config';
import { StorageService } from '../services/storage.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor(public storage: StorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let localUser = this.storage.getLocalUser();

    let N = API_BASE_URL.length;
    let requestToAPI = request.url.substring(0, N) == API_BASE_URL;

    if (localUser && requestToAPI) {
      const authReq = request.clone({headers: request.headers.set('Authorization', 'Bearer ' + localUser)});
      return next.handle(authReq);
    }
    else {
      return next.handle(request);
    }
  }
}
