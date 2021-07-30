import { Entity } from './Entity';
import { UniqueEntityID } from './UniqueEntityId';

export abstract class AggregateRoot<T> extends Entity<T> {
  // private _domainEvents: DomainEventInterface<AggregateRoot<any>>[] = [];

  get id(): string {
    // eslint-disable-next-line no-underscore-dangle
    return this._id;
  }
  //
  // get domainEvents(): DomainEventInterface<AggregateRoot<any>>[] {
  //   return this._domainEvents;
  // }
  //
  // protected addDomainEvent(domainEvent: DomainEventInterface<AggregateRoot<any>>): void {
  //   // Add the domain event to this aggregate's list of domain events
  //   this._domainEvents.push(domainEvent);
  //   // Add this aggregate instance to the domain event's list of aggregates who's
  //   // events it eventually needs to dispatch.
  //   DomainEvents.markAggregateForEventStore(this);
  //   // Log the domain event to the console
  //   this.logDomainEventAdded(domainEvent);
  // }
  //
  // public clearEvents(): void {
  //   this._domainEvents.splice(0, this._domainEvents.length);
  // }
  //
  // private logDomainEventAdded(domainEvent: DomainEventInterface<AggregateRoot<any>>): void {
  //   const thisClass = Reflect.getPrototypeOf(this);
  //   const domainEventClass = Reflect.getPrototypeOf(domainEvent);
  //   // @ts-ignore
  //   console.info(
  //     `[Domain Event Created]:`,
  //     thisClass.constructor.name,
  //     '==>',
  //     domainEventClass.constructor.name
  //   );
  // }
}
