import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Either, left, Result, right } from '../../../../_shared/kernel/logic/Result';
import { GenericAppError } from '../../../../_shared/kernel/logic/AppError';

type Response = Either<GenericAppError.UnexpectedError, Result<Observable<string>>>;

export interface NumberTriviaRemoteDataSourceInterface {
  requestTriviaForNumber(num: number): Response;
}

@Injectable({
  providedIn: 'root',
})
export class NumberTriviaRemoteDataSource implements NumberTriviaRemoteDataSourceInterface {
  constructor(private http: HttpClient) {}

  requestTriviaForNumber(num: number): Response {
    try {
      const res = this.http.get(`http://numbersapi.com/${num}`, { responseType: 'text' }).pipe(
        catchError((err) => {
          throw new Error(`do not think so: ${err}`);
        })
      );
      return right(Result.ok<Observable<string>>(res));
    } catch (e) {
      return left(new GenericAppError.UnexpectedError(e));
    }
  }
}
