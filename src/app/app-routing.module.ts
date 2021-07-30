import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'number-trivia',
    loadChildren: () =>
      import('./modules/number-trivia/number-trivia.module').then((m) => m.NumberTriviaModule),
  },
  { path: '**', redirectTo: 'number-trivia' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
