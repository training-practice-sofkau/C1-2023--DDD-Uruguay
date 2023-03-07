import { BillDomainService } from './../../services/Bill-domain-service';
import { SellerDomainService } from '../../services/Seller-domain-service';
import { SaleDomainService } from '../../services/Sale-domain-service';
import { MangaDomainBase } from '../../entities/Order-domain/manga-domain-entity';
import { SellerDomain } from '../../entities/Sale-domain/seller-domain-entity';
import { ClientDomainBase } from '../../entities/Order-domain/client-domain-entity';
import { SaleDomainEntity } from '../../entities/Sale-domain/sale-domain-entity';
import { BillDomain } from '../../entities/Sale-domain/bill-domain-entity';
import { AddedSaleEventPublisher } from '../../events/publishers/Sale/Added-sale-event-publisher';
import { AddedSellerEventPublisher } from '../../events/publishers/Sale/added-seller-event-publisher';
import { ClientObtainedEventPublisher } from '../../events/publishers/Sale/Client-obtained-event-publisher';
import { BillModifiedEventPublisher } from '../../events/publishers/Sale/modified-bill-event-publisher';
import { SellerModifiedEventPublisher } from '../../events/publishers/Sale/modified-seller-event-publisher';
import { SalesObtainedEventPublisher } from '../../events/publishers/Sale/sales-obtained-event-publisher';
import { SellerNameModifiedEventPublisher } from '../../events/publishers/Sale/Seller/modified-Seller-name-event-publisher';
import { MangaObtainedEventPublisher } from '../../events/publishers/Sale/Bill/manga-obtained-event-publisher';
import { PaymentMethodEventPublisher } from '../../events/publishers/Sale/Bill/Payment-method-event-publisher';
import { TotalModifiedEventPublisher } from '../../events/publishers/Sale/Bill/modified-total-event-publisher';
import { AggregateRootException } from 'src/libs';
import { IAddSaller } from '../../interfaces/commands/Sale-commands/add-saller-command';
import { UpdatePaymentMethod } from '../../interfaces/commands/Sale-commands/Bill-Comands/update-payment-method-command';
import { IUpdateTotal } from '../../interfaces/commands/Sale-commands/Bill-Comands/update-total-command';
import { IGetClientSale } from '../../interfaces/commands/Sale-commands/get-client-command';
import { IRegisterSale } from '../../interfaces/commands/Sale-commands/register-sale-command';
import { IUpdateNameSeller } from '../../interfaces/commands/Sale-commands/Seller-Commands/update-name-command';
import { IUpdateBill } from '../../interfaces/commands/Sale-commands/update-bill-command';
import { IGetMangaData } from '../../interfaces/commands/Sale-commands/Bill-Comands/get-manga-data-command';
export class SaleAgregate implements BillDomainService, SellerDomainService, SaleDomainService {


    private readonly billservice: BillDomainService
    private readonly saleservice: SaleDomainService
    private readonly sellerService: SellerDomainService


    private readonly AddedSaleEventPublisher: AddedSaleEventPublisher
    private readonly AddedSellerEventPublisher:AddedSellerEventPublisher
    private readonly ClientObtainedEventPublisher: ClientObtainedEventPublisher
    private readonly BillModifiedEventPublisher: BillModifiedEventPublisher
    private readonly SellerModifiedEventPublisher: SellerModifiedEventPublisher
    private readonly SalesObtainedEventPublisher: SalesObtainedEventPublisher
    private readonly SellerNameModifiedEventPublisher: SellerNameModifiedEventPublisher
    private readonly MangaObtainedEventPublisher:  MangaObtainedEventPublisher
    private readonly PaymentMethodEventPublisher: PaymentMethodEventPublisher
    private readonly TotalModifiedEventPublisher:TotalModifiedEventPublisher


  
    constructor({
        billService,
        sellerService,
        saleService,
        AddedSaleEventPublisher,
        AddedSellerEventPublisher,
        ClientObtainedEventPublisher,
        BillModifiedEventPublisher,
        SellerModifiedEventPublisher,
        SalesObtainedEventPublisher,
        SellerNameModifiedEventPublisher,
        MangaObtainedEventPublisher,
        PaymentMethodEventPublisher,
        TotalModifiedEventPublisher
    
      }: {
        AddedSaleEventPublisher?: AddedSaleEventPublisher
        AddedSellerEventPublisher?:AddedSellerEventPublisher
        ClientObtainedEventPublisher?: ClientObtainedEventPublisher
        BillModifiedEventPublisher?: BillModifiedEventPublisher
        SellerModifiedEventPublisher?: SellerModifiedEventPublisher
        SalesObtainedEventPublisher?: SalesObtainedEventPublisher
        SellerNameModifiedEventPublisher?: SellerNameModifiedEventPublisher
        MangaObtainedEventPublisher?:  MangaObtainedEventPublisher
        PaymentMethodEventPublisher?: PaymentMethodEventPublisher
        TotalModifiedEventPublisher?:TotalModifiedEventPublisher
        billService?: BillDomainService
        sellerService?: SellerDomainService
        saleService?:  SaleDomainService
      }) {
    
        this.AddedSaleEventPublisher = AddedSaleEventPublisher
        this.AddedSellerEventPublisher = AddedSellerEventPublisher
        this.ClientObtainedEventPublisher = ClientObtainedEventPublisher
        this.BillModifiedEventPublisher = BillModifiedEventPublisher
        this.SellerModifiedEventPublisher = SellerModifiedEventPublisher
        this.SalesObtainedEventPublisher = SalesObtainedEventPublisher
        this.SellerNameModifiedEventPublisher = SellerNameModifiedEventPublisher
        this.MangaObtainedEventPublisher =  MangaObtainedEventPublisher
        this.PaymentMethodEventPublisher = PaymentMethodEventPublisher
        this.TotalModifiedEventPublisher = TotalModifiedEventPublisher
        this.billservice = billService
        this.saleservice = saleService
        this.sellerService = sellerService

      }
   
