import { TestBed } from '@angular/core/testing';

import { PermanenceScheduleSService } from './permanence-schedule-s.service';

describe('PermanenceScheduleSService', () => {
  let service: PermanenceScheduleSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermanenceScheduleSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
