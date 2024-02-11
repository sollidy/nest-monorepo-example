import { Transport } from '@nestjs/microservices';
import { KafkaOptions } from '@nestjs/microservices';

export const kafkaClientServerOptions: KafkaOptions = {
  transport: Transport.KAFKA,
  options: {
    client: {
      clientId: 'compute',
      brokers: ['localhost:9092'],
    },
    producerOnlyMode: true,
    consumer: {
      groupId: 'compute-consumer',
    },
  },
};
