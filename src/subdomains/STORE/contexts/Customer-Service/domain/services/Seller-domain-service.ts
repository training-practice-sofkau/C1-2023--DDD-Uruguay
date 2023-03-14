import { SellerDomain } from '../entities/Sale-domain/seller-domain-entity';
import { IUpdateNameSeller } from '../interfaces/commands/Sale-commands/Seller-Commands/update-name-command';
export interface SellerDomainService  < T extends SellerDomain = SellerDomain >  {

    UpdateNameSeller(data: T): Promise<T>;
    

}
