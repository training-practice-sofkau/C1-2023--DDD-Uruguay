import { Module } from '@nestjs/common';
import { MySqlModule } from './databases/mysql/my-sql.module';
import { ClientService, OrderService, InvoiceService } from './services';


@Module({
    imports: [MySqlModule],
    providers: [ClientService, OrderService, InvoiceService],
    exports: [ClientService, OrderService, InvoiceService],
})
export class PersistenceModule { }
