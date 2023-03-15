import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"

import { RoomKeyDomainEntity } from '../../../../../domain/entities';
import { CheckInMySqlEntity } from '.';

@Entity()
export class RoomKeyMySqlEntity extends RoomKeyDomainEntity {

    @PrimaryGeneratedColumn('uuid')
    roomKeyId: string;

    @Column()
    roomNumber: number;

    @Column()
    accessLevel: string;

    @OneToOne( ()=> CheckInMySqlEntity, (checkIn)=> checkIn.roomKey)
    checkIn: CheckInMySqlEntity
}