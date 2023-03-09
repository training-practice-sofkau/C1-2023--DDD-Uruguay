import { ValueObjectErrorHandler, IUseCase, ValueObjectException } from "src/libs";
import { OrderAgregate } from "../../../../domain/aggregates/order.agregate";
import { ClientDomainService, SaleDomainService } from "../../../../domain/services";
import { ClientAddEventPublisher } from '../../../../domain/events/publishers/order/added-customer-event-Publisher';
import { ClientDomainBase, IClientEntity, SaleDomainEntity } from "../../../../domain/entities";
import { IdclientValue } from '../../../../domain/value-objects/Sale/Bill/idclient-value/idclient-value';
import { ClientNameValue } from "../../../../domain/value-objects";
import { PhoneValue } from '../../../../domain/value-objects/Order/Client/phone-value/phone-value';
import { SalesObtainedEventPublisher } from "../../../../domain/events";
import { IRegisterSale } from "../../../../domain/interfaces";
import { SaleAgregate } from "../../../../domain/aggregates/sale.agregate";

export class RegisterSaleUseCase<
    Command extends IRegisterSale = IRegisterSale,
    Response extends SalesObtainedEventPublisher = SalesObtainedEventPublisher
>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly SaleAgregate: SaleAgregate;

    constructor(
        private readonly saleService: SaleDomainService,
        private readonly SalesObtainedEventPublisher: SalesObtainedEventPublisher,
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
        const entity = this.createEntityClientDomain(ValueObject);
        return this.exectueOrderAggregateRoot(entity)
    }

    private createValueObject(
        command: Command
    ): IClientEntity {

        const ClientID = new IdclientValue(command.ClientID)
        const Name = new ClientNameValue(command.Name)
        const Phone = new PhoneValue(command.Phone)

        return {           
            ClientID,
            Name,
            Phone
        }
    }

    private validateValueObject(
        valueObject: SaleDomainEntity
    ): void {
        const {
           Bill,
           IDOrder,
           IDSale,
           Seller 
        } = valueObject
      

        if (Phone instanceof PhoneValue && Phone.hasErrors())
            this.setErrors(Phone.getErrors());    

        if (Name instanceof ClientNameValue && Name.hasErrors())
            this.setErrors(Name.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado para crear cliente',
                this.getErrors(),
            );

    }

    private createEntityClientDomain(
        valueObject: SaleDomainEntity
    ): SaleDomainEntity {

        const {
            Name,
            Phone
        } = valueObject

        return new SaleDomainEntity({
          
          Name: Name.valueOf(),
          Phone: Phone.valueOf(),
        })

    }

    private exectueOrderAggregateRoot(
        entity: SaleDomainEntity,
    ): Promise<SaleDomainEntity | null> {
        return this.OrderAgregate.AddClient(entity)
    }
}