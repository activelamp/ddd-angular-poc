import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NumberTriviaService } from '../../services/number-trivia.service';
import { NumberTriviaInterface } from '../../../data/models/number-trivia.model';

@Component({
  selector: 'app-number-trivia-page',
  templateUrl: './number-trivia-page.component.html',
  styleUrls: ['./number-trivia-page.component.scss'],
})
export class NumberTriviaPageComponent implements OnInit {
  message!: Observable<string>;

  trivia!: Observable<NumberTriviaInterface>;

  numberTriviaLoaded$ = this.numberTriviaService.numberTriviaLoaded$;

  numberTriviaLoading$ = this.numberTriviaService.numberTriviaLoading$;

  failureMessage$ = this.numberTriviaService.failureMessage$;

  currentTrivia$!: Observable<NumberTriviaInterface>;

  constructor(private numberTriviaService: NumberTriviaService) {}

  ngOnInit(): void {
    this.message = this.numberTriviaLoaded$.pipe(
      map((loaded) => {
        if (!loaded) {
          return 'Start searching!';
        }
        return 'something else';
      })
    );
  }

  setNumber(theNumber: number) {
    this.numberTriviaService.setCurrentNumber(theNumber);
    this.currentTrivia$ = this.numberTriviaService.numberTriviaForCurrentNumber$(theNumber);
  }
}
