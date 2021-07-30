import { TestBed } from '@angular/core/testing';

import { NumberTriviaService } from './number-trivia.service';

describe('NumberTriviaService', () => {
  let service: NumberTriviaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberTriviaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
