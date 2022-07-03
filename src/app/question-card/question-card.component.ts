import { Component, OnInit } from '@angular/core';
import { UploadCardService } from '../services/upload-card.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss']
})
export class QuestionCardComponent implements OnInit {
  id?: string
  course?: {name: string};

  constructor(
    private authenticationService: AuthenticationService,
    private uploadCardService: UploadCardService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const isAuthenticated = this.authenticationService.isLogged;
    if (!isAuthenticated){
      this.router.navigateByUrl('/login');
    }
    this.id = this.route.snapshot.paramMap.get('id') || "";
  
    this.getOneCard();
  }

  getOneCard() {
    if( this.id !== "" && this.id !== undefined) {
      console.log("ok alexa")
      this.uploadCardService.getOneCard(this.id).subscribe((response) => {
        this.course = response;
      });
    }
  }

}
