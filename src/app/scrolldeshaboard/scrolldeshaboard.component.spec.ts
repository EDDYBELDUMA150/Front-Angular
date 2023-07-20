import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrolldeshaboardComponent } from './scrolldeshaboard.component';

describe('ScrolldeshaboardComponent', () => {
  let component: ScrolldeshaboardComponent;
  let fixture: ComponentFixture<ScrolldeshaboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrolldeshaboardComponent]
    });
    fixture = TestBed.createComponent(ScrolldeshaboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
