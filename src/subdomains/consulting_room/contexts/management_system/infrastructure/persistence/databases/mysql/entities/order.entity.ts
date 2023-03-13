import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from "typeorm"

import { OrderDomainEntityBase } from '../../../../../domain/entities/order.domain-entity';
import { ClientMySqlEntity } from './client.entity';
import { InovoiceMySqlEntity } from "./invoice.entity";

@Entity()
export class OrderMySqlEntity extends OrderDomainEntityBase {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    description: string;

    @Column()
    date: number;

    @OneToOne(() => ClientMySqlEntity, (client) => client.order,
        {
            cascade: ['insert', 'update'],
        },
    )
    @JoinColumn()
    client: ClientMySqlEntity;


    @OneToOne(() => InovoiceMySqlEntity, (invoice) => invoice.order,
        {
            cascade: ['insert', 'update'],
        },
    )
    @JoinColumn()
    invoice: InovoiceMySqlEntity
}