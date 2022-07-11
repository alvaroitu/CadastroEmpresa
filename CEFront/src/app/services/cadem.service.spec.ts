import { TestBed } from '@angular/core/testing';

import { CademService } from './cadem.service';

describe('CademService', () => {
  let service: CademService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CademService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
