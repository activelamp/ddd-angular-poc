import { UniqueEntityID } from './UniqueEntityId';

const isEntity = (v: any): v is Entity<any> => {
  return v instanceof Entity;
};

export abstract class Entity<T> {
  protected readonly _id: string;

  public readonly attributes: T;

  constructor(attributes: T, id?: string) {
    this._id = id || '';
    this.attributes = attributes;
  }

  public equals(object?: Entity<T>): boolean {
    if (object == null || object == undefined) {
      return false;
    }

    if (this === object) {
      return true;
    }

    if (!isEntity(object)) {
      return false;
    }

    return this._id === object._id;
  }
}
