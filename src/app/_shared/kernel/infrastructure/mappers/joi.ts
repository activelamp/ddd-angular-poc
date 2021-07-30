import * as joi from '@hapi/joi';

export type JoiOf<X> = X extends string
    ? joi.StringSchema
    : X extends number
        ? joi.NumberSchema
        : X extends Date
            ? joi.DateSchema
            : X extends object
                ? JoiGeneric<X>
                : never;

interface JoiGeneric<X> extends joi.ObjectSchema {
    keys(params: { [K in keyof X]: JoiOf<X[K]> }): this;
}

export function joiGeneric<X>(): JoiGeneric<X> {
    return joi.object() as JoiGeneric<X>;
}
