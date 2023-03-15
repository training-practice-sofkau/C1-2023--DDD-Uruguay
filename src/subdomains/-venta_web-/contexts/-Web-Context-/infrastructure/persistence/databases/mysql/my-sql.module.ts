import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";


import { ClienteMySqlService, CompraMySqlService, CursoMySqlService } from "./services";
import { ClienteRepository, CompraRepository, CuponRepository, CursoRepository, MembershipRepository, PlanRepository } from "./repositories";
import { TypeOrmMySqlConfigService } from "./configs";
import { ClienteMySqlEntity, CursoMySqlEntity, PlanMySqlEntity, CuponMySqlEntity, CompraMySqlEntity, MembershipMySqlEntity } from "./entities";


@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useClass: TypeOrmMySqlConfigService,
        }),

        TypeOrmModule.forFeature([
            ClienteMySqlEntity,
            CursoMySqlEntity,
            PlanMySqlEntity,
            CuponMySqlEntity,
            CompraMySqlEntity,
            MembershipMySqlEntity
        ])
    ],
    providers: [
        ClienteMySqlService,
        ClienteRepository,

        CursoMySqlService,
        CursoRepository,

        CompraMySqlService,
        CompraRepository,

       //CuponMySqlService,
        CuponRepository,

        //MembershipMySqlService,
        MembershipRepository,

        //PlanMySqlService,
        PlanRepository,

    ],
    exports: [
        ClienteMySqlService,
        ClienteRepository,

        CursoMySqlService,
        CursoRepository,

        CompraMySqlService,
        CompraRepository,

       //CuponMySqlService,
        CuponRepository,

        //MembershipMySqlService,
        MembershipRepository,

        //PlanMySqlService,
        PlanRepository,
    ]
})
export class MySqlModule { }