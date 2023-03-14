import { Controller, Module } from "@nestjs/common";
import {
    TicketController,
    ClienteController,
    RepartidorController,
    PedidoController,
    EntradaController,
    PlatoPrincipalController,
    PostreController,
    BebidaController,
} from "./controllers";

import { PersistenceModule } from "./persistence/persistence.module";

@Module({
    imports:[PersistenceModule],
    controllers:[
        TicketController,
        ClienteController,
        RepartidorController,
        PedidoController,
        EntradaController,
        PlatoPrincipalController,
        PostreController,
        BebidaController
    ],
    providers:[],
    exports:[]
})
export class EntregaADomicilioModule {}