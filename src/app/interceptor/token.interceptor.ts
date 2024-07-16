import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse 
} from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService) {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> { debugger;
    console.log('Through interceptor')
    return next.handle(request);
  }
  // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   let newConstRequest: HttpRequest<any>;
  //   const token = localStorage.getItem('userInfo');
  //   // if(token){    
  //   newConstRequest = request.clone({
  //       setHeaders: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     });
    //}
    // else{
    //   // If no token is found, we can throw an error or handle it as needed
    //   return throwError(() => new HttpErrorResponse({ error: 'No authentication token found', status: 401 }));
    // }

    // return next.handle(newConstRequest)
    // .pipe(
    //   catchError((error: HttpErrorResponse) => {
    //     // Handle error here if needed
    //     return throwError(() => error);
    //   })
    // );
  //}
}
