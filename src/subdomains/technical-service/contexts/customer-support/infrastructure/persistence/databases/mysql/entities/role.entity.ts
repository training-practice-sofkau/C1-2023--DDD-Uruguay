import { NoteValueObject, RoleValueObject, UUIDValueObject } from "../../../../../domain/value-objects";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { RoleDomainEntityBase } from '../../../../../domain/entities/employee/role.domain-entity/role.domain-entity';

@Entity()
export class RoleMySqlEntity extends RoleDomainEntityBase{

    @PrimaryGeneratedColumn()
    roleID?: string | UUIDValueObject;

    @Column()
    roleName?: string | RoleValueObject;

    @Column()
    roleDescription?: string | NoteValueObject;
}
