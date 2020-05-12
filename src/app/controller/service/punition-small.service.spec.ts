import { TestBed } from '@angular/core/testing';

import { PunitionSmallService } from './punition-small.service';

describe('PunitionSmallService', () => {
  let service: PunitionSmallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PunitionSmallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
