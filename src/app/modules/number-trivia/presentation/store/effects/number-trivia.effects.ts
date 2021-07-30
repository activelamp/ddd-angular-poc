import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import {
  addNumberTrivia,
  triviaForNumberFailed,
  triviaForNumberRequested,
} from '../actions/number-trivia.actions';
import { GetConcreteNumberTriviaUsecase } from '../../../domain/usecases/get-concrete-number-trivia.usecase';

@Injectable()
export class NumberTriviaEffects {
  getTriviaForConcreteNumber$ = createEffect(() =>
    this.actions$.pipe(
      ofType(triviaForNumberRequested),
      mergeMap((action) => {
        const req = this.getConcreteNumberTriviaUsecase.execute(action);
        return req.pipe(
          map((data) => {
            if (data.isLeft()) {
              return triviaForNumberFailed({ message: data.value.errorValue() });
            }
            return addNumberTrivia({ numberTrivia: data.value.getValue() });
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private getConcreteNumberTriviaUsecase: GetConcreteNumberTriviaUsecase
  ) {}
}
