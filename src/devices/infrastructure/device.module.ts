import { Module } from '@nestjs/common';
import { DevicesFinder } from '../application/find-all/devices-finder';
import { DeviceRepository } from '../domain/device-repository';
import { InMemoryDevicesRepository } from './repository/in-memory-devices-repository';
import { FindAllDevicesController } from './api/find/find-all.controller';
import { FindAllDevicesResolver } from './resolvers/find-all.resolver';
import { InMemoryEventBus } from 'src/shared/infrastructure/event-bus/in-memory-event-bus';
import { EventBus } from 'src/shared/domain/events/event-bus';

@Module({
  controllers: [FindAllDevicesController],
  providers: [
    // Resolvers
    FindAllDevicesResolver,

    // Use cases
    DevicesFinder,

    // Repositories
    InMemoryDevicesRepository,
    {
      provide: DeviceRepository,
      useExisting: InMemoryDevicesRepository,
    },

    // Event bus
    InMemoryEventBus,
    {
      provide: EventBus,
      useExisting: InMemoryEventBus,
    },
  ],
})
export class DeviceModule {}
