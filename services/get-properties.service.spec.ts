import { TestBed, inject } from '@angular/core/testing';

import { GetPropertiesService } from './get-properties.service';

describe('GetPropertiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetPropertiesService]
    });
  });

  it('should be created', inject([GetPropertiesService], (service: GetPropertiesService) => {
    expect(service).toBeTruthy();
  }));
});
