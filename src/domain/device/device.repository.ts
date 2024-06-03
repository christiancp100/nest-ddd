import { Device } from './device.entity';

export abstract class DeviceRepository {
  abstract findAll(): Promise<Device[]>;

  abstract findById(id: number): Promise<Device[]>;
}
