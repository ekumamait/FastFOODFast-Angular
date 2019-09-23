import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { HttpMethods } from '../../config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpService) { 
    
  }

  sendRequest = (data): Observable<any> => {
    const url = '/auth/login';
    const { POST } = HttpMethods;
    return this.http.makeRequestWithData(url, data, POST);
  }
}
