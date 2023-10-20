import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import API_ENDPOINTS from 'src/app/constants/endpoints';
import HTTP_OPTIONS from 'src/app/constants/httpOptions';
import { CV } from '../models/cv.model';
import { CVService } from '../services/cv.service';

@Component({
  selector: 'app-modal-delete-cv-confirm',
  templateUrl: './modal-delete-cv-confirm.component.html',
  styleUrls: ['./modal-delete-cv-confirm.component.css']
})
export class ModalDeleteCVConfirmComponent {
  postToDelete!: CV;

  deleteSuccessful: boolean = false;
  deleteFailed: boolean = false;

  constructor(private httpClient: HttpClient, public activeModal: NgbActiveModal, private cvService: CVService) { }

  onClickBtnDelete() {
    this.httpClient
      .delete(`${API_ENDPOINTS.DELETE_POST}/${this.postToDelete.id}`, HTTP_OPTIONS)
      .subscribe({
        next: (response) => {
          this.deleteSuccessful = true;

          const index = this.cvService.allPosts.indexOf(this.postToDelete);
          if (index > -1) {
            this.cvService.allPosts.splice(index, 1); // 2nd parameter means remove one item only
          }

          console.log('Successfully deleted the post! Response from server:');
          console.log(response);
        },
        error: (error: HttpErrorResponse) => {
          this.deleteFailed = true;
          console.log('Failed to delete the post! Error from server:');
          console.log(error);
        },
      });
  }
}
