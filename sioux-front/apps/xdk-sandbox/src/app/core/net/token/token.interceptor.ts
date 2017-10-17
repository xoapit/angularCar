import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpSentEvent,
  HttpHeaderResponse,
  HttpProgressEvent,
  HttpResponse,
  HttpUserEvent,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TokenService } from './token.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { environment } from '../../../../environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}

  private goLogin() {
    const router = this.injector.get(Router);
    this.injector.get(Router).navigate(['/login']);
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    let header: HttpHeaders = null;
    if (!req.url.includes('auth/') && !req.url.includes('assets/')) {
      const authData = this.injector.get(TokenService).data;
      if (!authData.access_token) {
        this.goLogin();
        return Observable.create(observer => observer.error({ status: 401 }));
      }
      header = req.headers.set('Authorization', `Bearer ${authData.access_token}`);
    }

    let url = req.url;
    if (!url.startsWith('https://') && !url.startsWith('http://')) {
      url = environment.SERVER_URL + url;
    }

    const newReq = req.clone({
      headers: header,
      url: url
    });

    return next
      .handle(newReq)
      .mergeMap((event: any) => {
        if (event instanceof HttpResponse && event.status !== 200) {
          // if error, create error to throw back below
          // return Observable.create(observer => observer.error(event));
        }
        return Observable.create(observer => observer.next(event));
      })
      .catch((res: HttpResponse<any>) => {
        switch (res.status) {
          case 401:
            this.goLogin();
            break;
          case 200:
            console.log('Error while processing');
            break;
          case 404:
            // 404
            break;
        }
        return Observable.throw(res);
      });
  }
}
