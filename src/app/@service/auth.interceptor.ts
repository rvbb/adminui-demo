/**
 * Created by Hoang NV<hoangnv01@gmail.com> at 22 Oct 2019
**/
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { AuthService } from './auth.service';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { DEFAULT_PAGE } from './global.constance';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    protected filter: any;
    private destroy$: Subject<void> = new Subject<void>();

    constructor(private router:Router, private authService: AuthService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.authService.isAuthenticated()
            .pipe(takeUntil(this.destroy$))
            .subscribe(loggedin => {
                if(!loggedin){
                    this.router.navigateByUrl(DEFAULT_PAGE);
                }
            });
        req = req.clone({
            // setHeaders: {                
            //     Authorization: `Bearer ${this.authService.getToken()}`
            // }            
        });
        return next.handle(req);
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
