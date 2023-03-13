import { InformacionPersonalDomainEntityBase } from '@usuarios/domain';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { UsuarioPostgresEntity } from './usuario-postgres.entity';

@Entity('informacion_personal', { schema: 'public' })
export class InformacionPersonalPostgresEntity extends InformacionPersonalDomainEntityBase {
  @Column('uuid', {
    primary: true,
    name: 'informacion_personal_id',
    default: () => 'uuid_generate_v4()',
  })
  informacionPersonalId?: string;

  @Column('character varying', { name: 'nombre', length: 255 })
  nombre?: string;

  @Column('character varying', { name: 'apellido', length: 255 })
  apellido?: string;

  @OneToOne(
    () => UsuarioPostgresEntity,
    (usuario) => usuario.informacionPersonal,
  )
  @JoinColumn()
  usuario?: UsuarioPostgresEntity;
}
