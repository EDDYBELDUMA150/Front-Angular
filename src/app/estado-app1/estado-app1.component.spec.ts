import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstadoApp1Component } from './estado-app1.component';

describe('EstadoApp1Component', () => {
  let component: EstadoApp1Component;
  let fixture: ComponentFixture<EstadoApp1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstadoApp1Component]
    });
    fixture = TestBed.createComponent(EstadoApp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
