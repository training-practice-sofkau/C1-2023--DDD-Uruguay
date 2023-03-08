import { NegociacionDomainEntity } from '../../../entities/negociacion/negociacion.domain-entity';

export interface EquipoModificadoResponse {
    
    success: boolean;
    data: NegociacionDomainEntity | null;
}
