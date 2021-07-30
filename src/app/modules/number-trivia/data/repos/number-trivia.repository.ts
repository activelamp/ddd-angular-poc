import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NumberTriviaRepositoryInterface } from '../../domain/repos/number-trivia.repository.interface';
import { Either, Result } from '../../../../_shared/kernel/logic/Result';
import { NumberTriviaRemoteDataSource } from '../datasources/remote.datasource';
import { GenericAppError } from '../../../../_shared/kernel/logic/AppError';

type Response = Either<
  GenericAppError.UnexpectedError | Result<string>,
  Result<Observable<string>>
>;

@Injectable({
  providedIn: 'root',
})
export class NumberTriviaRepository implements NumberTriviaRepositoryInterface {
  constructor(private remoteDataSource: NumberTriviaRemoteDataSource) {}

  getTriviaForNumber(num: number): Response {
    // There is where we can store logic regarding connecting to different datasources.
    return this.remoteDataSource.requestTriviaForNumber(num);
  }
}
