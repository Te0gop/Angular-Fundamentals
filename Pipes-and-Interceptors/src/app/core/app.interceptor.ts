import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { catchError, filter, map, Observable, of } from "rxjs";
import { environment } from "src/environments/environment";

const apiURL = environment.apiURL;

@Injectable()
export class AppInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(!req.url.includes('http')) {
            req = req.clone({
                url: `${apiURL}${req.url}`
            });
        }
        // if(req.url.includes(apiURL)) {

        //     req = req.clone({
        //         withCredentials: true
        //     });
        // }
        return next.handle(req).pipe(
            map(e => {
                if(e instanceof HttpResponse && e.url?.includes('login')) {
                    const authToken = e.headers.get('Authentication')
                }
                return e;
            }),
            catchError(err => {
                console.error(err);
                return of(err);
            })
        );
    }
}

export const appInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
};