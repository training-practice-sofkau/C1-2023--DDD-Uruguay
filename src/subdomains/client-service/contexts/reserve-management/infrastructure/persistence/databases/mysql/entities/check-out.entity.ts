import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from "typeorm"

import { CheckOutDomainEntity } from '../../../../../domain/entities';
import { InvoiceMySqlEntity, ConsumptionMySqlEntity } from '.';


@Entity()
export class CheckOutMySqlEntity extends CheckOutDomainEntity {
    @PrimaryGeneratedColumn('uuid')
    checkOutId: string;

    @Column()
    endDate: Date;

    @Column()
    recepsionistName: string;

    @OneToOne(() => InvoiceMySqlEntity, (invoice) => invoice.checkOut,
        {
            cascade: ['insert', 'update'],
        },
    )
    @JoinColumn()
    invoice: InvoiceMySqlEntity;


    @OneToOne(() => ConsumptionMySqlEntity, (consumption) => consumption.checkOut,
        {
            cascade: ['insert', 'update'],
        },
    )
    @JoinColumn()
    consumption: ConsumptionMySqlEntity;
}