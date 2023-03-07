import { ClientDomainBase } from '../entities/Order-domain/client-domain-entity';
import { SaleDomainEntity } from '../entities/Sale-domain/sale-domain-entity';
import { SellerDomain } from '../entities/Sale-domain/seller-domain-entity';
import { BillDomain } from '../entities/Sale-domain/bill-domain-entity';


export interface SaleDomainService 
 < T extends SaleDomainEntity = SaleDomainEntity >  {
    RegisterSale(sale: T): Promise <T>;
    GetClient(ClientId: string): Promise <ClientDomainBase>;
    GetSalesList(): Promise <SaleDomainEntity>;
    AddSeller(sellerID: SellerDomain): Promise <SellerDomain>;
    UpdateSeller(sellerID: string, data: SellerDomain): Promise <SellerDomain>;
    UpdateBill(BillId: string, data: BillDomain): Promise <BillDomain>;
 }