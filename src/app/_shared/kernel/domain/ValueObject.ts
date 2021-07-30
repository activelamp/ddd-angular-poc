import { shallowEqual } from "shallow-equal-object";

interface ValueObjectAttributes {
    [index: string]: any;
}

/**
 * @desc ValueObjects are objects that we determine their
 * equality through their structrual property.
 */

export abstract class ValueObject<T extends ValueObjectAttributes> {
    public readonly attributes: T;

    constructor (attributes: T) {
        this.attributes = Object.freeze(attributes);
    }

    public equals (vo?: ValueObject<T>) : boolean {
        if (vo === null || vo === undefined) {
            return false;
        }
        if (vo.attributes === undefined) {
            return false;
        }
        return shallowEqual(this.attributes, vo.attributes)
    }
}
