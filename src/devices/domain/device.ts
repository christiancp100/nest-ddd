import { AggregateRoot } from 'src/shared/domain/aggregate-root';
import { DeviceId } from './device-id';
import { DeviceName } from './device-name';
import { DeviceType } from './device-type';
import { DeviceCreatedDomainEvent } from './events/device-created-domain-event';

export type DevicePrimitives = {
  id: string;
  name: string;
  type: string;
};

export class Device extends AggregateRoot {
  constructor(
    readonly id: DeviceId,
    readonly name: DeviceName,
    readonly type: DeviceType,
  ) {
    super();
  }

  static create(id: DeviceId, name: DeviceName, type: DeviceType): Device {
    const device = new Device(id, name, type);
    device.record(
      new DeviceCreatedDomainEvent({
        aggregateId: id.value,
        name: name.value,
        type: type.value,
      }),
    );

    return device;
  }

  static fromPrimitives({
    id,
    name,
    type,
  }: {
    id: string;
    name: string;
    type: string;
    userId: string;
  }): Device {
    return new Device(
      new DeviceId(id),
      new DeviceName(name),
      new DeviceType(type),
    );
  }

  toPrimitives(): DevicePrimitives {
    return {
      id: this.id.value,
      name: this.name.value,
      type: this.type.value,
    };
  }
}
