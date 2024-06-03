import { Injectable } from '@nestjs/common';
import { Device } from 'src/domain/device/device.entity';
import { DeviceRepository } from 'src/domain/device/device.repository';
import { InMemoryRepository } from '../../shared/persistence/in-memory.repository';

@Injectable()
export class InMemoryDeviceRepository
  extends InMemoryRepository<Device>
  implements DeviceRepository
{
  constructor() {
    super();

    const device1 = Device.create({
      id: 1,
      name: 'Device 1',
      type: 'CAMERA',
    });

    const device2 = Device.create({
      id: 2,
      name: 'Device 2',
      type: 'SENSOR',
    });

    this.create(device1);
    this.create(device2);
  }
}
