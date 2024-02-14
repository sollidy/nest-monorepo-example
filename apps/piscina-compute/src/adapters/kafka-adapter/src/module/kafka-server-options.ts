import { Transport } from '@nestjs/microservices';
import { KafkaOptions } from '@nestjs/microservices';

export const kafkaServerOptions: KafkaOptions = {
  transport: Transport.KAFKA,
  options: {
    client: {
      brokers: ['localhost:9092'],
    },
    consumer: {
      groupId: 'compute-consumer',
    },
  },
};
