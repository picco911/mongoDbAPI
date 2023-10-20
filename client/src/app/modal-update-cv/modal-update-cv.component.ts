import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import API_ENDPOINTS from 'src/app/constants/endpoints';
import HTTP_OPTIONS from 'src/app/constants/httpOptions';
import { CVCreateUpdateDTO } from '../models/cv-create-update-dto.model';
import { CVService } from '../services/cv.service';
import { CV } from '../models/cv.model';

@Component({
  selector: 'app-modal-update-post',
  templateUrl: './modal-update-cv.component.html',
  styleUrls: ['./modal-update-cv.component.css']
})
export class ModalUpdateCVComponent implements OnInit {
  form!: FormGroup;
  postToUpdate!: CV;

  updateSuccessful: boolean = false;
  updateFailed: boolean = false;


  constructor(public fb: FormBuilder, private httpClient: HttpClient, public activeModal: NgbActiveModal, private postService: CVService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [this.postToUpdate.id],
      name: [this.postToUpdate.name],
      surname: [this.postToUpdate.surname],
      eMail: [this.postToUpdate.eMail],
      phone: [this.postToUpdate.phone],
      eduName: [this.postToUpdate.eduName],
      eduFaculty: [this.postToUpdate.eduFaculty],
      eduLevel: [this.postToUpdate.eduLevel],
      eduStatus: [this.postToUpdate.eduStatus],
      workName: [this.postToUpdate.workName],
      workPosition: [this.postToUpdate.workPosition],
      workLoad: [this.postToUpdate.workLoad],
      workTime: [this.postToUpdate.workTime],
      skilDesc: [this.postToUpdate.skilDesc],
      skilType: [this.postToUpdate.skilType],
      skilAchievement: [this.postToUpdate.skilAchievement],
      addrCountry: [this.postToUpdate.addrCountry],
      addrIndex: [this.postToUpdate.addrIndex],
      addrCity: [this.postToUpdate.addrCity],
      addrStreet: [this.postToUpdate.addrStreet],
      addrNr: [this.postToUpdate.addrNr]
    });

    this.form.controls['id'].disable();
  }

  submitForm() {
    var postToUpdateDTO = {} as CVCreateUpdateDTO;

    postToUpdateDTO.name = this.form.get('name')!.value;
    postToUpdateDTO.surname = this.form.get('surname')!.value;
    postToUpdateDTO.eMail = this.form.get('eMail')!.value;
    postToUpdateDTO.phone = this.form.get('phone')!.value;
    postToUpdateDTO.eduName = this.form.get('eduName')!.value;
    postToUpdateDTO.eduFaculty = this.form.get('eduFaculty')!.value;
    postToUpdateDTO.eduLevel = this.form.get('eduLevel')!.value;
    postToUpdateDTO.eduStatus = this.form.get('eduStatus')!.value;
    postToUpdateDTO.workName = this.form.get('workName')!.value;
    postToUpdateDTO.workPosition = this.form.get('workPosition')!.value;
    postToUpdateDTO.workLoad = this.form.get('workLoad')!.value;
    postToUpdateDTO.workTime = this.form.get('workTime')!.value;
    postToUpdateDTO.skilDesc = this.form.get('skilDesc')!.value;
    postToUpdateDTO.skilType = this.form.get('skilType')!.value;
    postToUpdateDTO.skilAchievement = this.form.get('skilAchievement')!.value;
    postToUpdateDTO.addrCountry = this.form.get('addrCountry')!.value;
    postToUpdateDTO.addrIndex = this.form.get('addrIndex')!.value;
    postToUpdateDTO.addrCity = this.form.get('addrCity')!.value;
    postToUpdateDTO.addrStreet = this.form.get('addrStreet')!.value;
    postToUpdateDTO.addrNr = this.form.get('addrNr')!.value;

    this.httpClient
      .put(`${API_ENDPOINTS.UPDATE_POST}/${this.postToUpdate.id}`, postToUpdateDTO, HTTP_OPTIONS)
      .subscribe({
        next: (response) => {
          this.updateSuccessful = true;
          let updatedPostIndex = this.postService.allPosts.findIndex((post => post.id == this.postToUpdate.id));

          this.postService.allPosts[updatedPostIndex].name = postToUpdateDTO.name;
          this.postService.allPosts[updatedPostIndex].surname = postToUpdateDTO.surname;
          this.postService.allPosts[updatedPostIndex].eMail = postToUpdateDTO.eMail;
          this.postService.allPosts[updatedPostIndex].phone = postToUpdateDTO.phone;
          this.postService.allPosts[updatedPostIndex].eduName = postToUpdateDTO.eduName;
          this.postService.allPosts[updatedPostIndex].eduFaculty = postToUpdateDTO.eduFaculty;
          this.postService.allPosts[updatedPostIndex].eduLevel = postToUpdateDTO.eduLevel;
          this.postService.allPosts[updatedPostIndex].eduStatus = postToUpdateDTO.eduStatus;
          this.postService.allPosts[updatedPostIndex].workName = postToUpdateDTO.workName;
          this.postService.allPosts[updatedPostIndex].workPosition = postToUpdateDTO.workPosition;
          this.postService.allPosts[updatedPostIndex].workLoad = postToUpdateDTO.workLoad;
          this.postService.allPosts[updatedPostIndex].workTime = postToUpdateDTO.workTime;
          this.postService.allPosts[updatedPostIndex].skilDesc = postToUpdateDTO.skilDesc;
          this.postService.allPosts[updatedPostIndex].skilType = postToUpdateDTO.skilType;
          this.postService.allPosts[updatedPostIndex].skilAchievement = postToUpdateDTO.skilAchievement;
          this.postService.allPosts[updatedPostIndex].addrCountry = postToUpdateDTO.addrCountry;
          this.postService.allPosts[updatedPostIndex].addrIndex = postToUpdateDTO.addrIndex;
          this.postService.allPosts[updatedPostIndex].addrCity = postToUpdateDTO.addrCity;
          this.postService.allPosts[updatedPostIndex].addrStreet = postToUpdateDTO.addrStreet;
          this.postService.allPosts[updatedPostIndex].addrNr = postToUpdateDTO.addrNr;
       
          console.log('Successfully updated the cv! Response from server:');
          console.log(response);
        },
        error: (error: HttpErrorResponse) => {
          this.updateFailed = true;
          console.log(`Failed to update the cv! Response from server: "HTTP statuscode: ${error.status}: ${error.error}"`);
        },
      });
  }
}
