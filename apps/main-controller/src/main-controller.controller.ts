import { Controller, Get } from '@nestjs/common';
import { MainControllerService } from './main-controller.service';

@Controller()
export class MainControllerController {
  constructor(private readonly mainControllerService: MainControllerService) {}

  @Get()
  getHello(): string {
    return this.mainControllerService.getHello();
  }
}
