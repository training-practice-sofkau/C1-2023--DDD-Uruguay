import { Module } from "@nestjs/common";
import { MySqlModule } from './databases/mysql/my-sql.module';
import {
    CheckInService,
    CheckOutService,
    ConsumptionService,
    CustomerService,
    GuestService,
    InvoiceService,
    ReserveService,
    RoomKeyService,
    RoomService
} from "./services";


@Module({
    imports: [MySqlModule],
    providers: [
        CheckInService,
        CheckOutService,
        ConsumptionService,
        CustomerService,
        GuestService,
        InvoiceService,
        ReserveService,
        RoomKeyService,
        RoomService,
    ],
    exports: [
        CheckInService,
        CheckOutService,
        ConsumptionService,
        CustomerService,
        GuestService,
        InvoiceService,
        ReserveService,
        RoomKeyService,
        RoomService,
    ]
})
export class PersistenceModule { }