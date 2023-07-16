import { TestBed } from '@angular/core/testing';

import { AdminActivService } from './admin-activ.service';

describe('AdminActivService', () => {
  let service: AdminActivService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminActivService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
