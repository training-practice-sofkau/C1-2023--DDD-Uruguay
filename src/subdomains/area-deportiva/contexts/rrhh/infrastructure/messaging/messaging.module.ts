import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UsuarioCreadoPublisher } from './publishers/usuario-creado.publisher';
import { UsuarioCreadoController } from './subscribers/usuario-creado.subscriber';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USUARIOS_CONTEXT',
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: ['localhost:9092'],
          },
        },
      },
    ]),
  ],
  controllers: [UsuarioCreadoController],
  providers: [UsuarioCreadoPublisher],
  exports: [UsuarioCreadoPublisher],
})
export class MessagingModule {}
