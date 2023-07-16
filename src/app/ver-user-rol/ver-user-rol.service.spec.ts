import { TestBed } from '@angular/core/testing';

import { VerUserRolService } from './ver-user-rol.service';

describe('VerUserRolService', () => {
  let service: VerUserRolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerUserRolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
