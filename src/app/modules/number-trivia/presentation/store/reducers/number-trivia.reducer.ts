import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { NumberTriviaInterface } from '../../../data/models/number-trivia.model';
import * as NumberTriviaActions from '../actions/number-trivia.actions';

export const numberTriviasFeatureKey = 'numberTrivias';

export interface State extends EntityState<NumberTriviaInterface> {
  currentNumber?: number;
  failureMessage?: string;
  loaded: boolean;
  loading: boolean;
}

export const adapter: EntityAdapter<NumberTriviaInterface> =
  createEntityAdapter<NumberTriviaInterface>();

export const initialState: State = adapter.getInitialState({
  loaded: false,
  loading: false,
});

export const reducer = createReducer(
  initialState,
  on(NumberTriviaActions.currentNumberSet, (state, action) => {
    return {
      ...state,
      currentNumber: action.theNumber,
      failureMessage: '',
    };
  }),
  on(NumberTriviaActions.triviaForNumberRequested, (state, action) => {
    return {
      ...state,
      currentNumber: action.theNumber,
      loading: true,
      loaded: false,
    };
  }),
  on(NumberTriviaActions.triviaForNumberFailed, (state, action) => {
    return {
      ...state,
      failureMessage: action.message,
      loading: false,
      loaded: false,
    };
  }),
  on(NumberTriviaActions.addNumberTrivia, (state, action) =>
    adapter.addOne(action.numberTrivia, {
      ...state,
      loading: false,
      loaded: true,
    })
  ),
  on(NumberTriviaActions.upsertNumberTrivia, (state, action) =>
    adapter.upsertOne(action.numberTrivia, state)
  ),
  on(NumberTriviaActions.addNumberTrivias, (state, action) =>
    adapter.addMany(action.numberTrivias, state)
  ),
  on(NumberTriviaActions.upsertNumberTrivias, (state, action) =>
    adapter.upsertMany(action.numberTrivias, state)
  ),
  on(NumberTriviaActions.updateNumberTrivia, (state, action) =>
    adapter.updateOne(action.numberTrivia, state)
  ),
  on(NumberTriviaActions.updateNumberTrivias, (state, action) =>
    adapter.updateMany(action.numberTrivias, state)
  ),
  on(NumberTriviaActions.deleteNumberTrivia, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(NumberTriviaActions.deleteNumberTrivias, (state, action) =>
    adapter.removeMany(action.ids, state)
  ),
  on(NumberTriviaActions.loadNumberTrivias, (state, action) =>
    adapter.setAll(action.numberTrivias, state)
  ),
  on(NumberTriviaActions.clearNumberTrivias, (state) => adapter.removeAll(state))
);

export const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();
