import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class KafkaController {
  @MessagePattern('start_compute')
  async handleCompute(@Payload() data: any) {
    console.log(`----------------------> ${data}`);
  }
}
