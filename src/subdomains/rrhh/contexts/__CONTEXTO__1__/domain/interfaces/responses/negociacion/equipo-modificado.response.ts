import { NegociacionDomainEntity } from '../../../entities/negociacion/negociacion.domain-entity';

export interface IEquipoModificadoResponse {
    
    success: boolean;
    data: NegociacionDomainEntity | null;
}
