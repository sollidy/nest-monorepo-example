import { Inject, Injectable, OnModuleDestroy } from '@nestjs/common';
import Piscina from 'piscina';
import { PiscinaService } from '../../../domain-module/src';
import { PISCINA_ADAPTER } from '@app/piscina-adapter';

@Injectable()
export class PiscinaServiceImpl extends PiscinaService implements OnModuleDestroy {
  constructor(@Inject(PISCINA_ADAPTER) private readonly piscina: Piscina) {
    super();
  }

  async onModuleDestroy() {
    await this.piscina.destroy();
  }

  async compute(): Promise<void> {
    return this.piscina.run({ name: 'compute' });
  }

  async destroy() {
    return this.piscina.destroy();
  }
}
