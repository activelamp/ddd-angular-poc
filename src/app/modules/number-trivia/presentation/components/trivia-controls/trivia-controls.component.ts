import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-trivia-controls',
  templateUrl: './trivia-controls.component.html',
  styleUrls: ['./trivia-controls.component.scss'],
})
export class TriviaControlsComponent {
  @Output() number: EventEmitter<number> = new EventEmitter<number>();

  numberForm = this.fb.group({
    theNumber: [''],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    this.number.emit(this.numberForm.value.theNumber);
  }
}
