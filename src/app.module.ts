import { Module } from '@nestjs/common';

import { GraphqlModule } from './infra/shared/graphql/graphql.module';
import { DeviceModule } from './infra/device/device.module';

@Module({
  imports: [GraphqlModule, DeviceModule],
})
export class AppModule {}
