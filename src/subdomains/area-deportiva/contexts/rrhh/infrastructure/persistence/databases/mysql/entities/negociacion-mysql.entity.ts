import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { NegociacionDomainEntity } from '../../../../../domain/entities/negociacion/negociacion.domain-entity';
import { TramiteMySqlEntity } from './tramite-mysql.entity';

@Entity('negociacion', { schema: 'public' })
export class NegociacionMySqlEntity extends NegociacionDomainEntity {
  @PrimaryGeneratedColumn('uuid')
  negociacionId?: string;

  @Column()
  equipoSalidaId?: string;

  @Column()
  equipoEntradaId?: string;

  @Column()
  tipoNegociacion?: string;

  @Column()
  terminoACumplir?: string;

  @Column()
  state?: boolean;

  @OneToOne(
    () => TramiteMySqlEntity,
    (tramite) => tramite.negociacion
  )
  tramite?: TramiteMySqlEntity;

}
