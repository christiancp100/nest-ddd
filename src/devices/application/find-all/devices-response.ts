import { Device, DevicePrimitives } from 'src/devices/domain/device';

export class DevicesResponse {
  public readonly devices: Array<DevicePrimitives>;

  constructor(devices: Array<Device>) {
    this.devices = devices.map((device) => device.toPrimitives());
  }

  static build(devices: Array<Device>): any {
    const devicesResponse = new DevicesResponse(devices);
    return devicesResponse.devices;
  }
}
