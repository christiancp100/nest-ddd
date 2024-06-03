import { Injectable } from '@nestjs/common';
import { DeviceRepository } from '../../domain/device/device.repository';

@Injectable()
export class DeviceFinderService {
  constructor(private readonly deviceRepository: DeviceRepository) {}

  async run(id?: number) {
    return id
      ? this.deviceRepository.findById(id)
      : this.deviceRepository.findAll();
  }
}
