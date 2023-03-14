import { SellerDomainService } from '../../../../../domain/services/Seller-domain-service';
import { SellerEntityDB } from '../entities/sellerEntityDb';
import { SellerRepository } from '../repositories/Seller-repository';
export class SellerMySqlService
    implements SellerDomainService<SellerEntityDB>{

        constructor( private readonly SellerRepository: SellerRepository) { }

    UpdateNameSeller(data: SellerEntityDB): Promise<SellerEntityDB> {


        return this.SellerRepository.update(data.IdSeller, data)
    }
}