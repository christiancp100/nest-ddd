import { Injectable } from '@nestjs/common';
import { Device } from 'src/devices/domain/device';
import { DeviceRepository } from 'src/devices/domain/device-repository';

@Injectable()
export class InMemoryDevicesRepository implements DeviceRepository {
  private devices: Device[];

  constructor() {
    this.devices = [
      // Test device in "DB"
      Device.fromPrimitives({
        id: '1',
        name: 'Device 1',
        type: 'CAMERA',
        userId: '1',
      }),
    ];
  }
  async findAll() {
    return this.devices;
  }
}
