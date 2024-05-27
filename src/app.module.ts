import { Module } from '@nestjs/common';

import { DeviceModule } from './devices/infrastructure/device.module';
import { GraphqlModule } from './shared/infrastructure/graphql/graphql.module';

@Module({
  imports: [GraphqlModule, DeviceModule],
})
export class AppModule {}
