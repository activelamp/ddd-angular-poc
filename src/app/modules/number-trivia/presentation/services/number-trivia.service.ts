import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { numberTriviaSelectors } from '../store/selectors';
import { NumberTriviaInterface } from '../../data/models/number-trivia.model';
import { currentNumberSet, triviaForNumberRequested } from '../store/actions/number-trivia.actions';

@Injectable({
  providedIn: 'root',
})
export class NumberTriviaService {
  constructor(private store$: Store<any>) {}

  public numberTriviaLoaded$: Observable<boolean> = this.store$.pipe(
    select(numberTriviaSelectors.getNumberTriviaStateLoaded)
  );

  public numberTriviaLoading$: Observable<boolean> = this.store$.pipe(
    select(numberTriviaSelectors.getNumberTriviaStateLoading)
  );

  public failureMessage$: Observable<string | undefined> = this.store$.pipe(
    select(numberTriviaSelectors.getFailureMessage)
  );

  public numberTriviaForCurrentNumber$: any = (number: number) =>
    this.store$.pipe(
      select(numberTriviaSelectors.getNumberTriviaForCurrentNumberState(number)),
      tap((val) => {
        if (!val) this.store$.dispatch(triviaForNumberRequested({ theNumber: number }));
      }),
      map((trivia) => (!trivia ? null : trivia))
    );

  public setCurrentNumber(theNumber: number): void {
    this.store$.dispatch(currentNumberSet({ theNumber }));
  }
}
