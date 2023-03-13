import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DeviceDomainEntityBase } from '../../../../../domain/entities/support-ticket/';
import { UUIDValueObject } from '../../../../../domain/value-objects/common/uuid/uuid.value-object';
import { DeviceTypeValueObject } from '../../../../../domain/value-objects/device/device-type.value-object';
import { IssueValueObject } from '../../../../../domain/value-objects/device/issue.value-object';


@Entity()
export class DeviceMySqlEntity extends DeviceDomainEntityBase{

    @PrimaryGeneratedColumn()
    deviceID: string | UUIDValueObject;

    @Column()
    deviceType: string | DeviceTypeValueObject;

    @Column()
    issues: string[] | IssueValueObject[];


}