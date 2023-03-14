import { Module } from "@nestjs/common";
import { MySqlModule } from './databases/mysql/my-sql.module';
import { ClienteMySqlService } from "./databases";


@Module({
    imports: [MySqlModule],
    providers: [ClienteMySqlService ],
    exports: [ClienteMySqlService ]
})
export class PersistenceModule { }