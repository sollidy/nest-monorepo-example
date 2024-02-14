import { DynamicModule, Module } from '@nestjs/common';
import { KafkaController } from '../controller';

@Module({})
export class KafkaAdapterModule {
  static register(): DynamicModule {
    return {
      global: true,
      module: KafkaAdapterModule,
      providers: [KafkaController],
      exports: [KafkaController],
    };
  }
}
