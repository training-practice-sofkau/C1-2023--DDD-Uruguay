import { SellerDomain } from '../entities/Sale-domain/seller-domain-entity';
export interface SellerDomainService  < T extends SellerDomain = SellerDomain >  {

    UpdateNameSeller(id: string, name: string):   Promise<T>;
    

}
