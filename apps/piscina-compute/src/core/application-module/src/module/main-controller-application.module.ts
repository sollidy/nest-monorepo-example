import { DynamicModule } from '@nestjs/common';
import { MainControllerService } from '../services';

export class MainControllerApplicationModule {
  static register(): DynamicModule {
    return {
      global: true,
      module: MainControllerApplicationModule,
      providers: [MainControllerService],
      exports: [MainControllerService],
    };
  }
}
