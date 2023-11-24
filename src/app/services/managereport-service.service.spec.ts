import { TestBed } from '@angular/core/testing';

import { ManagereportServiceService } from './managereport-service.service';

describe('ManagereportServiceService', () => {
  let service: ManagereportServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagereportServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
