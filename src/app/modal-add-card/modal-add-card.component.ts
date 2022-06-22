import { Component, OnInit } from '@angular/core';
import { UploadCardService } from '../services/upload-card.service';

@Component({
  selector: 'app-modal-add-card',
  templateUrl: './modal-add-card.component.html',
  styleUrls: ['./modal-add-card.component.scss']
})
export class ModalAddCardComponent implements OnInit {
  name = "";
  description = "";
  fileUrl = "";
  
  constructor(private uploadCardService: UploadCardService) { }

  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }

  ngOnInit(): void {
    this.onFileSelected
    this.createCard
  }

  onFileSelected(event: any) {
    const dataFile = event.target.files[0];

    if (dataFile) {
      this.uploadCardService.upload(dataFile).subscribe((response) => {
        this.fileUrl = response.image;
      });
    }
  }

  createCard() {
    this.uploadCardService.create({
      name: this.name,
      description: this.description,
      image: this.fileUrl,
      user_id:  localStorage.getItem('user_id') || "",
    }).subscribe(() => {
      location.reload();
    });
  }
}
