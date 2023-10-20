import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CVService } from '../services/cv.service';
import { CV } from '../models/cv.model';

@Component({
  selector: 'app-modal-update-cv',
  templateUrl: './modal-view-cv.component.html',
  styleUrls: ['./modal-view-cv.component.css']
})
export class ModalViewCVComponent implements OnInit {
  form!: FormGroup;
  postToUpdate!: CV;

  updateSuccessful: boolean = false;
  updateFailed: boolean = false;

  constructor(public fb: FormBuilder, private httpClient: HttpClient, public activeModal: NgbActiveModal, private cvService: CVService) { }

  ngOnInit(): void {

  }


}
