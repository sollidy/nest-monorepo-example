import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class KafkaController {
  @EventPattern('start_compute')
  handleCompute(@Payload() data: any) {
    console.log(data);
  }
}
