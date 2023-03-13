import { CesionDomainEntity } from '../../../entities/cesion/cesion.domain-entity';
export interface ICostoModificadoResponse {
    
    success: boolean;
    data: CesionDomainEntity | null;
}
