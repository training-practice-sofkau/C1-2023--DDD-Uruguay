import { ValueObjectErrorHandler, IUseCase, ValueObjectException } from "src/libs";
import { OrderAgregate } from "../../../../domain/aggregates/order.agregate";
import { ClientAddResponse, IAddClient } from "../../../../domain/interfaces";

export class AddCustomerCaseUse<
    Command extends IAddClient = IAddClient,
    Response extends ClientAddResponse = ClientAddResponse
>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly OrderAgregate: OrderAgregate;

    constructor(
        private readonly ClientService: ClientDomainService,
        private readonly registeredClientEventPublisherBase: RegisteredClientEventPublisherBase,
    ) {
        super();
        this.orderAggregateRoot = new OrderAggregate({
            clientService,
            registeredClientEventPublisherBase
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }

    private async executeCommand(
        command: Command
    ): Promise<ClientDomainEntitybase | null> {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);
        const entity = this.createEntityClientDomain(ValueObject);
        return this.exectueOrderAggregateRoot(entity)
    }

    private createValueObject(
        command: Command
    ): IClientDomainEntity {

        const fullName = new FullNameValueObject(command.fullName);
        const phone = new PhoneObjectValue(command.phone);

        return {
            fullName,
            phone
        }
    }

    private validateValueObject(
        valueObject: IClientDomainEntity
    ): void {
        const {
            fullName,
            phone
        } = valueObject

        if (fullName instanceof FullNameValueObject && fullName.hasErrors())
            this.setErrors(fullName.getErrors());

        if (phone instanceof PhoneObjectValue && phone.hasErrors())
            this.setErrors(phone.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por AddClientUseCase',
                this.getErrors(),
            );

    }

    private createEntityClientDomain(
        valueObject: IClientDomainEntity
    ): ClientDomainEntitybase {

        const {
            fullName,
            phone
        } = valueObject

        return new ClientDomainEntitybase({
            fullName: fullName.valueOf(),
            phone: phone.valueOf()
        })
    }

    private exectueOrderAggregateRoot(
        entity: ClientDomainEntitybase,
    ): Promise<ClientDomainEntitybase | null> {
        return this.orderAggregateRoot.registerClient(entity)
    }
}