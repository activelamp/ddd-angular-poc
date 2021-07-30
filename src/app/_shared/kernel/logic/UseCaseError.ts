interface UseCaseErrorInterface {
    message: string;
}

export abstract class UseCaseError implements UseCaseErrorInterface {
    public readonly message: string;

    protected constructor (message: string) {
        this.message = message;
    }
}
