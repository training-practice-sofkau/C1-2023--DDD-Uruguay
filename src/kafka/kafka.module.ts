import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { kafkaConfig } from './kafka'; 

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TEAM_SERVICE', // El nombre de este servicio puede ser cualquiera
        ...kafkaConfig,
      },
    ]),
  ],
})
export class KafkaModule {}
