import { TestBed } from '@angular/core/testing';

import { EstadoApp1Service } from './estado-app1.service';

describe('EstadoApp1Service', () => {
  let service: EstadoApp1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadoApp1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
