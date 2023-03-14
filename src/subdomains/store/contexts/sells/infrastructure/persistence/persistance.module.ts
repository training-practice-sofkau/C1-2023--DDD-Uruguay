import { Module } from "@nestjs/common";
import { MySqlModule } from "./databases/mysql";
import { CounterService } from "./services/counter.service";
import { PosterService } from "./services/poster.service";
import { ProductService } from "./services/product.service";

@Module({
    imports: [MySqlModule],
    providers:
        [
            PosterService,
            ProductService,
            CounterService
        ],
    exports:
        [
            PosterService,
            ProductService,
            CounterService
        ]
})
export class PersistanceModule { }