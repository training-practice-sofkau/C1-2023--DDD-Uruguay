import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { EmpleadoDomainEntity } from '../../../../../domain/entities/empleado/EmpleadoDomainEntity';
import { StaffDeportivoMySqlEntity } from './staff-deportivo-mysql.entity';

@Entity()
export class EmpleadoMySqlEntity extends EmpleadoDomainEntity {
  @Column('uuid')
  empleadoId?: string;

  @Column('character varying', { name: 'nombre', length: 255 })
  nombre?: string;

  @Column('character varying', { name: 'documento', length: 255 })
  documento?: string;

  @Column('character varying', { name: 'tipoEmpleado', length: 255 })
  tipoEmpleado?: string;

  @Column('character varying', { name: 'nacionalidad', length: 255 })
  nacionalidad?: string;

  @Column()
  edad?: number;

  @Column()
  salario?: number;


  @OneToOne(
    () => StaffDeportivoMySqlEntity,
    (staffDeportivo) => staffDeportivo.empleado,
  )
  @JoinColumn()
  staffDeportivo?: StaffDeportivoMySqlEntity;
}
