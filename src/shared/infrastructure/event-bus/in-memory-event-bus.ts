import { EventEmitter } from 'events';
import { DomainEvent } from 'src/shared/domain/events/domain-event';
import { EventBus } from 'src/shared/domain/events/event-bus';

export class InMemoryEventBus extends EventEmitter implements EventBus {
  async publish(events: DomainEvent[]): Promise<void> {
    events.map((event) => {
      console.log('event :>> ', event);
      this.emit(event.eventName, event);
    });
  }
}
