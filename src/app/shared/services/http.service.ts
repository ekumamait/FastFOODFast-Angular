import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APPCONFIG } from '../../config';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  base_url = APPCONFIG.base_url;

  constructor(private http: HttpClient) { }

  makeRequestWithData(endpoint, params, method) {
    return this.http[method](this.base_url + endpoint, params);
  }
}
