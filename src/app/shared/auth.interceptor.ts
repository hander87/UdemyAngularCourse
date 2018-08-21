import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted!', req);
    const copiedReq = req.clone({ // Copies incoming request - only read - not read.
      // headers: req.headers.append('Header', ''); // Add headers
      params: req.params.set('auth', this.authService.getToken()) // Set Auth token with every incoming request
    });
    return next.handle(req);
  }
}
