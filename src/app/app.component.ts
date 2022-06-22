import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  isAuth = false;

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.checkiFiSAuth();

    this.checkiFiSAuth;
    this.disconect;
  }

  checkiFiSAuth() {
    const isAuthenticated = this.authenticationService.isLogged;
    if (isAuthenticated){
      this.isAuth = true;
    } else {
      this.isAuth = false;
    }
  }

  disconect() {
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    this.checkiFiSAuth()
    this.router.navigateByUrl('/login')
  }
}
