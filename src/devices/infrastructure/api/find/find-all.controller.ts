import { Controller, Get, NotFoundException } from '@nestjs/common';

import { DEVICES } from '../route';
import { DevicesFinder } from 'src/devices/application/find-all/devices-finder';
import { DeviceNotFoundException } from 'src/devices/domain/exceptions/device-not-found';

@Controller(DEVICES)
export class FindAllDevicesController {
  constructor(private readonly devicesFinder: DevicesFinder) {}

  @Get()
  async run() {
    try {
      return await this.devicesFinder.run();
    } catch (error) {
      if (error instanceof DeviceNotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }
}
