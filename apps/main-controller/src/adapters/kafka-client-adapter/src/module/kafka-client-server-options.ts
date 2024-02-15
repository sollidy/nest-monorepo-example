import { Transport } from '@nestjs/microservices';
import { KafkaOptions } from '@nestjs/microservices';
import { Partitioners } from 'kafkajs';

export const kafkaClientServerOptions: KafkaOptions = {
  transport: Transport.KAFKA,
  options: {
    client: {
      clientId: 'compute',
      brokers: ['localhost:9094'],
    },
    producerOnlyMode: true,
    consumer: {
      groupId: 'compute-consumer',
      allowAutoTopicCreation: true,
    },
    producer: {
      createPartitioner: Partitioners.LegacyPartitioner,
    },
  },
};
