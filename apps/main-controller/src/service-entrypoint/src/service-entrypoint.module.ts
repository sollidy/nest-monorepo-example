import { Module } from '@nestjs/common';
import { KafkaClientAdapterModule } from '../../adapters/kafka-client-adapter/src';
import { HttpAdapterModule } from '../../adapters/http-adapter/src';

@Module({
  imports: [KafkaClientAdapterModule.register(), HttpAdapterModule.register()],
})
export class ServiceEntrypointModule {}
