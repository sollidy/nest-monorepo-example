import { NestFactory } from '@nestjs/core';
import { ServiceEntrypointModule } from './service-entrypoint/src';

async function bootstrap() {
  const app = await NestFactory.create(ServiceEntrypointModule);

  await app.listen(5000);
}

bootstrap();
