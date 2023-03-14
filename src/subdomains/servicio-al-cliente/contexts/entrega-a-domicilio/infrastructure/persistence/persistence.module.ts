import { Module } from "@nestjs/common";
import { MySqlModule } from './databases/mysql/my-sql.module';
import {
    TicketService,
    ClienteService,
    RepartidorService,
    PedidoService,
    EntradaService,
    PlatoPrincipalService,
    PostreService,
    BebidaService
} from './services';

@Module({
    imports: [MySqlModule],
    providers: [
        TicketService,
        ClienteService,
        RepartidorService,
        PedidoService,
        EntradaService,
        PlatoPrincipalService,
        PostreService,
        BebidaService
    ],
    exports: [
        TicketService,
        ClienteService,
        RepartidorService,
        PedidoService,
        EntradaService,
        PlatoPrincipalService,
        PostreService,
        BebidaService
    ]
})
export class PersistenceModule { }