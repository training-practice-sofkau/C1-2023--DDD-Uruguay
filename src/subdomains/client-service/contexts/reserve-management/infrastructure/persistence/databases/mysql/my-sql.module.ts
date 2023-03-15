import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmMySqlConfigService } from './configs/type-orm.mysql.service';
import {
    CheckInMySqlEntity,
    CheckOutMySqlEntity,
    ConsumptionMySqlEntity,
    CustomerMySqlEntity,
    GuestMySqlEntity,
    InvoiceMySqlEntity,
    ReserveMySqlEntity,
    RoomKeyMySqlEntity,
    RoomMySqlEntity
} from './entities';
import {
    CheckInRepository,
    CheckOutRepository,
    ConsumptionRepository,
    CustomerRepository,
    GuestRepository,
    InvoiceRepository,
    ReserveRepository,
    RoomKeyRepository,
    RoomRepository
} from './repositories';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useClass: TypeOrmMySqlConfigService,
        }),

        TypeOrmModule.forFeature([
            CheckInMySqlEntity,
            CheckOutMySqlEntity,
            ConsumptionMySqlEntity,
            CustomerMySqlEntity,
            GuestMySqlEntity,
            InvoiceMySqlEntity,
            ReserveMySqlEntity,
            RoomMySqlEntity,
            RoomKeyMySqlEntity

        ])
    ],
    providers: [
        CheckInMySqlEntity,
        CheckOutMySqlEntity,
        ConsumptionMySqlEntity,
        CustomerMySqlEntity,
        GuestMySqlEntity,
        InvoiceMySqlEntity,
        ReserveMySqlEntity,
        RoomMySqlEntity,
        RoomKeyMySqlEntity,

        CheckInRepository,
        CheckOutRepository,
        ConsumptionRepository,
        CustomerRepository,
        GuestRepository,
        InvoiceRepository,
        ReserveRepository,
        RoomKeyRepository,
        RoomRepository,

    ],
    exports: [
        CheckInMySqlEntity,
        CheckOutMySqlEntity,
        ConsumptionMySqlEntity,
        CustomerMySqlEntity,
        GuestMySqlEntity,
        InvoiceMySqlEntity,
        ReserveMySqlEntity,
        RoomMySqlEntity,
        RoomKeyMySqlEntity,

        CheckInRepository,
        CheckOutRepository,
        ConsumptionRepository,
        CustomerRepository,
        GuestRepository,
        InvoiceRepository,
        ReserveRepository,
        RoomKeyRepository,
        RoomRepository,
    ]
})
export class MySqlModule { }