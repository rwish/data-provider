import { TestBed, inject } from '@angular/core/testing';

import { GetBookingsService } from './get-bookings.service';

describe('GetBookingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetBookingsService]
    });
  });

  it('should be created', inject([GetBookingsService], (service: GetBookingsService) => {
    expect(service).toBeTruthy();
  }));
});
