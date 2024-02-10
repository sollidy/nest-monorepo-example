import { DynamicModule } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { resolve } from 'path';

import Piscina = require('piscina');

export const PISCINA_TOKEN = 'PISCINA_TOKEN';

@Module({})
export class PiscinaAdapterModule {
  static register(): DynamicModule {
    const piscinaProvider = {
      provide: PISCINA_TOKEN,
      useFactory: () => {
        const piscina = new Piscina({
          filename: resolve(__dirname, '../workers/workers.js'),
        });
        return piscina;
      },
    };

    return {
      global: true,
      module: PiscinaAdapterModule,
      providers: [piscinaProvider],
      exports: [piscinaProvider],
    };
  }
}
