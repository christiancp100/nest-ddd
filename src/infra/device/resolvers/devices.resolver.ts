import { Args, Int, Query, Resolver } from '@nestjs/graphql';

import { DeviceFinderService } from 'src/application/device/device-finder.service';
import { DeviceDto } from './dto/device.dto';

@Resolver(() => DeviceDto)
export class DevicesResolver {
  constructor(private readonly devicesFinder: DeviceFinderService) {}

  @Query(() => [DeviceDto])
  async find(@Args('id', { type: () => Int, nullable: true }) id?: number) {
    return this.devicesFinder.run(id);
  }
}
