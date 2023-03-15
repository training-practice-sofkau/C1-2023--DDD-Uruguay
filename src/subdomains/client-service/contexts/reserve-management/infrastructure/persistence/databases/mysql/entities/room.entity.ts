import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"

import { RoomDomainEntity } from '../../../../../domain/entities/';
import { ReserveMySqlEntity } from './';

@Entity()
export class RoomMySqlEntity extends RoomDomainEntity {

    @PrimaryGeneratedColumn('uuid')
    roomId: string;

    @Column()
    location: string;

    @Column()
    accommodation: string;

    @Column()
    type: string;

    @Column()
    state: boolean;

    @Column()
    roomNumber: number;

    @OneToOne( ()=> ReserveMySqlEntity, (reserve)=> reserve.room)
    reserve: ReserveMySqlEntity
}