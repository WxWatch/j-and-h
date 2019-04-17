import { AuthService } from './auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  theTitleOfThePage = 'fsdfdsd';
  myStuff = null;

  onCustomEvent(text) {
    this.theTitleOfThePage = text;
    console.log('you typed me', text);
  }

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }

  ngOnInit(): void {
    if (this.auth.isAuthenticated()) {
      this.auth.renewTokens();
    }
  }
}
