import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EmployeeDomainEntityBase } from '../../../../../domain/entities/employee/employee.domain-entity';


@Entity()
export class EmployeeMySqlEntity extends EmployeeDomainEntityBase{

    @PrimaryGeneratedColumn()
    employeeID: string;

    @Column()
    employeeName: string;
    
    @Column()
    employeeEmail: string;

    @Column()
    employeeRoleId: string;

    @Column()
    employeeIsActive: boolean;

}