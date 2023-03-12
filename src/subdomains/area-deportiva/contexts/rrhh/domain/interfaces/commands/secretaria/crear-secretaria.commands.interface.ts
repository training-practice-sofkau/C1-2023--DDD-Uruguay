import { CesionDomainEntity } from "../../../entities/cesion/cesion.domain-entity";
import { ContratoDomainEntity } from "../../../entities/contrato/contrato.domain-entity";
import { TraspasoDomainEntity } from "../../../entities/traspaso/traspaso.domain-entity";

export interface ICrearSecretariaCommands {

    secretariaId?:string ;
    empleadoId: string ;
    staffDeportivoId?: string ;
    contrato?: ContratoDomainEntity[];
    traspaso?: TraspasoDomainEntity[];
    cesion?: CesionDomainEntity[];

}
