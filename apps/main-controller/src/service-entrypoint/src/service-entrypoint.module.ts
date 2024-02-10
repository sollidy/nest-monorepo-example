import { PiscinaAdapterModule } from '@app/piscina-adapter';
import { Module } from '@nestjs/common';

@Module({
  imports: [PiscinaAdapterModule.register()],
})
export class ServiceEntrypointModule {}
