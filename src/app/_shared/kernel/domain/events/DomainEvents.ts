import { AggregateRoot } from "../AggregateRoot";
import {UniqueEntityID} from "../UniqueEntityId";
import {DomainEventInterface} from "./DomainEventInterface";
import {TenantCreated} from "../../../domain-events/tenant-created.event";
import {EventHandlerInterface} from "./EventHandlerInterface";
import {ResolvedEvent} from "node-eventstore-client";

export class DomainEvents {
    private static handlersMap: any = {};
    private static markedAggregates: AggregateRoot<any>[] = [];
    private static eventClasses: { [key: string]: DomainEventInterface<AggregateRoot<any>> }= {};

    /**
     * @method markAggregateForEventStore
     * @static
     * @desc Called by aggregate root objects that have created domain
     * events to eventually be logged to EventStore when the infrastructure
     * commits the unit of work.
     */

    public static markAggregateForEventStore (aggregate: AggregateRoot<any>): void {
        const aggregateFound = !!this.findMarkedAggregateByID(aggregate.id);

        if (!aggregateFound) {
            this.markedAggregates.push(aggregate);
        }
    }

    /**
     * @method eventAppeared
     * @static
     * @desc Called by EventStore from the stream subscriptions.
     */

    public static eventAppeared (subscription: any, newEvent: ResolvedEvent): void {
        // Construct the Event
        if (newEvent.isResolved && this.eventClasses.hasOwnProperty(newEvent.event!.eventType)) {
            const event = this.eventClasses[newEvent.event!.eventType].create(
                JSON.parse(newEvent.event!.data!.toString()),
                newEvent.event!.created,
                newEvent.event!.eventNumber
            );
            // Dispatch the event.
            this.dispatch(event);
        }
    }

    private static removeAggregateFromMarkedDispatchList (aggregate: AggregateRoot<any>): void {
        const index = this.markedAggregates.findIndex((a) => a.equals(aggregate));
        this.markedAggregates.splice(index, 1);
    }

    private static findMarkedAggregateByID (id: UniqueEntityID): AggregateRoot<any> {
        let found = null;
        for (let aggregate of this.markedAggregates) {
            if (aggregate.id.equals(id)) {
                found = aggregate;
            }
        }

        return found as AggregateRoot<any>;
    }


    public static writeEventsForAggregate (id: UniqueEntityID, appendToLog: Function): void {
        const aggregate = this.findMarkedAggregateByID(id);

        if (aggregate) {
            appendToLog(aggregate);
            aggregate.clearEvents();
            this.removeAggregateFromMarkedDispatchList(aggregate);
        }
    }

    public static register(callback: (event: DomainEventInterface<AggregateRoot<any>>) => void, eventClass: DomainEventInterface<AggregateRoot<any>>): void {
        const eventClassName: string = eventClass.constructor.name

        if (!this.eventClasses.hasOwnProperty(eventClassName)) {
            this.eventClasses[eventClassName] = eventClass;
        }

        if (!this.handlersMap.hasOwnProperty(eventClassName)) {
            this.handlersMap[eventClassName] = [];
        }
        this.handlersMap[eventClassName].push(callback);
    }

    public static clearHandlers(): void {
        this.handlersMap = {};
    }

    public static clearMarkedAggregates(): void {
        this.markedAggregates = [];
    }

    private static dispatch (event: DomainEventInterface<AggregateRoot<any>>): void {
        const eventClassName: string = event.constructor.name;

        if (this.handlersMap.hasOwnProperty(eventClassName)) {
            const handlers: any[] = this.handlersMap[eventClassName];
            for (let handler of handlers) {
                handler(event);
            }
        }
    }
}
