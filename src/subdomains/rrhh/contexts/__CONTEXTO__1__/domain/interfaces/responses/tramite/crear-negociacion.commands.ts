import { TramiteDomainEntity } from '../../../entities/tramite/tramite.entity.interface';

export interface NegociacionCreadaResponse {
    
    success: boolean;
    data: TramiteDomainEntity | null;
}