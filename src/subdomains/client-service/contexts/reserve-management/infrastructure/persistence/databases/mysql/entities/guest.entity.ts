import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"

import { GuestDomainEntity } from '../../../../../domain/entities';
import { CheckInMySqlEntity } from "./";

@Entity()
export class GuestMySqlEntity extends GuestDomainEntity {
    @PrimaryGeneratedColumn('uuid')
    guestId: string;

    @Column()
    fullName: string;

    @Column()
    document: number;

    @Column()
    phone: string;

    @Column()
    email: string;

    @OneToOne( ()=> CheckInMySqlEntity, (checkIn)=> checkIn.guest )
    checkIn: CheckInMySqlEntity;
}