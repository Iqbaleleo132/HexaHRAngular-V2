import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private jwtHelper: JwtHelperService) { }

  isLoggedIn() {
    const token = localStorage.getItem('token'); // get token from local storage
    return token !== null && !this.jwtHelper.isTokenExpired(token);

    // if (token) {
    //   const payload = atob(token.split('.')[1]); // decode payload of token
    //   const parsedPayload = JSON.parse(payload); // convert payload into an Object

    //   return parsedPayload.exp > Date.now() / 1000; // check if token is expired
    // }

    // // Return false if token is null or undefined
    // return false;
  }

  getName() {
    const token = localStorage.getItem('token');
 
    if (token !== null) {
      const decodedToken = this.jwtHelper.decodeToken(token); // Use 'token' variable as the parameter
      return decodedToken.name;
    }
    return null; // Handle the case when token is null

  }

}
