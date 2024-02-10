import { NestFactory } from '@nestjs/core';
import { MainControllerModule } from './main-controller.module';

async function bootstrap() {
  const app = await NestFactory.create(MainControllerModule);
  await app.listen(3000);
}
bootstrap();
