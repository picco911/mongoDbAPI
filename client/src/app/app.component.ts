import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CV } from './models/cv.model';
import { CVService } from './services/cv.service';
import Endpoints from './constants/endpoints';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalCreateCVComponent } from './modal-create-cv/modal-create-cv.component';
import { ModalUpdateCVComponent } from './modal-update-cv/modal-update-cv.component';
import { ModalDeleteCVConfirmComponent } from './modal-delete-cv-confirm/modal-delete-cv-confirm.component';
import { ModalViewCVComponent } from './modal-view-cv/modal-view-cv.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'cvClient';

  modalOptions: NgbModalOptions = {
    size: 'lg'
  }
 
  

  constructor(private httpClient: HttpClient, public cvService: CVService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.httpClient.get<CV[]>(Endpoints.GET_ALL_POSTS)
      .subscribe(response => {
        this.cvService.allPosts = response;
        console.log(this.cvService.allPosts);
      })
  }

  onClickBtnViewPost(post: CV){
    const modalRef = this.modalService.open(ModalViewCVComponent, this.modalOptions);
    modalRef.componentInstance.postToUpdate = post;
  }
  onClickBtnCreateNewPost(){
    this.modalService.open(ModalCreateCVComponent)
  }

   onClickBtnUpdatePost(post: CV){
     const modalRef = this.modalService.open(ModalUpdateCVComponent, this.modalOptions);
     modalRef.componentInstance.postToUpdate = post;
   }

   onClickBtnDeletePost(post: CV) {
    const modalRef = this.modalService.open(ModalDeleteCVConfirmComponent, this.modalOptions);

    modalRef.componentInstance.postToDelete = post;
  }
  
}
