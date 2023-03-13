import { Injectable } from '@nestjs/common';
import { UsuarioPostgresService } from '../databases/postgres/services/usuario.service';

@Injectable()
export class UsuarioService extends UsuarioPostgresService {}
