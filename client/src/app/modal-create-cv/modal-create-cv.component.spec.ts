import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateCVComponent } from './modal-create-cv.component';

describe('ModalCreateCVComponent', () => {
  let component: ModalCreateCVComponent;
  let fixture: ComponentFixture<ModalCreateCVComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCreateCVComponent]
    });
    fixture = TestBed.createComponent(ModalCreateCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
