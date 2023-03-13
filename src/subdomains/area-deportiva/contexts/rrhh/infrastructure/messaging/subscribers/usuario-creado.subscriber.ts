import { Controller } from '@nestjs/common';
import {
  Ctx,
  EventPattern,
  KafkaContext,
  Payload,
} from '@nestjs/microservices';

@Controller()
export class UsuarioCreadoController {
  @EventPattern('libreta.usuarios.usuario-creado')
  getHello(@Payload() data: any, @Ctx() context: KafkaContext) {
    console.log('----------------------');
    console.log('Data: ', data.data);
    console.log('----------------------');
  }
}
