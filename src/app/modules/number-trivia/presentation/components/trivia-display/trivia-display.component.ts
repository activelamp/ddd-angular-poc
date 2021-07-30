import { Component, Input, OnInit } from '@angular/core';
import { NumberTriviaInterface } from '../../../data/models/number-trivia.model';

@Component({
  selector: 'app-trivia-display',
  templateUrl: './trivia-display.component.html',
  styleUrls: ['./trivia-display.component.scss'],
})
export class TriviaDisplayComponent {
  @Input() trivia!: NumberTriviaInterface | null;
}
