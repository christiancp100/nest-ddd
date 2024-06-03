type DeviceType = 'CAMERA' | 'SENSOR';

export class Device {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly type: DeviceType,
  ) {}

  static create({ id, name, type }: Device): Device {
    return new Device(id, name, type);
  }

  static update() {}
}

export interface DeviceEntity {
  id: number;
  name: string;
}
