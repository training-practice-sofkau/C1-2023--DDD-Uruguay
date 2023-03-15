import { Controller, Module } from "@nestjs/common";
import { PersistenceModule } from './persistence/persistence.module';
import { CompraController, MembershipController } from "./controllers";

@Module({
    imports:[PersistenceModule],
    controllers:[CompraController ,MembershipController ],
    providers:[],
    exports:[]
})
export class VentaWebModule{}