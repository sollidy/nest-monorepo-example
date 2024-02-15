import { Transport } from '@nestjs/microservices';
import { KafkaOptions } from '@nestjs/microservices';

export const kafkaServerOptions: KafkaOptions = {
  transport: Transport.KAFKA,
  options: {
    client: {
      brokers: ['localhost:9094'],
    },
    consumer: {
      groupId: 'compute-consumer',
    },
  },
};
