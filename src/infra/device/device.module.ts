import { Module } from '@nestjs/common';
import { DeviceFinderService } from '../../application/device/device-finder.service';
import { DeviceRepository } from '../../domain/device/device.repository';
import { InMemoryDeviceRepository } from './repository/device-inmemory.repository';
import { DevicesResolver } from './resolvers/devices.resolver';

@Module({
  providers: [
    // Resolvers
    DevicesResolver,

    // Use cases
    DeviceFinderService,

    // Repositories
    InMemoryDeviceRepository,
    {
      provide: DeviceRepository,
      useExisting: InMemoryDeviceRepository,
    },
  ],
})
export class DeviceModule {}
