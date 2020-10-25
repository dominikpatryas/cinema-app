import { Injectable } from '@angular/core';
import {User} from '../_models/User';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  base = environment.apiUrl + 'auth/';
  jwtHelper = new JwtHelperService();
  dekodedToken: any;
  currentUser: User;
  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(this.base + 'login', model)
      .pipe(map((response: any) =>  {
          const user = response;
          if (user) {
            localStorage.setItem('token', user.token);
            localStorage.setItem('user', JSON.stringify(user.user));
            this.dekodedToken = this.jwtHelper.decodeToken(user.token);
          }
        }
      ));
  }
  register(user: User) {
    return this.http.post(this.base + 'register', user);
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
