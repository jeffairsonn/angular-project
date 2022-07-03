import { Component, Input, OnInit } from '@angular/core';
import { UploadCardService } from '../services/upload-card.service';


@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
  showInput = false;
  InputValue = ""

  @Input()
  name!: string;

  @Input()
  description!: string;

  @Input()
  image!: string;

  @Input()
  id!: string;

  constructor(
    private uploadCardService: UploadCardService,
  ) { }

  ngOnInit(): void {
    this.deleteCard;
  }

  deleteCard(course_id: string) {
    console.log(course_id);
    this.uploadCardService.deleteCard(course_id).subscribe((response) => {
      window.location.reload();
    });

    this.updateCard
  }

  showEditInput() {
    this.showInput = !this.showInput;
  }

  updateCard(course_id: string) {
    if (this.InputValue !== ""){
      this.uploadCardService.updateCard(course_id, this.InputValue).subscribe((response) => {
        window.location.reload();
      });
    }
  }
}
