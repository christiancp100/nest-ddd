import { UuidValueObject } from 'src/shared/domain/value-objects/id';

export class DeviceId extends UuidValueObject {
  constructor(readonly value: string) {
    super(value);
  }
}
