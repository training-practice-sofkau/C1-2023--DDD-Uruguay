import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

import { TramiteDomainEntity } from '../../../../../domain/entities/tramite/tramite.entity.interface';
import { StaffDeportivoMySqlEntity } from './staff-deportivo-mysql.entity';
import { NegociacionMySqlEntity } from './negociacion-mysql.entity';

@Entity()
export class TramiteMySqlEntity extends TramiteDomainEntity {
  @Column('character varying', { name: 'fecha', length: 255 })
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
