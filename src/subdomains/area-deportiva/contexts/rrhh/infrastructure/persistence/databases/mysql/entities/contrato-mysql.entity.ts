import { Column, Entity, OneToOne } from 'typeorm';

import { ContratoDomainEntity } from '../../../../../domain/entities/contrato/contrato.domain-entity';
import { SecretariaMySqlEntity } from './secretaria-mysql.entity';

@Entity('contrato', { schema: 'public' })
export class ContratoMySqlEntity extends ContratoDomainEntity {
  @Column('uuid', {
    primary: true,
    name: 'contrato_id',
    default: () => 'uuid_generate_v4()',
  })
  contratoId?: string;

  @Column()
  empleadoId?: string;

  @Column('character varying', { name: 'fechaFinalizacion', length: 255 })
  fechaFinalizacion?: string;

  @Column()
  state?:boolean;

  @OneToOne(
    () => SecretariaMySqlEntity,
    (secretaria) => secretaria.contrato,
  )
  secretaria?: SecretariaMySqlEntity;
}
