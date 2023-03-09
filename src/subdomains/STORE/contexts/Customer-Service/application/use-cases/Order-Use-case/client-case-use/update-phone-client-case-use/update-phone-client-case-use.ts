import { ValueObjectErrorHandler, IUseCase, ValueObjectException } from "src/libs";
import { OrderAgregate } from "src/subdomains/Store/contexts/Customer-Service/domain/aggregates/order.agregate";
import { ClientDomainBase, IClientEntity } from "src/subdomains/Store/contexts/Customer-Service/domain/entities";
import { ClientObtainedEventPublisher, NameModifiedEventPublisher } from "src/subdomains/Store/contexts/Customer-Service/domain/events";
import { UpdateNameClient, UpdatePhoneClient, UpradedNameResponse, UpradedPhoneResponse } from "src/subdomains/Store/contexts/Customer-Service/domain/interfaces";
import { ClientDomainService } from "src/subdomains/Store/contexts/Customer-Service/domain/services";
import { ClientNameValue, IdclientValue, PhoneValue } from "src/subdomains/Store/contexts/Customer-Service/domain/value-objects";
import { PhoneModifiedEventPublisher } from '../../../../../domain/events/publishers/order/client/modified-Phone-event-publisher';

export class UpdatePhoneClientCaseUse<
    Command extends UpdatePhoneClient = UpdatePhoneClient,
    Response extends UpradedPhoneResponse = UpradedPhoneResponse
>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly OrderAgregate: OrderAgregate;

    constructor(
        private readonly ClientService: ClientDomainService,
        private readonly PhoneModifiedEventPublisher: PhoneModifiedEventPublisher,
    ) {
        super();
        this.OrderAgregate = new OrderAgregate({
            ClientService,
            PhoneModifiedEventPublisher
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

        const  Phone = new PhoneValue(command.Phone)
        const ClientID = new IdclientValue(command.ClientID)

        return {
           Phone,
          ClientID
        }
    }

    private validateValueObject(
        valueObject: ClientDomainBase
    ): void {
        
        const {
            Phone,
            ClientID
        } = valueObject
      
      
        if ( ClientID.hasErrors())
        this.setErrors(ClientID.getErrors());

        if (Phone.hasErrors())
            this.setErrors(Phone.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado para cambiar el nombre del cliente ',
                this.getErrors(),
            );

    }

    private createEntityClientDomain(
        
        valueObject: ClientDomainBase

    ): ClientDomainBase {
       
        const {
            Phone,
            ClientID
        } = valueObject

        return new ClientDomainBase({          
            Phone: Phone,
          ClientID: ClientID
        })

    }

    private exectueOrderAggregateRoot(
        entity: ClientDomainBase,
    ): Promise<ClientDomainBase | null> {
        return this.OrderAgregate.UpdateClientPhone(entity)
    }
}