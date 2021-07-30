import { AggregateRoot } from '../../../../_shared/kernel/domain/AggregateRoot';
import { UniqueEntityID } from '../../../../_shared/kernel/domain/UniqueEntityId';
import { Result } from '../../../../_shared/kernel/logic/Result';
import { Guard } from '../../../../_shared/kernel/logic/Guard';

export interface NumberTriviaAttributes {
  text: string;
  number: number;
}

export class NumberTrivia extends AggregateRoot<NumberTriviaAttributes> {
  private constructor(attributes: NumberTriviaAttributes, id?: string) {
    super(attributes, id);
  }

  public static create(attributes: NumberTriviaAttributes, id?: string): Result<NumberTrivia> {
    const guardedProps = [
      { argument: attributes.text, argumentName: 'text' },
      { argument: attributes.number, argumentName: 'number' },
    ];

    const guardResult = Guard.againstNullOrUndefinedBulk(guardedProps);

    if (!guardResult.succeeded) {
      return Result.fail<NumberTrivia>(guardResult.message);
    }
    if (id === '1234') {
      return Result.fail<NumberTrivia>('no way jose');
    }
    const NumberTriviaEntity = new NumberTrivia(attributes, id || '');

    return Result.ok<NumberTrivia>(NumberTriviaEntity);
  }
}
