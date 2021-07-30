import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviaControlsComponent } from './trivia-controls.component';

describe('TriviaControlsComponent', () => {
  let component: TriviaControlsComponent;
  let fixture: ComponentFixture<TriviaControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriviaControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TriviaControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
