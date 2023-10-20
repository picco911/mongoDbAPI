import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdateCVComponent } from './modal-update-cv.component';

describe('ModalUpdatePostComponent', () => {
  let component: ModalUpdateCVComponent;
  let fixture: ComponentFixture<ModalUpdateCVComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalUpdateCVComponent]
    });
    fixture = TestBed.createComponent(ModalUpdateCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
