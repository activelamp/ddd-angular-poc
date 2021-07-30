import { Either, Result } from '../../../../_shared/kernel/logic/Result';
import { Failure } from '../../../../_shared/kernel/error/failure';

type Response = Either<Failure | Result<any>, Result<any>>;

export interface NumberTriviaRepositoryInterface {
  getTriviaForNumber(num: number): Response;
}
