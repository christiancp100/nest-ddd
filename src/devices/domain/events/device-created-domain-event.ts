import { DomainEvent } from 'src/shared/domain/events/domain-event';

type CreatedDeviceDomainEventAttributes = {
  readonly type: string;
  readonly name: string;
};

export class DeviceCreatedDomainEvent extends DomainEvent {
  static readonly EVENT_NAME = 'device.created';

  readonly name: string;
  readonly type: string;

  constructor({
    aggregateId,
    name,
    type,
    eventId,
    occurredOn,
  }: {
    aggregateId: string;
    eventId?: string;
    type: string;
    name: string;
    occurredOn?: Date;
  }) {
    super({
      eventName: DeviceCreatedDomainEvent.EVENT_NAME,
      aggregateId,
      eventId,
      occurredOn,
    });
    this.type = type;
    this.name = name;
  }

  toPrimitives(): CreatedDeviceDomainEventAttributes {
    const { name, type } = this;
    return {
      name,
      type,
    };
  }

  static fromPrimitives(params: {
    aggregateId: string;
    attributes: CreatedDeviceDomainEventAttributes;
    eventId: string;
    occurredOn: Date;
  }): DomainEvent {
    const { aggregateId, attributes, occurredOn, eventId } = params;
    return new DeviceCreatedDomainEvent({
      aggregateId,
      type: attributes.type,
      name: attributes.name,
      eventId,
      occurredOn,
    });
  }
}
