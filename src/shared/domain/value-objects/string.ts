import { InvalidArgumentError } from './invalid-argument-error';
import { ValueObject } from './value-object';

export class StringValueObject extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    this.ensureIsValidString(value);
  }

  private ensureIsValidString(str: string): void {
    if (typeof str !== 'string') {
      throw new InvalidArgumentError(
        `<${this.constructor.name}> does not allow the value <${str}>`,
      );
    }
  }
}
