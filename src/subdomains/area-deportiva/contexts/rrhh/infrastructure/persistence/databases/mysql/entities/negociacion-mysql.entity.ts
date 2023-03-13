import { Column, Entity, OneToOne } from 'typeorm';

import { NegociacionDomainEntity } from '../../../../../domain/entities/negociacion/negociacion.domain-entity';
import { TramiteMySqlEntity } from './tramite-mysql.entity';

@Entity('usuario', { schema: 'public' })
export class NegociacionMySqlEntity extends NegociacionDomainEntity {
  @Column('uuid')
  negociacionId?: string;

  @Column('uuid')
  equipoSalidaId?: string;

  @Column('uuid')
  equipoEntradaId?: string;

  @Column('character varying', { name: 'tipoNegociacion', length: 255 })
  tipoNegociacion?: string;

  @Column('character varying', { name: 'terminoACumplir', length: 128 })
  terminoACumplir?: string;

  @Column()
  state?: boolean;

  @OneToOne(
    () => TramiteMySqlEntity,
    (tramite) => tramite.negociacion
  )
  tramite?: TramiteMySqlEntity;

}
