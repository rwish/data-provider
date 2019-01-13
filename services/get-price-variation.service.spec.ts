import { TestBed, inject } from '@angular/core/testing';

import { GetPriceVariationService } from './get-price-variation.service';

describe('GetPriceVariationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetPriceVariationService]
    });
  });

  it('should be created', inject([GetPriceVariationService], (service: GetPriceVariationService) => {
    expect(service).toBeTruthy();
  }));
});
