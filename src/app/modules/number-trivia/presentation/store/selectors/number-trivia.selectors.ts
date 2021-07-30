import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers/number-trivia.reducer';

export const getNumberTriviaState = createFeatureSelector<fromFeature.State>(
  fromFeature.numberTriviasFeatureKey
);

export const getNumberTriviaStateLoaded = createSelector(
  getNumberTriviaState,
  (numberTrivia) => numberTrivia && numberTrivia.loaded
);

export const getNumberTriviaStateLoading = createSelector(
  getNumberTriviaState,
  (numberTrivia) => numberTrivia && numberTrivia.loading
);

export const getCurrentNumber = createSelector(
  getNumberTriviaState,
  (numberTrivia) => numberTrivia && numberTrivia.currentNumber
);

export const getFailureMessage = createSelector(
  getNumberTriviaState,
  (numberTrivia) => numberTrivia && numberTrivia.failureMessage
);

export const getNumberTriviaForCurrentNumberState = (currentNumber: number) =>
  createSelector(
    getNumberTriviaState,
    (numberTrivia) => numberTrivia && numberTrivia.entities[`${currentNumber}`]
  );
