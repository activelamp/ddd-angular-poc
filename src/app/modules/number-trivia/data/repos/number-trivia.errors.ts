import { Result } from '../../../../_shared/kernel/logic/Result';
import { UseCaseError } from '../../../../_shared/kernel/logic/UseCaseError';

export namespace NumberTriviaErrors {
  export class TenantAlreadyExists extends Result<UseCaseError> {
    constructor(tenantShortName: string) {
      super(false, {
        message: `The short name ${tenantShortName} already exists`,
      } as UseCaseError);
    }
  }
}
