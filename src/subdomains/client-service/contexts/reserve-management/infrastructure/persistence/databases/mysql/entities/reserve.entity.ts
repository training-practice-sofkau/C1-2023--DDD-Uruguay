import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from "typeorm"

import { ReserveDomainEntity } from '../../../../../domain/entities/';
import { CustomerMySqlEntity, RoomMySqlEntity } from './';


@Entity()
export class ReserveMySqlEntity extends ReserveDomainEntity {
    @PrimaryGeneratedColumn('uuid')
    reserveId: string;

    @Column()
    numberOfGuests: number;

    @Column()
    startDate: Date;
    
    @Column()
    endDate: Date;

    @OneToOne(() => CustomerMySqlEntity, (customer) => customer.reserve,
        {
            cascade: ['insert', 'update'],
        },
    )
    @JoinColumn()
    customer: CustomerMySqlEntity;


    @OneToOne(() => RoomMySqlEntity, (room) => room.reserve,
        {
            cascade: ['insert', 'update'],
        },
    )
    @JoinColumn()
    room: RoomMySqlEntity
}