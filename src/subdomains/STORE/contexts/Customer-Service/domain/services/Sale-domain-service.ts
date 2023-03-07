import { ClientDomainBase } from '../entities/Order-domain/client-domain-entity';
import { SaleDomainEntity } from '../entities/Sale-domain/sale-domain-entity';
import { SellerDomain } from '../entities/Sale-domain/seller-domain-entity';
import { BillDomain } from '../entities/Sale-domain/bill-domain-entity';


export interface SaleDomainService 
 < T extends SaleDomainEntity = SaleDomainEntity >  {
    RegisterSale(sale: T): Promise <T>;
    GetClient(ClientId: string): Promise <ClientDomainBase>;
    GetSalesList(): Promise <SaleDomainEntity>;
    Delete(saleId: string ): Promise <T>
    AddSeller(sellerID: string): Promise <SellerDomain>;
    UpdateSeller(sellerID: string): Promise <SellerDomain>;
    UpdateBill(BillId: string): Promise <BillDomain>;
 }