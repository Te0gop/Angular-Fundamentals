import { InjectionToken } from "@angular/core";

export const API_URL_TOKEN = new InjectionToken('API_URL');
export const apiURLprovider = {
    provide: API_URL_TOKEN,
    useValue: 'http://localhost:4000/api/'
 }