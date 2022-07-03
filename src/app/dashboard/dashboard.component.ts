import { Component, Input, OnInit } from '@angular/core';
import { UploadCardService } from '../services/upload-card.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user_id = localStorage.getItem("user_id") || ""
  listOfCards?: Array<any>;
  
  constructor(
    private uploadCardService: UploadCardService,
    private authenticationService: AuthenticationService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const isAuthenticated = this.authenticationService.isLogged;
    if (!isAuthenticated){
      this.router.navigateByUrl('/login');
    }
    this.getCards()

    this.getCards;
  }

  getCards() {
    if( this.user_id !== "" && this.user_id !== undefined) {
      this.uploadCardService.getCards(this.user_id).subscribe((response) => {
        this.listOfCards = response;
      });
    }
  }
}
