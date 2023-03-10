import { ValueObjectErrorHandler, IUseCase, ValueObjectException } from "src/libs";
import { OrderAgregate } from "../../../../domain/aggregates/order.agregate";
import { ClientDomainService, SaleDomainService } from "../../../../domain/services";
import { ClientAddEventPublisher } from '../../../../domain/events/publishers/order/added-customer-event-Publisher';
import { ClientDomainBase, IClientEntity, SaleDomainEntity } from "../../../../domain/entities";
import { IdclientValue } from '../../../../domain/value-objects/Sale/Bill/idclient-value/idclient-value';
import { ClientNameValue, IdOrdertValueObject, IdSaleValueObject } from "../../../../domain/value-objects";
import { PhoneValue } from '../../../../domain/value-objects/Order/Client/phone-value/phone-value';
import { SalesObtainedEventPublisher } from "../../../../domain/events";
import { IRegisterSale } from "../../../../domain/interfaces";
import { SaleAgregate } from "../../../../domain/aggregates/sale.agregate";
import { GetBillUseCase } from "../get-bill-use-case/get-bill-use-case";
import { BillObtainedEventPublisher } from "../../../../domain/events/publishers/Sale/Bill/bill-obtained.publish-event";
import { SellerObtainedEventPublisher } from "../../../../domain/events/publishers/Sale/Seller/seller-obtained.publish-event";
import { GetSellerUseCase } from "../get-seller-use-case/get-seller-use-case";

export class RegisterSaleUseCase<
    Command extends IRegisterSale = IRegisterSale,
    Response extends SalesObtainedEventPublisher = SalesObtainedEventPublisher
>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly SaleAgregate: SaleAgregate;
    private readonly GetBillUseCase: GetBillUseCase
    private readonly GetSellerUseCase: GetSellerUseCase

    constructor(
        private readonly saleService: SaleDomainService,
        private readonly SalesObtainedEventPublisher: SalesObtainedEventPublisher,
        private readonly BillObtainedEventPublisher: BillObtainedEventPublisher,
        private readonly SellerObtaiedEventPublisher: SellerObtainedEventPublisher

    ) {
        super();
        this.SaleAgregate = new SaleAgregate({
            saleService,
            SalesObtainedEventPublisher
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }

    private async executeCommand(
        command: Command
    ): Promise<SaleDomainEntity | null> {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);
        const entity = this.createentitySaleDomain(ValueObject);
        return this.exectueSaleAggregateRoot((await entity ))
    }

    private createValueObject(
        command: Command
    ): SaleDomainEntity {

        const IDSale =  new IdSaleValueObject(command.IDSale)
        const IDOrder = new IdOrdertValueObject(command.IDOrder);
        return {           
            IDOrder,                       
            IDSale,
        }
    }

    private validateValueObject(
        valueObject: SaleDomainEntity
    ): void {
        const {
            IDOrder,                       
            IDSale, 
        } = valueObject
      

        if (IDOrder.hasErrors())
            this.setErrors(IDOrder.getErrors());    

        if (IDSale.hasErrors())
            this.setErrors(IDSale.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado para crear cliente',
                this.getErrors(),
            );

    }

    private async createentitySaleDomain(
        valueObject: SaleDomainEntity
    ): Promise<SaleDomainEntity> {
        const responseBill = this.GetBillUseCase.execute({ BillID: valueObject.IDOrder.value })
        
        const responseSeller = this.GetSellerUseCase.execute({SellerId: valueObject.Seller.IdSeller.value})

        const {
            IDOrder,
            IDSale,            
        } = valueObject

        return new SaleDomainEntity({
          
            Bill: (await responseBill).data ,
            IDOrder: IDOrder,
            IDSale:  IDSale,
            Seller: (await responseSeller).data,
        })

    }

    private exectueSaleAggregateRoot(
        entity: SaleDomainEntity,
    ): Promise<SaleDomainEntity | null> {
        return this.SaleAgregate.RegisterSale(entity)
    }
}