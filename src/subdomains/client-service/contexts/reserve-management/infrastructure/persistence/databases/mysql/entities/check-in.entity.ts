import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from "typeorm"

import { CheckInDomainEntity } from '../../../../../domain/entities';
import { GuestMySqlEntity, RoomKeyMySqlEntity } from '.';


@Entity()
export class CheckInMySqlEntity extends CheckInDomainEntity {
    
    @PrimaryGeneratedColumn('uuid')
    checkInId: string;

    @Column()
    recepsionistName: string;

    @Column()
    startDate: Date;

    @OneToOne(() => GuestMySqlEntity, (guest) => guest.checkIn,
        {
            cascade: ['insert', 'update'],
        },
    )
    @JoinColumn()
    guest: GuestMySqlEntity;


    @OneToOne(() => RoomKeyMySqlEntity, (roomKey) => roomKey.checkIn,
        {
            cascade: ['insert', 'update'],
        },
    )
    @JoinColumn()
    roomKey: RoomKeyMySqlEntity
}