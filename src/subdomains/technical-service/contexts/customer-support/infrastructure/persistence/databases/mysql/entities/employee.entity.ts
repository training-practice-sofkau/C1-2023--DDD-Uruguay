import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EmployeeDomainEntityBase } from '../../../../../domain/entities/employee/employee.domain-entity';
import { TrueFalseValueObject, EmailValueObject, FullnameValueObject, UUIDValueObject } from '../../../../../domain/value-objects';

@Entity('employee')
export class EmployeeMySqlEntity extends EmployeeDomainEntityBase{

    @PrimaryGeneratedColumn('uuid')
    employeeID: string; //| UUIDValueObject;

    @Column()
    employeeName: string; // | FullnameValueObject;
    
    @Column()
    employeeEmail: string; // | EmailValueObject;

    @Column()
    employeeRoleId: string; // | UUIDValueObject;

    @Column({default: true})
    employeeIsActive: boolean ; //| TrueFalseValueObject;

}