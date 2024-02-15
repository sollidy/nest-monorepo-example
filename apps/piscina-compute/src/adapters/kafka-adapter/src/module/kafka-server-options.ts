import { Transport } from '@nestjs/microservices';
import { KafkaOptions } from '@nestjs/microservices';
import { Partitioners } from 'kafkajs';

export const kafkaServerOptions: KafkaOptions = {
  transport: Transport.KAFKA,
  options: {
    client: {
      brokers: ['localhost:9094'],
      connectionTimeout: 3000,
    },
    consumer: {
      groupId: 'compute-consumer',
    },
    producer: {
      createPartitioner: Partitioners.LegacyPartitioner,
    },
  },
};
