import { TestBed } from '@angular/core/testing';

import { PrductsService } from './prducts.service';

describe('PrductsService', () => {
  let service: PrductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
