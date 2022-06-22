import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = "";
  password = "";

  constructor(
    private authenticationService: AuthenticationService, 
    private router: Router,
    private appComponent: AppComponent
  ) { }

  ngOnInit(): void {
    const isAuthenticated = this.authenticationService.isLogged;
    if (isAuthenticated){
      this.router.navigateByUrl('/dashboard');
    }
    this.login
  }

  login() {
    this.authenticationService.login(this.email, this.password).subscribe((res) => {
      console.log(res);
      this.authenticationService.setToken(res.token, res.id);
      this.appComponent.checkiFiSAuth();
      this.router.navigateByUrl('/dashboard');
    })
  }
}
