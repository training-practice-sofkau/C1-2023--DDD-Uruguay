import { SellerDomainService } from '../../../../../domain/services/Seller-domain-service';
import { SellerEntityDB } from '../entities/sellerEntityDb';
import { SellerRepository } from '../repositories/Seller-repository';
export class SellerMySqlServicez
    implements SellerDomainService<SellerEntityDB>{

        constructor( private readonly SellerRepository: SellerRepository) { }

    UpdateNameSeller(data: string): Promise<SellerEntityDB> {
        return this.SellerRepository.findById(data)
    }
}