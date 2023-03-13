import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EmployeeDomainEntityBase } from '../../../../../domain/entities/employee/employee.domain-entity';
import { UUIDValueObject } from '../../../../../domain/value-objects/common/uuid/uuid.value-object';
import { FullnameValueObject } from '../../../../../domain/value-objects/common/fullname/fullname.value-object';
import { EmailValueObject } from '../../../../../domain/value-objects/common/email/email.value-object';
import { RoleValueObject } from '../../../../../domain/value-objects/employee/role.value-object';
import { TrueFalseValueObject } from '../../../../../domain/value-objects/common/true-false/true-false.value-object';


@Entity()
export class EmployeeMySqlEntity extends EmployeeDomainEntityBase{

    @PrimaryGeneratedColumn()
    employeeID: string | UUIDValueObject;

    @Column()
    employeeName: string | FullnameValueObject;
    
    @Column()
    employeeEmail: string | EmailValueObject;

    @Column()
    employeeRoleId: string | UUIDValueObject;

    @Column()
    employeeIsActive: boolean | TrueFalseValueObject;

}