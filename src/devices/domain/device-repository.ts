import { Device } from './device';

export abstract class DeviceRepository {
  abstract findAll(): Promise<Device[]>;
}

// export interface DeviceRepository {
//   findAll(): Promise<Device[]>;
// }
