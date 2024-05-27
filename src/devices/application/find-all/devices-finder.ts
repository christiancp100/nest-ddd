import { DeviceRepository } from 'src/devices/domain/device-repository';
import { DevicesResponse } from './devices-response';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DevicesFinder {
  constructor(private readonly deviceRepository: DeviceRepository) {}

  async run() {
    const devices = await this.deviceRepository.findAll();

    return DevicesResponse.build(devices);
  }
}
