import { Column, Entity, OneToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';

import { OrderDomainEntityBase } from '../../../../../domain/entities/order.domain-entity';
import { ClientMySqlEntity } from './client.entity';
import { InvoiceMySqlEntity } from './invoice.entity';

@Entity('order', { schema: 'public' })
export class OrderMySqlEntity extends OrderDomainEntityBase {
    @PrimaryGeneratedColumn('uuid')
    orderId?: string;

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

    @OneToOne(() => InvoiceMySqlEntity, (invoice) => invoice.order,
        {
            cascade: ['insert', 'update'],
        },
    )
    @JoinColumn()
    invoice: InvoiceMySqlEntity;
}