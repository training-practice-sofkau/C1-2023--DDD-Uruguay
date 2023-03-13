import { Body, Controller, Post } from '@nestjs/common';
import { RegistrarUnUsuarioUseCase } from '../../application/use-cases';
import { UsuarioCreadoPublisher } from '../messaging/publishers/usuario-creado.publisher';
import { UsuarioService } from '../persistence/services/usuario.service';
import { RegistrarUnUsuarioCommand } from '../utils/commands/registrar-un-usuario.command';

@Controller('usuarios')
export class UsuariosController {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly usuarioCreadoPublisher: UsuarioCreadoPublisher,
  ) {}

  @Post()
  async create(@Body() command: RegistrarUnUsuarioCommand) {
    const useCase = new RegistrarUnUsuarioUseCase(
      this.usuarioService,
      this.usuarioCreadoPublisher,
    );
    return await useCase.execute(command);
  }
}
