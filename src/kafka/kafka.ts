import { KafkaOptions, Transport } from '@nestjs/microservices';

export const kafkaConfig: KafkaOptions = {
  transport: Transport.KAFKA,
  options: {
    client: {
        clientId: 'team',
        brokers: ['localhost:9092'], // Aquí debes especificar los brokers de tu cluster de Kafka
    },
    consumer: {
      groupId: 'team-consumer', // Especifica el nombre del grupo de consumidores
    },
  },
};
