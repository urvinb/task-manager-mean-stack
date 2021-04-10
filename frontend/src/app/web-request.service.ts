import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = '';
  }

  get(uri: string) {
    return this.http.get(`${uri}`);
  }

  post(uri: string, payload: Object) {
    return this.http.post(`${uri}`, payload);
  }

  patch(uri: string, payload: Object) {
    return this.http.patch(`${uri}`, payload);
  }

  delete(uri: string) {
    return this.http.delete(`${uri}`);
  }

  login(email: string, password: string) {
    return this.http.post(`users/login`, {
      email,
      password
    }, {
        observe: 'response'
      });
  }

  signup(email: string, password: string) {
    return this.http.post(`users`, {
      email,
      password
    }, {
        observe: 'response'
      });
  }


}
