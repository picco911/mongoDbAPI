import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import API_ENDPOINTS from 'src/app/constants/endpoints';
import HTTP_OPTIONS from 'src/app/constants/httpOptions';
import { CVCreateUpdateDTO } from '../models/cv-create-update-dto.model';
import { CVService } from '../services/cv.service';
import { CV } from '../models/cv.model';

@Component({
  selector: 'app-modal-create-cv',
  templateUrl: './modal-create-cv.component.html',
  styleUrls: ['./modal-create-cv.component.css']
})
export class ModalCreateCVComponent {
  form!: FormGroup;

  createSuccessful: boolean = false;
  createFailed: boolean = false;


  constructor(public formBuilder: FormBuilder, private httpClient: HttpClient, public activeModal: NgbActiveModal, private cvService: CVService) {
    this.form = this.formBuilder.group({
      name: [''],
      surname: [''],
      eMail: [''],
      phone: [''],
      eduName: [''],
      eduFaculty: [''],
      eduLevel: [''],
      eduStatus: [''],
      workName: [''],
      workPosition: [''],
      workLoad: [''],
      workTime: [''],
      skilDesc: [''],
      skilType: [''],
      skilAchievement: [''],
      addrCountry: [''],
      addrIndex: [''],
      addrCity: [''],
      addrStreet: [''],
      addrNr: ['']
    });
  }

  submitForm() {
    var postToCreate = {} as CVCreateUpdateDTO;

    postToCreate.name = this.form.get('name')!.value;
    postToCreate.surname = this.form.get('surname')!.value;
    postToCreate.eMail = this.form.get('eMail')!.value;
    postToCreate.phone = this.form.get('phone')!.value;
    postToCreate.eduName = this.form.get('eduName')!.value;
    postToCreate.eduFaculty = this.form.get('eduFaculty')!.value;
    postToCreate.eduLevel = this.form.get('eduLevel')!.value;
    postToCreate.eduStatus = this.form.get('eduStatus')!.value;
    postToCreate.workName = this.form.get('workName')!.value;
    postToCreate.workPosition = this.form.get('workPosition')!.value;
    postToCreate.workLoad = this.form.get('workLoad')!.value;
    postToCreate.workTime = this.form.get('workTime')!.value;
    postToCreate.skilDesc = this.form.get('skilDesc')!.value;
    postToCreate.skilType = this.form.get('skilType')!.value;
    postToCreate.skilAchievement = this.form.get('skilAchievement')!.value;
    postToCreate.addrCountry = this.form.get('addrCountry')!.value;
    postToCreate.addrIndex = this.form.get('addrIndex')!.value;
    postToCreate.addrCity = this.form.get('addrCity')!.value;
    postToCreate.addrStreet = this.form.get('addrStreet')!.value;
    postToCreate.addrNr = this.form.get('addrNr')!.value;

    console.log('cb'+this.form.get('eduStatus')!.value);

    this.httpClient
      .post(API_ENDPOINTS.CREATE_POST, postToCreate, HTTP_OPTIONS)
      .subscribe({
        next: (createdPostFromServer) => {
          this.createSuccessful = true;

          this.cvService.allPosts.push(createdPostFromServer as CV);

          console.log('Successfully created a post! Response from server:');
          console.log(createdPostFromServer);
        },
        error: (error: HttpErrorResponse) => {
          this.createFailed = true;
          console.log(`Failed to create post! Response from server: "HTTP statuscode: ${error.status}: ${error.error}"`);
        },
      });
  }
}
