import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { EskeyEffects } from './eskey.effects';

describe('EskeyEffects', () => {
  let actions$: Observable<any>;
  let effects: EskeyEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EskeyEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(EskeyEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
