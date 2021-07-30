import { NumberTriviaAttributes } from '../../domain/entities/number-trivia.entity';
import { UniqueEntityID } from '../../../../_shared/kernel/domain/UniqueEntityId';

export interface NumberTriviaInterface {
  id: string;
  attributes: NumberTriviaAttributes;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface loadNumberTriviaDto {
  theNumber: number;
}
