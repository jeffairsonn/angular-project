import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {
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
    this.subscribe
  }

  subscribe() {
    console.log(this.email, this.password);
    this.authenticationService.register(this.email, this.password).subscribe((res) => {
      this.authenticationService.setToken(res.token, res.id);
      this.appComponent.checkiFiSAuth();
      this.router.navigateByUrl('/dashboard');
    })
  }
}
