import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeshaboardComponent } from './deshaboard.component';

describe('DeshaboardComponent', () => {
  let component: DeshaboardComponent;
  let fixture: ComponentFixture<DeshaboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeshaboardComponent]
    });
    fixture = TestBed.createComponent(DeshaboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
