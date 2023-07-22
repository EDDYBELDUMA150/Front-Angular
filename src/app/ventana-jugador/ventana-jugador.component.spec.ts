import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaJugadorComponent } from './ventana-jugador.component';

describe('VentanaJugadorComponent', () => {
  let component: VentanaJugadorComponent;
  let fixture: ComponentFixture<VentanaJugadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentanaJugadorComponent]
    });
    fixture = TestBed.createComponent(VentanaJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
