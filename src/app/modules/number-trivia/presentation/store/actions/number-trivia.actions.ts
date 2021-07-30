import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { NumberTriviaInterface } from '../../../data/models/number-trivia.model';

export const currentNumberSet = createAction(
  '[NumberTriviaInterface/API] Current Number was set',
  props<{ theNumber: number }>()
);

export const triviaForNumberRequested = createAction(
  '[NumberTriviaInterface/API] Load NumberTriviaInterface for Concrete Number',
  props<{ theNumber: number }>()
);

export const triviaForNumberFailed = createAction(
  '[NumberTriviaInterface/API] Failed NumberTriviaInterface for Concrete Number',
  props<{ message: string }>()
);

export const loadNumberTrivias = createAction(
  '[NumberTriviaInterface/API] Load NumberTrivias',
  props<{ numberTrivias: NumberTriviaInterface[] }>()
);

export const addNumberTrivia = createAction(
  '[NumberTriviaInterface/API] Add NumberTriviaInterface',
  props<{ numberTrivia: any }>()
);

export const upsertNumberTrivia = createAction(
  '[NumberTriviaInterface/API] Upsert NumberTriviaInterface',
  props<{ numberTrivia: NumberTriviaInterface }>()
);

export const addNumberTrivias = createAction(
  '[NumberTriviaInterface/API] Add NumberTrivias',
  props<{ numberTrivias: NumberTriviaInterface[] }>()
);

export const upsertNumberTrivias = createAction(
  '[NumberTriviaInterface/API] Upsert NumberTrivias',
  props<{ numberTrivias: NumberTriviaInterface[] }>()
);

export const updateNumberTrivia = createAction(
  '[NumberTriviaInterface/API] Update NumberTriviaInterface',
  props<{ numberTrivia: Update<NumberTriviaInterface> }>()
);

export const updateNumberTrivias = createAction(
  '[NumberTriviaInterface/API] Update NumberTrivias',
  props<{ numberTrivias: Update<NumberTriviaInterface>[] }>()
);

export const deleteNumberTrivia = createAction(
  '[NumberTriviaInterface/API] Delete NumberTriviaInterface',
  props<{ id: string }>()
);

export const deleteNumberTrivias = createAction(
  '[NumberTriviaInterface/API] Delete NumberTrivias',
  props<{ ids: string[] }>()
);

export const clearNumberTrivias = createAction('[NumberTriviaInterface/API] Clear NumberTrivias');
