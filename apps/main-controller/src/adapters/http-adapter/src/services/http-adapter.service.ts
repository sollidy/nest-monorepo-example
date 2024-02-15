import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { KAFKA_CLIENT_PROVIDER } from '../../../kafka-client-adapter/src';

@Injectable()
export class HttpAdapterService {
  constructor(@Inject(KAFKA_CLIENT_PROVIDER) private readonly kafkaClient: ClientKafka) {}

  startCompute() {
    this.kafkaClient.emit('start_compute', JSON.stringify(`start compute ${Math.random()}`));
  }
}
