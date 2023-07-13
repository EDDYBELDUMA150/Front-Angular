import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprendizajeComponent } from './aprendizaje.component';

describe('AprendizajeComponent', () => {
  let component: AprendizajeComponent;
  let fixture: ComponentFixture<AprendizajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AprendizajeComponent]
    });
    fixture = TestBed.createComponent(AprendizajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
