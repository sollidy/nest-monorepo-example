import { Controller, Get } from '@nestjs/common';
import { HttpAdapterService } from '../services';

@Controller('compute')
export class HttpAdapterController {
  constructor(private readonly httpService: HttpAdapterService) {}

  @Get('start')
  createUser() {
    return this.httpService.startCompute();
  }
}
