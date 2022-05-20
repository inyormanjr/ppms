import { TestBed } from '@angular/core/testing';

import { EskeyReceiveResolverResolver } from './eskey-receive-resolver.resolver';

describe('EskeyReceiveResolverResolver', () => {
  let resolver: EskeyReceiveResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(EskeyReceiveResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
