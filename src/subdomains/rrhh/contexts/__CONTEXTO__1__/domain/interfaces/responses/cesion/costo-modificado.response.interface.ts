import { CesionDomainEntity } from '../../../entities/cesion/cesion.domain-entity';
export interface CostoModificadoResponse {
    
    success: boolean;
    data: CesionDomainEntity | null;
}
