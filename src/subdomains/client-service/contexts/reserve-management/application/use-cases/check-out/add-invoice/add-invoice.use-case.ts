import {
    IUseCase,
    ValueObjectErrorHandler,
    ValueObjectException
} from "src/libs/sofka";
import {
    CheckOutAggregate,
    CostValueObject,
    DateValueObject,
    IAddInvoice,
    ICheckOutDomainService,
    IInvoiceAddedResponse,
    IInvoiceDomainEntity,
    InvoiceAddedEventPublisher,
    InvoiceDomainEntity
} from "../../../../domain";

export class AddInvoiceUseCase<
    Command extends IAddInvoice = IAddInvoice,
    Response extends IInvoiceAddedResponse = IInvoiceAddedResponse
> extends ValueObjectErrorHandler implements IUseCase<Command, Response>
{
    private readonly checkOutAggregate: CheckOutAggregate;

    constructor(
        private readonly checkOutService: ICheckOutDomainService,
        private readonly invoiceAddedEventPublisher: InvoiceAddedEventPublisher
    ) {
        super();
        this.checkOutAggregate = new CheckOutAggregate({
            checkOutService,
            invoiceAddedEventPublisher
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }


    private async executeCommand(command: Command): Promise<InvoiceDomainEntity | null> {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);
        const invoice = this.createEntityInvoiceDomain(ValueObject);
        return this.exectueCheckOutAggregate(invoice)
    }

    private createValueObject(command: Command): IInvoiceDomainEntity {
        const cost = new CostValueObject(command.cost);
        const date = new DateValueObject(command.date);

        return {
            cost,
            date,
        }
    }

    private validateValueObject(valueObject: IInvoiceDomainEntity): void {
        const {
            cost,
            date,
        } = valueObject

        if (cost instanceof CostValueObject && cost.hasErrors())
            this.setErrors(cost.getErrors());

        if (date instanceof DateValueObject && date.hasErrors())
            this.setErrors(date.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por AddInvoiceUseCase',
                this.getErrors(),
            );
    }

    private createEntityInvoiceDomain(valueObject: IInvoiceDomainEntity): InvoiceDomainEntity {
        const {
            cost,
            date,
        } = valueObject

        return new InvoiceDomainEntity({
            cost: cost.valueOf(),
            date: date,
        })
    }

    private exectueCheckOutAggregate(invoice: IInvoiceDomainEntity): Promise<InvoiceDomainEntity | null> {
        return this.checkOutAggregate.addInvoice(invoice as IAddInvoice)
    }
}
