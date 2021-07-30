import {UniqueEntityID} from "../UniqueEntityId";
import * as Long from "long";
import {Tenant} from "../../../../domain/entity/tenant.entity";

export interface DomainEventInterface<T> {
    dateTimeOccurred: Date;
    sequence?: Long | number;
    data: object;
    getAggregateId(): UniqueEntityID;
    create(entity: T | any, dateTimeOccurred?: Date | string, sequence?: Long | number): DomainEventInterface<T>;
}
