import { IUseCase, ValueObjectErrorHandler } from "src/libs";
import { OrderAgregate } from "../../../../domain/aggregates/order.agregate";
import { ClientDomainBase, IOrderentity, OrderDomainEntityBase } from "../../../../domain/entities";
import { OrderAddEventPublisher } from "../../../../domain/events";
import { IRegisterOrder, RegisterdOrderResponse } from "../../../../domain/interfaces";
import { OrderService } from '../../../../infrastructure/persitence/services/OrderServices/OrderService';

export class RegisterOrderCaseUse<
    Command extends IRegisterOrder = IRegisterOrder,
    Response extends RegisterdOrderResponse =  RegisterdOrderResponse

>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly OrderAgregate: OrderAgregate;
    database: ClientDomainBase[]  = [];

    constructor(
        private readonly orderService: OrderService,
        private readonly RegisterOrderEventPublisher: OrderAddEventPublisher,
    ) {
        super();
        this.OrderAgregate = new OrderAgregate({
            orderService,
            RegisterOrderEventPublisher
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }

    private async executeCommand(
        command: Command
    ): Promise<OrderDomainEntityBase | null> {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);
        const entity = this.createEntityClientDomain(ValueObject);
        return this.exectueOrderAggregateRoot(entity)
    }

    private getClient

    private createValueObject(
        command: Command
    ): OrderDomainEntityBase {
        client: command.

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