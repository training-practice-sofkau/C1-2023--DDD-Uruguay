import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"

import { RepartidorDomainEntityBase } from '../../../../../../domain/entities';
import { TicketMySqlEntity } from "./ticket.entity";

@Entity()
export class RepartidorMySqlEntity extends RepartidorDomainEntityBase {
    @PrimaryGeneratedColumn('uuid')
    repartidorId: string;

    @Column()
    nombre: string;

    @Column()
    vehiculo: string;

    @Column()
    createdAt: Date | number;

    @OneToOne( ()=> TicketMySqlEntity, (ticket)=> ticket.repartidor )
    ticket: TicketMySqlEntity;
}