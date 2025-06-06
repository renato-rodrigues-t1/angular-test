import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrandingMovieCardComponent } from './tranding-movie-card.component';

describe('TrandingMovieCardComponent', () => {
  let component: TrandingMovieCardComponent;
  let fixture: ComponentFixture<TrandingMovieCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrandingMovieCardComponent]
    });
    fixture = TestBed.createComponent(TrandingMovieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
