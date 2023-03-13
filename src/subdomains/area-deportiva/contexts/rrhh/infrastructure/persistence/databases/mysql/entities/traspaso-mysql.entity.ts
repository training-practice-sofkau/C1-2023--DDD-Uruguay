import { Column, Entity, OneToOne } from 'typeorm';

import { TraspasoDomainEntity } from '../../../../../domain/entities/traspaso/traspaso.domain-entity';
import { SecretariaMySqlEntity } from './secretaria-mysql.entity';

@Entity('traspaso', { schema: 'public' })
export class TraspasoMySqlEntity extends TraspasoDomainEntity {

  @Column('uuid', {
    primary: true,
    name: 'traspaso_id',
    default: () => 'uuid_generate_v4()',
  })
  traspasoId?: string;

  @Column()
  equipoNuevoId?: string;

  @Column()
  equipoSalidaId?: string;

  @Column()
  costo?: number;

  @Column()
  sate?: boolean;

  @Column('character varying', { name: 'apellido', length: 255 })
  fechaSalida?: string;

  @OneToOne(
    () => SecretariaMySqlEntity,
    (secretaria) => secretaria.traspaso,
  )
  secretaria?: SecretariaMySqlEntity;
}
