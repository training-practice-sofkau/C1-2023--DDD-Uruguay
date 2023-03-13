import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DeviceDomainEntityBase } from '../../../../../domain/entities/support-ticket/';


@Entity()
export class DeviceMySqlEntity extends DeviceDomainEntityBase{

    @PrimaryGeneratedColumn()
    deviceID: string;

    @Column()
    deviceType: string;

    @Column()
    issues: string[];


}