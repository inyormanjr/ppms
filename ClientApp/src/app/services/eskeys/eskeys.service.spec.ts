import { TestBed } from '@angular/core/testing';

import { EskeysService } from './eskeys.service';

describe('EskeysService', () => {
  let service: EskeysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EskeysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
