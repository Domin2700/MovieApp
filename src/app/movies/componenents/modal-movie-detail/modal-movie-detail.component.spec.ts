import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMovieDetailComponent } from './modal-movie-detail.component';

describe('ModalMovieDetailComponent', () => {
  let component: ModalMovieDetailComponent;
  let fixture: ComponentFixture<ModalMovieDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalMovieDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
