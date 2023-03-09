import { ValueObjectErrorHandler, IUseCase, ValueObjectException } from "src/libs";
import { OrderAgregate } from "../../../../domain/aggregates/order.agregate";
import { ClientAddResponse, IAddClient } from "../../../../domain/interfaces";
import { ClientDomainService } from "../../../../domain/services";
import { ClientAddEventPublisher } from '../../../../domain/events/publishers/order/added-customer-event-Publisher';
import { ClientDomainBase, IClientEntity } from "../../../../domain/entities";
import { IdclientValue } from '../../../../domain/value-objects/Sale/Bill/idclient-value/idclient-value';
import { ClientNameValue } from "../../../../domain/value-objects";
import { PhoneValue } from '../../../../domain/value-objects/Order/Client/phone-value/phone-value';

export class AddSallerUseCase<
    Command extends IAddClient = IAddClient,
    Response extends ClientAddResponse = ClientAddResponse
>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly OrderAgregate: OrderAgregate;

    constructor(
        private readonly ClientService: ClientDomainService,
        private readonly AddCustomerEventPublisher: ClientAddEventPublisher,
    ) {
        super();
        this.OrderAgregate = new OrderAgregate({
            ClientService,
            AddCustomerEventPublisher
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }

    private async executeCommand(
        command: Command
    ): Promise<ClientDomainBase | null> {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);
        const entity = this.createEntityClientDomain(ValueObject);
        return this.exectueOrderAggregateRoot(entity)
    }

    private createValueObject(
        command: Command
    ): IClientEntity {

        const ClientID = new IdclientValue(command.ClientID)
        const  Name = new ClientNameValue(command.Name)
        const  Phone = new PhoneValue(command.Phone)

        return {
           
            ClientID,
            Name,
            Phone

        }
    }

    private validateValueObject(
        valueObject: ClientDomainBase
    ): void {
        const {
            Name,
            Phone
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
        valueObject: ClientDomainBase
    ): ClientDomainBase {

        const {
            Name,
            Phone
        } = valueObject

        return new ClientDomainBase({
          
          Name: Name.valueOf(),
          Phone: Phone.valueOf(),
        })

    }

    private exectueOrderAggregateRoot(
        entity: ClientDomainBase,
    ): Promise<ClientDomainBase | null> {
        return this.OrderAgregate.AddClient(entity)
    }
}