import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberTriviaPageComponent } from './number-trivia-page.component';
import { Store, StoreModule } from '@ngrx/store';

describe('NumberTriviaPageComponent', () => {
  let component: NumberTriviaPageComponent;
  let fixture: ComponentFixture<NumberTriviaPageComponent>;
  let store: Store;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ NumberTriviaPageComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberTriviaPageComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
