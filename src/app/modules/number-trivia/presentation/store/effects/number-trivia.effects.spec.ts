import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { NumberTriviaEffects } from './number-trivia.effects';

describe('NumberTriviaEffects', () => {
  let actions$: Observable<any>;
  let effects: NumberTriviaEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NumberTriviaEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(NumberTriviaEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
