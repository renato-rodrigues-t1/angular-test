import { TestBed } from '@angular/core/testing';

import { LoadStoreService } from './load-store.service';

describe('LoadStoreService', () => {
  let service: LoadStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
