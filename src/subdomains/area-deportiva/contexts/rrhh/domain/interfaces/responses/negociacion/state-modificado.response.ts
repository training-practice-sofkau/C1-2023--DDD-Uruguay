import { NegociacionDomainEntity } from '../../../entities/negociacion/negociacion.domain-entity';

export interface IStateModificadoResponse {
    
    success: boolean;
    data: NegociacionDomainEntity | null;
}
