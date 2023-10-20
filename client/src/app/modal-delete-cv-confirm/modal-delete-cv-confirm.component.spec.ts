import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteCVConfirmComponent } from './modal-delete-cv-confirm.component';

describe('ModalDeletePostConfirmComponent', () => {
  let component: ModalDeleteCVConfirmComponent;
  let fixture: ComponentFixture<ModalDeleteCVConfirmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalDeleteCVConfirmComponent]
    });
    fixture = TestBed.createComponent(ModalDeleteCVConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
