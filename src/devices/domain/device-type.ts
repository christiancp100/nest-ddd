import { StringValueObject } from 'src/shared/domain/value-objects/string';

export class DeviceType extends StringValueObject {
  constructor(readonly value: string) {
    super(value);
    this.ensureIsValidDeviceType(value);
  }

  private ensureIsValidDeviceType(type: string): void {
    if (!['CAMERA', 'SENSOR', 'DOOR_LOCK', 'THERMOSTAT'].includes(type)) {
      throw new Error(
        `<${this.constructor.name}> does not allow the value <${type}>`,
      );
    }
  }
}
