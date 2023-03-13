import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"

import { ClientDomainEntitybase } from '../../../../../domain/entities';
import { OrderMySqlEntity } from "./order.entity";

@Entity()
export class ClientMySqlEntity extends ClientDomainEntitybase {
    @PrimaryGeneratedColumn('uuid')
    clientId: string;

    @Column()
    fullName: string;

    @Column()
    phone: string;

    @OneToOne( ()=> OrderMySqlEntity, (order)=> order.client )
    order: OrderMySqlEntity;
}