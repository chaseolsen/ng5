import { Injectable } from '@angular/core';
import { JwTHelper } from '@angular/angular-jwt';

@Injectable()
export class AuthGuardService {

  constructor(public jwtHelper: JwtHelper) {}

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');

    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }

}
