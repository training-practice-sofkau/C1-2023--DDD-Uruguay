import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { ContratoDomainEntity } from '../../../../../domain/entities/contrato/contrato.domain-entity';
import { SecretariaMySqlEntity } from './secretaria-mysql.entity';

@Entity('contrato', { schema: 'public' })
export class ContratoMySqlEntity extends ContratoDomainEntity {
  @PrimaryGeneratedColumn('uuid')
  contratoId?: string;

  @Column()
  empleadoId?: string;

  @Column()
  fechaFinalizacion?: string;

  @Column()
  state?:boolean;

  @OneToOne(
    () => SecretariaMySqlEntity,
    (secretaria) => secretaria.contrato,
  )
  secretaria?: SecretariaMySqlEntity;
}
