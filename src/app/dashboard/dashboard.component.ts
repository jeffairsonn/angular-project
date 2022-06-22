import { Component, Input, OnInit } from '@angular/core';
import { UploadCardService } from '../services/upload-card.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user_id = localStorage.getItem("user_id") || ""
  listOfCards?: Array<any>;
  
  constructor(private uploadCardService: UploadCardService) { }

  ngOnInit(): void {
    this.getCards()

    this.getCards;
  }

  getCards() {
    if( this.user_id !== "" && this.user_id !== undefined) {
      console.log("ok google")
      this.uploadCardService.getCards(this.user_id).subscribe((response) => {
        this.listOfCards = response;
      });
    }
  }
}
