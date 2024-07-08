import { TestBed } from '@angular/core/testing';

import { QuoteFallbackService } from './quote-fallback.service';

describe('QuoteFallbackService', () => {
  let service: QuoteFallbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuoteFallbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
