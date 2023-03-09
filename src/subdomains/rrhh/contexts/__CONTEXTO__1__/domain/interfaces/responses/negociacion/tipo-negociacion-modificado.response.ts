import { NegociacionDomainEntity } from "../../../entities";

export interface ITipoNegociacionModificadoResponse {
    
    success: boolean;
    data: NegociacionDomainEntity | null;
}
