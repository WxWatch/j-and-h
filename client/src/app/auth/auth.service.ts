import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as auth0 from 'auth0-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private pIdToken: string;
  private pAccessToken: string;
  private pExpiresAt: number;

  auth0 = new auth0.WebAuth({
    clientID: 'b4PIFJRKGCycin02l7Gt1HBorycACm0D',
    domain: 'j-and-h.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid profile'
  });

  constructor(public router: Router) {
    this.pIdToken = '';
    this.pAccessToken = '';
    this.pExpiresAt = 0;
  }

  get accessToken(): string {
    return this.pAccessToken;
  }

  get idToken(): string {
    return this.pIdToken;
  }

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.localLogin(authResult);
        this.router.navigate(['/']);
      } else if (err) {
        this.router.navigate(['/']);
        console.log(err);
      }
    });
  }

  private localLogin(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = (authResult.expiresIn * 1000) + Date.now();
    this.pAccessToken = authResult.accessToken;
    this.pIdToken = authResult.idToken;
    this.pExpiresAt = expiresAt;
  }

  public renewTokens(): void {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.localLogin(authResult);
      } else if (err) {
        alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
        this.logout();
      }
    });
  }

  public logout(): void {
    // Remove tokens and expiry time
    this.pAccessToken = '';
    this.pIdToken = '';
    this.pExpiresAt = 0;

    this.auth0.logout({
      return_to: window.location.origin
    });
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    return this.pAccessToken && Date.now() < this.pExpiresAt;
  }
}
