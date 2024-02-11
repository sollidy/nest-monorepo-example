import { DynamicModule, Module, Provider } from '@nestjs/common';
import { ClientProxyFactory } from '@nestjs/microservices';
import { kafkaClientServerOptions } from './kafka-client-server-options';

export const KAFKA_CLIENT_PROVIDER = 'KAFKA_CLIENT_PROVIDER';

@Module({})
export class KafkaClientAdapterModule {
  static register(): DynamicModule {
    const kafkaClientProvider: Provider = {
      provide: KAFKA_CLIENT_PROVIDER,
      useFactory: () => {
        return ClientProxyFactory.create(kafkaClientServerOptions);
      },
    };
    return {
      global: true,
      module: KafkaClientAdapterModule,
      providers: [kafkaClientProvider],
      exports: [kafkaClientProvider],
    };
  }
}
