import { SaleDomainEntity, ClientDomainBase, SellerDomain, BillDomain } from "src/subdomains/Store/contexts/Customer-Service/domain/entities";
import { IGetClientSale, IUpdateNameSeller, IUpdateBill } from "src/subdomains/Store/contexts/Customer-Service/domain/interfaces/commands";
import { SaleDomainService } from "src/subdomains/Store/contexts/Customer-Service/domain/services";
import { saleEntityBd } from "../entities/Sale-entity";
import { SaleRepository } from '../repositories/Sale-Repository';
import {ClientRepository} from '../repositories'



export class SaleMySqlServicez
    implements SaleDomainService<saleEntityBd>{
    constructor(private readonly SaleRepository: SaleRepository, private readonly ClientRepository: ClientRepository) { }

    RegisterSale(data: saleEntityBd): Promise<saleEntityBd> {
      return   this.SaleRepository.create(data)
    }
   async GetClient(data: string): Promise<ClientDomainBase> {
        return   this.ClientRepository.findById(data)    }
    GetSalesList(data: string): Promise<SaleDomainEntity> {
        return   this.SaleRepository.findById(data)    }
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