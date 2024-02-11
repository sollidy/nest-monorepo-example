import { DynamicModule, Module } from '@nestjs/common';
import { HttpAdapterController } from '../controller';
import { HttpAdapterService } from '../services';

@Module({})
export class HttpAdapterModule {
  static register(): DynamicModule {
    return {
      global: true,
      module: HttpAdapterModule,
      controllers: [HttpAdapterController],
      providers: [HttpAdapterService],
      exports: [HttpAdapterService],
    };
  }
}
