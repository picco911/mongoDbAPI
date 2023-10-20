import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalCreateCVComponent } from './modal-create-cv/modal-create-cv.component';
import { ModalUpdateCVComponent } from './modal-update-cv/modal-update-cv.component';
import { ModalDeleteCVConfirmComponent } from './modal-delete-cv-confirm/modal-delete-cv-confirm.component';
import { ModalViewCVComponent } from './modal-view-cv/modal-view-cv.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalCreateCVComponent,
    ModalUpdateCVComponent,
    ModalDeleteCVConfirmComponent,
    ModalViewCVComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }