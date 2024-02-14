import { Module } from '@nestjs/common';
import { KafkaAdapterModule } from '../../adapters/kafka-adapter/src';

@Module({
  imports: [KafkaAdapterModule.register()],
})
export class ServiceEntrypointModule {}
