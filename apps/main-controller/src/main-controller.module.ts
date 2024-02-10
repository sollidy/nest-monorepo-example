import { Module } from '@nestjs/common';
import { MainControllerController } from './main-controller.controller';
import { MainControllerService } from './main-controller.service';

@Module({
  imports: [],
  controllers: [MainControllerController],
  providers: [MainControllerService],
})
export class MainControllerModule {}
