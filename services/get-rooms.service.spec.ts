import { TestBed, inject } from '@angular/core/testing';

import { GetRoomsService } from './get-rooms.service';

describe('GetRoomsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetRoomsService]
    });
  });

  it('should be created', inject([GetRoomsService], (service: GetRoomsService) => {
    expect(service).toBeTruthy();
  }));
});
