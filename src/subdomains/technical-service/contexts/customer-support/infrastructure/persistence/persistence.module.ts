import { Module } from "@nestjs/common";
import { MySqlModule } from "./databases/";
import { CustomerService } from './services/customer.service';



@Module({
    imports: [MySqlModule],
    providers: [
        CustomerService,
        
    ],
    exports: [
        CustomerService,

    ]
})
export class PersistenceModule { }
