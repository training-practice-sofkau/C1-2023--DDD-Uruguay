import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { TramiteMySqlEntity } from './tramite-mysql.entity';
import { EmpleadoMySqlEntity } from './empleado-mysql.entity';
import { StaffDeportivoDomainEntity } from 'src/subdomains/area-deportiva/contexts/rrhh/domain/entities';


@Entity('staff_deportivo', { schema: 'public' })
export class StaffDeportivoMySqlEntity extends StaffDeportivoDomainEntity {
  @Column('uuid')
  staffDeportivoId?: string;

  @OneToOne(() => TramiteMySqlEntity, (tramite) => tramite.staff_deportivo,
    {
      cascade:['insert','update'],    
    })
  @JoinColumn()
  tramite?: TramiteMySqlEntity;

  @OneToOne(() => EmpleadoMySqlEntity, (Empleado) => Empleado.staffDeportivo,
    {
      cascade:['insert','update'],    
    })
  @JoinColumn()
  empleado?: EmpleadoMySqlEntity;
}
