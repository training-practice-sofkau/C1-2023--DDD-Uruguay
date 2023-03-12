import { NegociacionDomainEntity } from '../../../entities/negociacion/negociacion.domain-entity';
export interface ICrearTramiteCommands {
    
    tramiteId?: string ;
    fecha?: string;
    negociacion: NegociacionDomainEntity;

}
