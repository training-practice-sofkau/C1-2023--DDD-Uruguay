import {
    IUseCase,
    ValueObjectErrorHandler,
    ValueObjectException
} from "src/libs/sofka";
import {
    CustomerDomainEntity,
    ICustomerDomainEntity,
    IPaymentMethonUpdatedResponse,
    IReserveDomainService,
    IUpdatePaymentMethod,
    PaymentMethodUpdatedEventPublisher,
    PaymentMethodValueObject,
    ReserveAggregate
} from "../../../../../domain";

export class UpdatePaymentMethodUseCase<
    Command extends IUpdatePaymentMethod = IUpdatePaymentMethod,
    Response extends IPaymentMethonUpdatedResponse = IPaymentMethonUpdatedResponse
> extends ValueObjectErrorHandler implements IUseCase<Command, Response>
{
    private readonly reserveAggregate: ReserveAggregate;

    constructor(
        private readonly reserveService: IReserveDomainService,
        private readonly paymentMethodUpdatedEventPublisher: PaymentMethodUpdatedEventPublisher
    ) {
        super();
        this.reserveAggregate = new ReserveAggregate({
            reserveService,
            paymentMethodUpdatedEventPublisher
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }


    private async executeCommand(command: Command): Promise<ICustomerDomainEntity | null> {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);
        const paymentMethod = this.createNewPaymentMethod(ValueObject);
        return this.exectueReserveAggregate(paymentMethod)
    }

    private createValueObject(command: Command): ICustomerDomainEntity {
        const paymentMethod = new PaymentMethodValueObject(command.paymentMethod);

        return {
            paymentMethod,
        }
    }

    private validateValueObject(valueObject: ICustomerDomainEntity): void {
        const {
            paymentMethod,
        } = valueObject

        if (paymentMethod instanceof PaymentMethodValueObject && paymentMethod.hasErrors())
            this.setErrors(paymentMethod.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por UpdatePaymentMethodUseCase',
                this.getErrors(),
            );
    }

    private createNewPaymentMethod(valueObject: ICustomerDomainEntity): CustomerDomainEntity {
        const {
            paymentMethod,
            customerId,
        } = valueObject

        return new CustomerDomainEntity({
            paymentMethod: paymentMethod,
            customerId: customerId.valueOf(),
        })
    }

    private exectueReserveAggregate(data: ICustomerDomainEntity): Promise<CustomerDomainEntity | null> {
        return this.reserveAggregate.updatePaymentMethod(data as IUpdatePaymentMethod)
    }
}
