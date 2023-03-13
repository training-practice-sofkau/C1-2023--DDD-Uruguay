import { ClientDomainBase } from '../entities/Order-domain/client-domain-entity';
import { SaleDomainEntity } from '../entities/Sale-domain/sale-domain-entity';
import { SellerDomain } from '../entities/Sale-domain/seller-domain-entity';
import { BillDomain } from '../entities/Sale-domain/bill-domain-entity';
import { IRegisterSale } from '../interfaces/commands/Sale-commands/register-sale-command';
import { IGetClientSale } from '../interfaces/commands/Sale-commands/get-client-command';
import { IAddSaller } from '../interfaces/commands/Sale-commands/add-saller-command';
import { IUpdateNameSeller } from '../interfaces/commands/Sale-commands/Seller-Commands/update-name-command';
import { IUpdateBill } from '../interfaces/commands/Sale-commands/update-bill-command';
import { IGetSalesList } from '../interfaces/commands/Sale-commands/get-sales-list-command';


export interface SaleDomainService 
 < T extends SaleDomainEntity = SaleDomainEntity >  {
    RegisterSale(data: SaleDomainEntity): Promise <T>;
    GetClient(data: string): Promise <ClientDomainBase>;
    GetSalesList(data: string): Promise <SaleDomainEntity>;
    AddSeller(data:  SellerDomain  ): Promise <SellerDomain>;
    UpdateSeller(data: IUpdateNameSeller): Promise <SellerDomain>;
  GetSellers(data: string): Promise<SellerDomain>;
  GetBil(data: string): Promise <BillDomain>;

 }