import { TestBed } from '@angular/core/testing';

import { ChuckApiServiceService } from './chuck-api-service.service';

describe('ChuckApiServiceService', () => {
  let service: ChuckApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChuckApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
