import { DomainEvent } from './domain-event';

export abstract class EventBus {
  abstract publish(events: Array<DomainEvent>): Promise<void>;
}
