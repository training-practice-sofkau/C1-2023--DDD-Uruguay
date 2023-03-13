import { Module } from "@nestjs/common";
import { MySqlModule } from './databases/mysql/my-sql.module';
import { ClientService } from './services/client.service';

@Module({
    imports: [MySqlModule],
    providers: [ClientService],
    exports: [ClientService]
})
export class PersistenceModule { }