  async   UpdateNameSeller(data: IUpdateNameSeller): Promise<SellerDomain> {
        if(this.billservice && this.SellerNameModifiedEventPublisher){        
            const result = await this.sellerService.UpdateNameSeller(data);
            this.SellerNameModifiedEventPublisher.response = result
            this.SellerNameModifiedEventPublisher.publish()
            return this.SellerNameModifiedEventPublisher.response
    
        } 
        throw new AggregateRootException(
            'SaleAgregate "sellerService" y/o "SellerNameModifiedEventPublisher" no estan definidos'
        )    }

   async  UpdatePaymentMethod(data:UpdatePaymentMethod): Promise<BillDomain> {


        if(this.billservice && this.PaymentMethodEventPublisher){        
        const result = await this.billservice.UpdatePaymentMethod(data);
        this.PaymentMethodEventPublisher.response = result
        this.PaymentMethodEventPublisher.publish()
        return this.PaymentMethodEventPublisher.response

    } 
    throw new AggregateRootException(
        'SaleAgregate "billservice" y/o "PaymentMethodEventPublisher" no estan definidos'
    )

    }


   async UpdateTotal(data: IUpdateTotal  ): Promise<BillDomain> {
        if(this.billservice && this.TotalModifiedEventPublisher){        
            const result = await this.billservice.UpdateTotal(data);
            this.TotalModifiedEventPublisher.response = result
            this.TotalModifiedEventPublisher.publish()
            return this.TotalModifiedEventPublisher.response
    
        } 
        throw new AggregateRootException(
            'SaleAgregate "billservice" y/o "TotalModifiedEventPublisher" no estan definidos'
        )    }


    async getMangaData(idManga: IGetMangaData): Promise<MangaDomainBase> {
        if(this.billservice && this.MangaObtainedEventPublisher){        
            const result = await this.billservice.getMangaData(idManga);
            this.MangaObtainedEventPublisher.response = result
            this.MangaObtainedEventPublisher.publish()
            return this.MangaObtainedEventPublisher.response
    
        } 
        throw new AggregateRootException(
            'SaleAgregate "billservice" y/o "MangaObtainedEventPublisher" no estan definidos'
        )    }


  


   async  RegisterSale(sale: IRegisterSale): Promise<SaleDomainEntity> {
        if(this.billservice && this.AddedSaleEventPublisher){        
            const result = await this.saleservice.RegisterSale(sale);
            this.AddedSaleEventPublisher.response = result
            this.AddedSaleEventPublisher.publish()
            return this.AddedSaleEventPublisher.response
    
        } 
        throw new AggregateRootException(
            'SaleAgregate "saleservice" y/o "AddedSaleEventPublisher" no estan definidos'
        )    }


    async GetClient(ClientId: IGetClientSale): Promise<ClientDomainBase> {
        if(this.billservice && this.ClientObtainedEventPublisher){        
            const result = await this.saleservice.GetClient(ClientId);
            this.ClientObtainedEventPublisher.response = result
            this.ClientObtainedEventPublisher.publish()
            return this.ClientObtainedEventPublisher.response
    
        } 
        throw new AggregateRootException(
            'SaleAgregate "saleservice" y/o "ClientObtainedEventPublisher" no estan definidos'
        )    }


   async GetSalesList(): Promise<SaleDomainEntity> {
        if(this.billservice && this.SalesObtainedEventPublisher){        
            const result = await this.saleservice.GetSalesList();
            this.SalesObtainedEventPublisher.response = result
            this.SalesObtainedEventPublisher.publish()
            return this.SalesObtainedEventPublisher.response
    
        } 
        throw new AggregateRootException(
            'SaleAgregate "saleservice" y/o "SalesObtainedEventPublisher" no estan definidos'
        )    }

     


   async  AddSeller(sellerID: IAddSaller): Promise<SellerDomain> {
        if(this.billservice && this.AddedSellerEventPublisher){        
            const result = await this.saleservice.AddSeller(sellerID);
            this.AddedSellerEventPublisher.response = result
            this.AddedSellerEventPublisher.publish()
            return this.AddedSellerEventPublisher.response
    
        } 
        throw new AggregateRootException(
            'SaleAgregate "saleservice" y/o "AddedSellerEventPublisher" no estan definidos'
        )    }


    async UpdateSeller( data: IUpdateNameSeller): Promise<SellerDomain> {
        if(this.billservice && this.SellerModifiedEventPublisher){        
            const result = await this.saleservice.UpdateSeller( data);
            this.SellerModifiedEventPublisher.response = result
            this.SellerModifiedEventPublisher.publish()
            return this.SellerModifiedEventPublisher.response
    
        } 
        throw new AggregateRootException(
            'SaleAgregate "saleservice" y/o "SellerModifiedEventPublisher" no estan definidos'
        )    }


    /**
     * It updates a bill.
     * @param {string} BillId - The id of the bill to be updated.
     * @param {BillDomain} data - The data to be updated.
     * @returns The BillDomain object
     */
    async UpdateBill( data: IUpdateBill): Promise<BillDomain> {
        if(this.billservice && this.BillModifiedEventPublisher){        
            const result = await this.saleservice.UpdateBill(data);
            this.BillModifiedEventPublisher.response = result
            this.BillModifiedEventPublisher.publish()
            return this.BillModifiedEventPublisher.response
    
        } 
        throw new AggregateRootException(
            'SaleAgregate "saleservice" y/o "BillModifiedEventPublisher" no estan definidos'
        )    }
}
