import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmPostgresConfigService } from './configs/type-orm-postgres-config.service';
import { InformacionPersonalPostgresEntity } from './entities/informacion-personal-postgres.entity';
import { UsuarioPostgresEntity } from './entities/usuario-postgres.entity';
import { UsuarioRepository } from './repositories/usuario.repository';
import { UsuarioPostgresService } from './services/usuario.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmPostgresConfigService,
    }),
    TypeOrmModule.forFeature([
      UsuarioPostgresEntity,
      InformacionPersonalPostgresEntity,
    ]),
  ],
  controllers: [],
  providers: [
    TypeOrmPostgresConfigService,
    UsuarioPostgresService,
    UsuarioRepository,
  ],
  exports: [UsuarioPostgresService, UsuarioRepository],
})
export class PostgresModule {}
