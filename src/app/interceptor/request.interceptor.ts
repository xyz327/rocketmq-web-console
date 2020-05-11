import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse } from '../modal/api-response';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  private apiHost: string = 'http://localhost:8080';
  private headers: HttpHeaders
  constructor() {
    if (this.apiHost.endsWith('/')) {
      this.apiHost = this.apiHost.substr(0, this.apiHost.length - 1);
    }
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let url = request.url;
    if (!url.startsWith('http')) {
      if (!url.startsWith('/')) {
        url = '/' + url;
      }
      url = this.apiHost + url;
    }
    const headers = this.headers
    const newRequest = request.clone({
      url,
      headers,
      withCredentials: true
    });
    return next.handle(newRequest).pipe(map((httpEvent:HttpEvent<unknown>)=>{
      if(httpEvent instanceof HttpResponse){
          const responseBody:ApiResponse<unknown> = httpEvent.body
          if(responseBody.status != 0){
              //TODO 异常
          }
          return httpEvent.clone({
            body: responseBody.data
          })
      }
      return httpEvent;
    }));
  }
}
