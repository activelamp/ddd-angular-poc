import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { UseCase } from '../../../../_shared/kernel/domain/UseCase';
import { loadNumberTriviaDto } from '../../data/models/number-trivia.model';
import { NumberTriviaRepository } from '../../data/repos/number-trivia.repository';
import { Either, left, Result, right } from '../../../../_shared/kernel/logic/Result';
import { NumberTrivia } from '../entities/number-trivia.entity';

type Response = Observable<Either<Result<string>, Result<NumberTrivia>>>;

@Injectable({
  providedIn: 'root',
})
export class GetConcreteNumberTriviaUsecase implements UseCase<loadNumberTriviaDto, Response> {
  constructor(private repo: NumberTriviaRepository) {}

  execute(request?: loadNumberTriviaDto): Response {
    // Ask the repository to get the value.
    const triviaOrError = this.repo.getTriviaForNumber(request!.theNumber);
    if (triviaOrError.isLeft()) {
      return of(left(Result.fail<string>(triviaOrError.value.errorValue())));
    }

    return triviaOrError.value.getValue().pipe(
      map((data) => {
        // Attempt to create a domain object to validate.
        const entityOrError = NumberTrivia.create(
          {
            text: data,
            number: request!.theNumber,
          },
          `${request!.theNumber}`
        );
        if (entityOrError.isFailure) {
          return left(Result.fail<string>('could not create entity'));
        }
        return right(Result.ok<NumberTrivia>(entityOrError.getValue()));
      })
    );
  }
}
