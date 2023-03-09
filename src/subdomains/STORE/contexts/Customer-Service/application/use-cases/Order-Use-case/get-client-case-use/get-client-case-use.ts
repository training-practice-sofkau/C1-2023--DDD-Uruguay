import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs";
import { OrderAgregate } from "../../../../domain/aggregates/order.agregate";
import { IGetClient } from "../../../../domain/interfaces";
import { ClientObtainedResponse } from '../../../../domain/interfaces/responses/Order-Response/client-obtained-response';
import { ClientDomainService } from "../../../../domain/services";
import { ClientObtainedEventPublisher } from '../../../../domain/events/publishers/Sale/Client-obtained-event-publisher';
import { ClientDomainBase } from '../../../../domain/entities/Order-domain/client-domain-entity';
import { ClientNameValue,  PhoneValue } from "../../../../domain/value-objects";

export class GetClientCaseUse<
    Command extends IGetClient = IGetClient,
    Response extends ClientObtainedResponse =  ClientObtainedResponse

>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly OrderAgregate: OrderAgregate;
    database: ClientDomainBase[]  = [];

    constructor(
        private readonly ClientService: ClientDomainService,
        private readonly GetClientEventPublisher: ClientObtainedEventPublisher,
    ) {
        super();
        this.OrderAgregate = new OrderAgregate({
            ClientService,
            GetClientEventPublisher,
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }

    private async executeCommand(
        command: Command
    ): Promise< ClientDomainBase | null> {
        const ValueObject = this.getClient(command.ClientID);
        this.validateValueObject(ValueObject);
        return this.execueteGetorderRoot(ValueObject)
    }


    private getClient(
        idclient: string
    ): ClientDomainBase {
        return this.database.find((item) => item.ClientID.valueOf === idclient.valueOf);
        

       
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
                'Hay algunos errores en el comando ejecutado para obtener datos',
                this.getErrors(),
            );

    }
  

    private execueteGetorderRoot(
        entity: ClientDomainBase,
    ): Promise<ClientDomainBase > {     

        return this.OrderAgregate.GetClient({ClientID: entity.ClientID.toString()})
    }
}