import { TestBed, inject } from '@angular/core/testing';

import { AboutUserResolveService } from './about-user-resolve.service';

describe('AboutUserResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AboutUserResolveService]
    });
  });

  it('should be created', inject([AboutUserResolveService], (service: AboutUserResolveService) => {
    expect(service).toBeTruthy();
  }));
});
