import { CesionDomainEntity } from '../../entities/cesion/cesion.domain-entity';
import { ContratoDomainEntity } from '../../entities/contrato/contrato.domain-entity';
import { SecretariaDomainEntity } from '../../entities/secretaria/secretaria.domain-entity';
import { TraspasoDomainEntity } from '../../entities/traspaso/traspaso.domain-entity';
import { ICrearSecretariaCommands } from '../../interfaces/commands/secretaria/crear-secretaria.commands.interface';
import { ICesionDomainService } from './cesion.domain-service';
import { ITraspasoDomainService } from './traspaso.domain-service';
import { IContratoDomainService } from './contrato.domain-service';

export interface ISecretariaDomainService extends ICesionDomainService,ITraspasoDomainService,IContratoDomainService{

    CrearSecretaria(secretaria: ICrearSecretariaCommands):Promise<SecretariaDomainEntity>;

    NegociarCesion(cesion: CesionDomainEntity):Promise<CesionDomainEntity>;

    NegociarContrato(contrato: ContratoDomainEntity):Promise<ContratoDomainEntity>;

    NegociarTraspaso(traspaso: TraspasoDomainEntity):Promise<TraspasoDomainEntity>;

    BuscarCesion(cesion : CesionDomainEntity):Promise<CesionDomainEntity>;

    BuscarTraspaso(traspaso : TraspasoDomainEntity):Promise<TraspasoDomainEntity>;

    BuscarContrato(contrato : ContratoDomainEntity):Promise<ContratoDomainEntity>;

    




}
