import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { TramiteDomainEntity } from '../../../../../domain/entities/tramite/tramite.entity.interface';
import { StaffDeportivoMySqlEntity } from './staff-deportivo-mysql.entity';
import { NegociacionMySqlEntity } from './negociacion-mysql.entity';

@Entity('tramite', { schema: 'public' })
export class TramiteMySqlEntity extends TramiteDomainEntity {

  @PrimaryGeneratedColumn('uuid')
  tramiteId?: string;

  @Column()
  fecha?: string;

  @OneToOne(() => NegociacionMySqlEntity, (negociacion) => negociacion.tramite,
  {
    cascade:['insert','update'],
  })
  @JoinColumn()
  negociacion?: NegociacionMySqlEntity;

  @OneToOne(() =>StaffDeportivoMySqlEntity, (staffDeportivo) => staffDeportivo.tramite )
  staff_deportivo: StaffDeportivoMySqlEntity
}
