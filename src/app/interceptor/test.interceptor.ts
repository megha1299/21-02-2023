import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import {tap, catchError, of} from 'rxjs'
import { ServicesService } from '../dataservice/services.service';

@Injectable()
export class TestInterceptor implements HttpInterceptor {

  constructor(private toastr: ToastrService, private service: ServicesService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = 'ApiUrl';
    const cloned =  request.clone({
      withCredentials: false,
      headers: request.headers.set('Header-Authorization', 'Token ${ token}')
    })
    console.log(request);
    return next.handle(cloned).pipe(
      tap((evt:any)=> 
      {
        console.log(evt);
        console.log(Math.round(evt.loaded/evt.total * 100));
        this.service.working.next(true);
      }),
      catchError( (err: any) => {
        if(err instanceof HttpErrorResponse)
        this.toastr.error('Failed',err.status.toString());
        return of(err);
      }),
      finalize(()=>{
        this.service.working.next(false);
      })
    )}
}
