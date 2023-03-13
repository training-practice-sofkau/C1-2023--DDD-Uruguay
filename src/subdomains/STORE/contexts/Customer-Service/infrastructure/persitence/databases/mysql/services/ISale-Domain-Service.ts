import { SaleDomainEntity, ClientDomainBase, SellerDomain, BillDomain } from "src/subdomains/Store/contexts/Customer-Service/domain/entities";
import { IGetClientSale, IUpdateNameSeller, IUpdateBill } from "src/subdomains/Store/contexts/Customer-Service/domain/interfaces/commands";
import { SaleDomainService } from "src/subdomains/Store/contexts/Customer-Service/domain/services";
import { saleEntityBd } from "../entities/Sale-entity";
import { SaleRepository } from '../repositories/Sale-Repository';
import {ClientRepository} from '../'



export class SaleMySqlServicez
    implements SaleDomainService<saleEntityBd>{
    constructor(private readonly SaleRepository: SaleRepository, private readonly ClientRepository: ClientRepository) { }

    RegisterSale(data: saleEntityBd): Promise<saleEntityBd> {
      return   this.SaleRepository.create(data)
    }
   async GetClient(data: IGetClientSale): Promise<ClientDomainBase> {
        return   this.ClientRepository.findById(data.IDclient)    }
    GetSalesList(data: string): Promise<SaleDomainEntity> {
        throw new Error('Method not implemented.');
    }
    AddSeller(data: SellerDomain): Promise<SellerDomain> {
        throw new Error('Method not implemented.');
    }
    UpdateSeller(data: IUpdateNameSeller): Promise<SellerDomain> {
        throw new Error('Method not implemented.');
    }
    UpdateBill(data: IUpdateBill): Promise<BillDomain> {
        throw new Error('Method not implemented.');
    }
    GetSellers(data: string): Promise<SellerDomain> {
        throw new Error('Method not implemented.');
    }
    GetBil(data: string): Promise<BillDomain> {
        throw new Error('Method not implemented.');
    }
}