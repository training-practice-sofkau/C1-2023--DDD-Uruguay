import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { RoleDomainEntityBase } from '../../../../../domain/entities/employee/role.domain-entity/role.domain-entity';

@Entity()
export class RoleMySqlEntity extends RoleDomainEntityBase{

    @PrimaryGeneratedColumn()
    roleID: string;

    @Column()
    roleName: string;

    @Column()
    roleDescription: string;
}
