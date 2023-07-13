import { TestBed } from '@angular/core/testing';

import { AprendizajeService } from './aprendizaje.service';

describe('AprendizajeService', () => {
  let service: AprendizajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AprendizajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
