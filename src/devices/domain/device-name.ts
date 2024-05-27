import { StringValueObject } from 'src/shared/domain/value-objects/string';

export class DeviceName extends StringValueObject {
  constructor(readonly value: string) {
    super(value);
    this.ensureIsValidDeviceName(value);
  }

  private ensureIsValidDeviceName(name: string): void {
    if (name.length < 3 || name.length > 30) {
      throw new Error(
        `<${this.constructor.name}> does not allow the value <${name}>`,
      );
    }
  }
}
