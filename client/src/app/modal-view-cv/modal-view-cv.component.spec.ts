import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalViewCVComponent } from './modal-view-cv.component';

describe('ModalViewCVComponent', () => {
  let component: ModalViewCVComponent;
  let fixture: ComponentFixture<ModalViewCVComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalViewCVComponent]
    });
    fixture = TestBed.createComponent(ModalViewCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
