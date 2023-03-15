import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { CesionDomainEntity } from '../../../../../domain/entities/cesion/cesion.domain-entity';
import { SecretariaMySqlEntity } from './secretaria-mysql.entity';

@Entity('cesion', { schema: 'public' })
export class CesionMySqlEntity extends CesionDomainEntity {
  @PrimaryGeneratedColumn('uuid')
  cesionId?: string;

  @Column()
  equipoNuevoId?: string;

  
  @Column()
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


