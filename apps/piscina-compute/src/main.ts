import { NestFactory } from '@nestjs/core';
import { ServiceEntrypointModule } from './service-entrypoint/src';
import { kafkaServerOptions } from './adapters/kafka-adapter/src';
import { KafkaOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<KafkaOptions>(
    ServiceEntrypointModule,
    kafkaServerOptions,
  );
  await app.listen();
}

bootstrap();
