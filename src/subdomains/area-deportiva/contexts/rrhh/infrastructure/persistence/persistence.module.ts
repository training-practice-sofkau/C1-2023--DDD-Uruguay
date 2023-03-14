import { Module } from '@nestjs/common';
import { MySqlModule } from './databases/mysql/mysql.module';
import { StaffDeportivoMySqlService, EmpleadoMySqlService, TramiteMySqlService, SecretariaMySqlService, ContratoMySqlService, CesionMySqlService, TraspasoMySqlService, NegociacionMySqlService } from './databases';

@Module({
  imports: [MySqlModule],
  providers: [
    StaffDeportivoMySqlService,
    EmpleadoMySqlService,
    TramiteMySqlService,
    SecretariaMySqlService,
    ContratoMySqlService,
    CesionMySqlService,
    TraspasoMySqlService,
    NegociacionMySqlService,

    
],
  exports: [
    StaffDeportivoMySqlService,
    EmpleadoMySqlService,
    TramiteMySqlService,
    SecretariaMySqlService,
    ContratoMySqlService,
    CesionMySqlService,
    TraspasoMySqlService,
    NegociacionMySqlService,

  ],
})
export class PersistenceModule {}
