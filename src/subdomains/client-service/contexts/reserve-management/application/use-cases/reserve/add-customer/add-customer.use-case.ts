import {
    IUseCase,
    ValueObjectErrorHandler,
    ValueObjectException
} from "src/libs";
import {
    CustomerAddedEventPublisher,
    CustomerDomainEntity,
    DocumentValueObject,
    FullNameValueObject,
    IAddCustomer,
    ICustomerAddedResponse,
    ICustomerDomainEntity,
    ICustomerDomainService,
    PaymentMethodValueObject,
    ReserveAggregate
} from "../../../../domain";

export class AddCustomerUseCase<
    Command extends IAddCustomer = IAddCustomer,
    Response extends ICustomerAddedResponse = ICustomerAddedResponse
> extends ValueObjectErrorHandler implements IUseCase<Command, Response>
{
    private readonly reserveAggregate: ReserveAggregate;

    constructor(
        private readonly customerService: ICustomerDomainService,
        private readonly customerAddedEventPublisher: CustomerAddedEventPublisher
    ) {
        super();
        this.reserveAggregate = new ReserveAggregate({
            customerService,
            customerAddedEventPublisher
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }


    private async executeCommand(command: Command): Promise<CustomerDomainEntity | null> {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);
        const customer = this.createEntityCustomerDomain(ValueObject);
        return this.exectueReserveAggregate(customer)
    }

    private createValueObject(command: Command): ICustomerDomainEntity {
        const fullName = new FullNameValueObject(command.fullName);
        const document = new DocumentValueObject(command.document);
        const paymentMethod = new PaymentMethodValueObject(command.paymentMethod);

        return {
            fullName,
            document,
            paymentMethod
        }
    }

    private validateValueObject(valueObject: ICustomerDomainEntity): void {
        const {
            fullName,
            document,
            paymentMethod
        } = valueObject

        if (fullName instanceof FullNameValueObject && fullName.hasErrors())
            this.setErrors(fullName.getErrors());

        if (document instanceof DocumentValueObject && document.hasErrors())
            this.setErrors(document.getErrors());

        if (paymentMethod instanceof PaymentMethodValueObject && paymentMethod.hasErrors())
            this.setErrors(paymentMethod.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por AddCustomerUseCase',
                this.getErrors(),
            );
    }

    private createEntityCustomerDomain(valueObject: ICustomerDomainEntity): CustomerDomainEntity {
        const {
            fullName,
            document,
            paymentMethod
        } = valueObject

        return new CustomerDomainEntity({
            fullName: fullName.valueOf(),
            document: document.valueOf(),
            paymentMethod: paymentMethod.valueOf(),
        })
    }

    private exectueReserveAggregate(customer: ICustomerDomainEntity): Promise<CustomerDomainEntity | null> {
        return this.reserveAggregate.addCustomer(customer as IAddCustomer)
    }
}
