import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { EmpleadoDomainEntity } from '../../../../../domain/entities/empleado/EmpleadoDomainEntity';
import { StaffDeportivoMySqlEntity } from './staff-deportivo-mysql.entity';

@Entity('empleado', { schema: 'public' })
export class EmpleadoMySqlEntity extends EmpleadoDomainEntity {
  @PrimaryGeneratedColumn('uuid')
  empleadoId?: string;

  @Column()
  nombre?: string;

  @Column()
  documento?: string;

  @Column()
  tipoEmpleado?: string;

  @Column()
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
