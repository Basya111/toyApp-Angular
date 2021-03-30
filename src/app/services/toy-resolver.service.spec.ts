import { TestBed } from '@angular/core/testing';

import { ToyResolverService } from './toy-resolver.service';

describe('ToyResolverService', () => {
  let service: ToyResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToyResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
