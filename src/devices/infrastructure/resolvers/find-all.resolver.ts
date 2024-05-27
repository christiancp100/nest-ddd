import { Resolver, Query } from '@nestjs/graphql';

import { DevicesFinder } from 'src/devices/application/find-all/devices-finder';
import { DeviceType } from './dto/device.dto';

@Resolver((_of) => DeviceType)
export class FindAllDevicesResolver {
  constructor(private readonly devicesFinder: DevicesFinder) {}

  @Query((_returns) => [DeviceType])
  async findAll() {
    return this.devicesFinder.run();
  }
}
