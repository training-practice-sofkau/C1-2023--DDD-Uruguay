import { SellerDomain } from '../entities/Sale-domain/seller-domain-entity';
export interface SellerDomainService  < T extends SellerDomain = SellerDomain >  {

    UpdateNameSeller(name: string):   Promise<T>;
    

}
