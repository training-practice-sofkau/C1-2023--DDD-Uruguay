import { Module } from '@nestjs/common';
import { TypeOrmMySqlConfigService } from './configs/type-orm-my-sql-config.service';
import { StaffDeportivoMySqlEntity } from './entities/staff-deportivo-mysql.entity';
import { EmpleadoMySqlEntity } from './entities/empleado-mysql.entity';
import { TramiteMySqlEntity } from './entities/tramite-mysql.entity';
import { NegociacionMySqlEntity } from './entities/negociacion-mysql.entity';
import { SecretariaMySqlEntity } from './entities/secretaria-mysql.entity';
import { ContratoMySqlEntity } from './entities/contrato-mysql.entity';
import { TraspasoMySqlEntity } from './entities/traspaso-mysql.entity';
import { CesionMySqlEntity } from './entities/cesion-mysql.entity';
import { StaffDeportivoRepository } from './repositories/staff-deportivo.repository';
import { EmpleadoRepository } from './repositories/empleado.repository';
import { TramiteRepository } from './repositories/tramite.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CesionRepository } from './repositories/cesion.repository';
import { ContratoRepository } from './repositories/contrato.repository';
import { NegociacionRepository } from './repositories/negociacion.repository';
import { SecretariaRepository } from './repositories/secretaria.repository';
import { TraspasoRepository } from './repositories/traspaso.repository';
import { StaffDeportivoMySqlService } from './services/staff-deportivos.service';
import { EmpleadoMySqlService } from './services/empleado.service';
import { TramiteMySqlService } from './services/tramite.service';
import { SecretariaMySqlService } from './services/secretaria.service';
import { ContratoMySqlService } from './services/contrato.service';
import { CesionMySqlService } from './services/cesion.service';
import { TraspasoMySqlService } from './services/traspaso.service';
import { NegociacionMySqlService } from './services/negociacion.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmMySqlConfigService,
      
    }),
    TypeOrmModule.forFeature([
      StaffDeportivoMySqlEntity,
      EmpleadoMySqlEntity,
      TramiteMySqlEntity,
      NegociacionMySqlEntity,
      SecretariaMySqlEntity,
      ContratoMySqlEntity,
      TraspasoMySqlEntity,
      CesionMySqlEntity,
    ]),
  ],
  controllers: [],
  providers: [
    TypeOrmMySqlConfigService,

    StaffDeportivoMySqlService,
    EmpleadoMySqlService,
    TramiteMySqlService,
    SecretariaMySqlService,
    ContratoMySqlService,
    CesionMySqlService,
    TraspasoMySqlService,
    NegociacionMySqlService,


    StaffDeportivoRepository,
    EmpleadoRepository,
    TramiteRepository,
    NegociacionRepository,
    SecretariaRepository,
    ContratoRepository,
    CesionRepository,
    TraspasoRepository,
  ],
  exports: [
    //services
TypeOrmMySqlConfigService,
    
    StaffDeportivoMySqlService,
    EmpleadoMySqlService,
    TramiteMySqlService,
    SecretariaMySqlService,
    ContratoMySqlService,
    CesionMySqlService,
    TraspasoMySqlService,
    NegociacionMySqlService,


    StaffDeportivoRepository,
    EmpleadoRepository,
    TramiteRepository,
    NegociacionRepository,
    SecretariaRepository,
    ContratoRepository,
    CesionRepository,
    TraspasoRepository,],
})
export class MySqlModule {}
