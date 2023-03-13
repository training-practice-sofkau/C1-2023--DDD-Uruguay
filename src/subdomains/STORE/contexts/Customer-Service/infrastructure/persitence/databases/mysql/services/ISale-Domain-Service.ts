import { BillRepository } from './../repositories/Bill-repository';
import { SellerRepository } from './../repositories/Seller-repository';
import { SaleDomainEntity, ClientDomainBase, SellerDomain, BillDomain } from "src/subdomains/Store/contexts/Customer-Service/domain/entities";
import { IGetClientSale, IUpdateNameSeller, IUpdateBill } from "src/subdomains/Store/contexts/Customer-Service/domain/interfaces/commands";
import { SaleDomainService } from "src/subdomains/Store/contexts/Customer-Service/domain/services";
import { saleEntityBd } from "../entities/Sale-entity";
import { SaleRepository } from '../repositories/Sale-Repository';
import { ClientRepository } from '../repositories'
import { SellerEntityDB } from '../entities/sellerEntityDb';



export class SaleMySqlServicez
    implements SaleDomainService<saleEntityBd>{
    constructor(private readonly SaleRepository: SaleRepository, private readonly BillRepository: BillRepository, private readonly ClientRepository: ClientRepository, private readonly SellerRepository: SellerRepository) { }

    RegisterSale(data: saleEntityBd): Promise<saleEntityBd> {
        return this.SaleRepository.create(data)
    }
    async GetClient(data: string): Promise<ClientDomainBase> {
        return this.ClientRepository.findById(data)
    }
    GetSalesList(data: string): Promise<SaleDomainEntity> {
        return this.SaleRepository.findById(data)
    }
    AddSeller(data: SellerEntityDB): Promise<SellerDomain> {
        return this.SellerRepository.create(data)
    }
    UpdateSeller(data: IUpdateNameSeller): Promise<SellerDomain> {
        const newSeller = new SellerEntityDB()
        newSeller.Name = data.name
        newSeller.IdSeller = data.idseller

        return this.SellerRepository.update(data.idseller, newSeller)
    }

    GetSellers(data: string): Promise<SellerDomain> {
        return this.SellerRepository.findById(data)
    }

    GetBil(data: string): Promise<BillDomain> {
        return this.BillRepository.findById(data)
    }

}