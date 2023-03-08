import { BillDomain } from '../../../entities/Sale-domain/bill-domain-entity';
import { SellerDomain } from '../../../entities/Sale-domain/seller-domain-entity';
export interface IRegisterSale {

    Bill: BillDomain
    Seller: SellerDomain
    IDSale: string 
    IDOrder: string 
    
}
