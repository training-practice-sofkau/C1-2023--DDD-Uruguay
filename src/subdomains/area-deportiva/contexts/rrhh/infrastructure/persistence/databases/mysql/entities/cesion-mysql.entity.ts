import { Column, Entity, OneToOne } from 'typeorm';

import { CesionDomainEntity } from '../../../../../domain/entities/cesion/cesion.domain-entity';
import { SecretariaMySqlEntity } from './secretaria-mysql.entity';

@Entity('cesion', { schema: 'public' })
export class CesionMySqlEntity extends CesionDomainEntity {
  @Column('uuid', {
    primary: true,
    name: 'cesion_id',
    default: () => 'uuid_generate_v4()',
  })
  cesionId?: string;

  @Column('uuid', {
    primary: true,
    name: 'cesion_id',
    default: () => 'uuid_generate_v4()',
  })
  equipoNuevoId?: string;

  
  @Column('character varying', { name: 'fechaSalida', length: 255 })
  fechaSalida?: string;

  @Column()
  costo?: number;

  @Column()
  state?: boolean;
  
  @Column()
  empleadoId?: string;


  @OneToOne(
    () => SecretariaMySqlEntity,
    (secretaria) => secretaria.cesion
  )
  secretaria?: SecretariaMySqlEntity;


}


