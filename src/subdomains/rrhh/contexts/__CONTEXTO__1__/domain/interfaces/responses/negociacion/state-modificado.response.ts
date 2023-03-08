import { NegociacionDomainEntity } from '../../../entities/negociacion/negociacion.domain-entity';

export interface StateModificadoResponse {
    
    success: boolean;
    data: NegociacionDomainEntity | null;
}
