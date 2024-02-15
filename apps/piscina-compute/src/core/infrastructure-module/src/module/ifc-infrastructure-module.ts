import { DynamicModule } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { PiscinaService } from '../../../domain-module/src';
import { PiscinaServiceImpl } from '../services';

@Module({})
export class IntegrationInfrastructureModule {
  static register(): DynamicModule {
    return {
      global: true,
      module: IntegrationInfrastructureModule,
      providers: [
        {
          provide: PiscinaService,
          useClass: PiscinaServiceImpl,
        },
      ],
      exports: [
        {
          provide: PiscinaService,
          useClass: PiscinaServiceImpl,
        },
      ],
    };
  }
}
