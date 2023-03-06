import { NegociacionDomainEntity } from "../../../entities";

export interface TipoNegociacionModificadoResponse {
    
    success: boolean;
    data: NegociacionDomainEntity | null;
}
