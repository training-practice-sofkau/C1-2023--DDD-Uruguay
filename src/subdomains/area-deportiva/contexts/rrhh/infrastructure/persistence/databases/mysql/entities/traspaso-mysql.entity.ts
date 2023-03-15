import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { TraspasoDomainEntity } from '../../../../../domain/entities/traspaso/traspaso.domain-entity';
import { SecretariaMySqlEntity } from './secretaria-mysql.entity';

@Entity('traspaso', { schema: 'public' })
export class TraspasoMySqlEntity extends TraspasoDomainEntity {

  @PrimaryGeneratedColumn('uuid')
  traspasoId?: string;

  @Column()
  equipoNuevoId?: string;

  @Column()
  equipoSalidaId?: string;

  @Column()
  costo?: number;

  @Column()
  sate?: boolean;

  @Column()
  fechaSalida?: string;

  @OneToOne(
    () => SecretariaMySqlEntity,
    (secretaria) => secretaria.traspaso,
  )
  secretaria?: SecretariaMySqlEntity;
}
