import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { NumberTriviaPageComponent } from './presentation/containers/number-trivia-page/number-trivia-page.component';
import { TriviaControlsComponent } from './presentation/components/trivia-controls/trivia-controls.component';
import {
  numberTriviasFeatureKey,
  reducer,
} from './presentation/store/reducers/number-trivia.reducer';
import { NumberTriviaEffects } from './presentation/store/effects/number-trivia.effects';
import { TriviaDisplayComponent } from './presentation/components/trivia-display/trivia-display.component';

const routes: Routes = [
  {
    path: '',
    component: NumberTriviaPageComponent,
  },
];

@NgModule({
  declarations: [NumberTriviaPageComponent, TriviaControlsComponent, TriviaDisplayComponent],
  imports: [
    RouterModule.forChild(routes),
    EffectsModule.forFeature([NumberTriviaEffects]),
    StoreModule.forFeature(numberTriviasFeatureKey, reducer),
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class NumberTriviaModule {}
