import { UsuarioDomainEntityBase } from '@usuarios/domain';
import { Column, Entity, OneToOne } from 'typeorm';
import { InformacionPersonalPostgresEntity } from './informacion-personal-postgres.entity';

@Entity('usuario', { schema: 'public' })
export class UsuarioPostgresEntity extends UsuarioDomainEntityBase {
  @Column('uuid', {
    primary: true,
    name: 'usuario_id',
    default: () => 'uuid_generate_v4()',
  })
  usuarioId?: string;

  @Column('character varying', { name: 'email', length: 255 })
  email?: string;

  @Column('character varying', { name: 'password', length: 128 })
  password?: string;

  @OneToOne(
    () => InformacionPersonalPostgresEntity,
    (informacionPersonal) => informacionPersonal.usuario,
    { cascade: ['insert'] },
  )
  informacionPersonal?: InformacionPersonalPostgresEntity;
}
