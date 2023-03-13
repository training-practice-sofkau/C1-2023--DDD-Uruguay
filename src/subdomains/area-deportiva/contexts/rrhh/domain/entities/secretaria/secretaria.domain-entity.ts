import { v4 as uuidv4 } from 'uuid';


import { IdValueObject } from '../../value-objects';
import { CesionDomainEntity } from '../cesion/cesion.domain-entity';
import { ContratoDomainEntity } from '../contrato/contrato.domain-entity';
import { ISecretariaDomainInterface } from '../interfaces/secretaria/secretaria.domain-interface';
import { TraspasoDomainEntity } from '../traspaso/traspaso.domain-entity';

export class SecretariaDomainEntity implements ISecretariaDomainInterface{
    
    secretariaId?:string | IdValueObject;
    empleadoId?: string | IdValueObject;
    staffDeportivoId?: string | IdValueObject;
    contrato?: ContratoDomainEntity;
    traspaso?: TraspasoDomainEntity;
    cesion?: CesionDomainEntity;

    constructor(_secretaria?: ISecretariaDomainInterface) {

        if (_secretaria.secretariaId)
            this.secretariaId = _secretaria.secretariaId;
        else
            this.secretariaId = uuidv4();

        if (_secretaria.empleadoId)
            this.empleadoId = _secretaria.empleadoId;

        if (_secretaria.staffDeportivoId)
            this.staffDeportivoId = _secretaria.staffDeportivoId;

        if (_secretaria.contrato)
            this.contrato = _secretaria.contrato;
            
        if (_secretaria.traspaso)
            this.traspaso = _secretaria.traspaso;

        if (_secretaria.cesion)
            this.cesion = _secretaria.cesion;
    }
}
