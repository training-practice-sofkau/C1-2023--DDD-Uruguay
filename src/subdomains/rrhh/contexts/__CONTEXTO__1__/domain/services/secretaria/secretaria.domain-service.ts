import { CesionDomainEntity } from '../../entities/cesion/cesion.domain-entity';
import { ContratoDomainEntity } from '../../entities/contrato/contrato.domain-entity';
import { SecretariaDomainEntity } from '../../entities/secretaria/secretaria.domain-entity';
import { TraspasoDomainEntity } from '../../entities/traspaso/traspaso.domain-entity';
import { INegociarCesionCommands, INegociarContratoCommands, INegociarTraspasoCommands } from '../../interfaces';
import { ICrearSecretariaCommands } from '../../interfaces/commands/secretaria/crear-secretaria.commands.interface';

export interface ISecretariaDomainService<T extends SecretariaDomainEntity = SecretariaDomainEntity> {


    CrearSecretaria(secretaria: ICrearSecretariaCommands):Promise<T>;


    NegociarCesion(cesion: INegociarCesionCommands):Promise<T>;

    NegociarContrato(contrato: INegociarContratoCommands):Promise<T>;

    NegociarTraspaso(traspaso: INegociarTraspasoCommands):Promise<T>;
    
}
