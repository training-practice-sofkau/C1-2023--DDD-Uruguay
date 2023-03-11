import {
    IUseCase,
    ValueObjectErrorHandler,
    ValueObjectException
} from "src/libs/sofka";
import {
    CheckOutAggregate,
    CostUpdatedEventPublisher,
    CostValueObject,
    ICostUpdatedResponse,
    IInvoiceDomainEntity,
    IInvoiceDomainService,
    IUpdateCost,
    InvoiceDomainEntity
} from "../../../../../domain";

export class UpdateCostUseCase<
    Command extends IUpdateCost = IUpdateCost,
    Response extends ICostUpdatedResponse = ICostUpdatedResponse
> extends ValueObjectErrorHandler implements IUseCase<Command, Response>
{
    private readonly checkOutAggregate: CheckOutAggregate;

    constructor(
        private readonly invoiceService: IInvoiceDomainService,
        private readonly costUpdatedEventPublisher: CostUpdatedEventPublisher
    ) {
        super();
        this.checkOutAggregate = new CheckOutAggregate({
            invoiceService,
            costUpdatedEventPublisher,
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }


    private async executeCommand(command: Command): Promise<IInvoiceDomainEntity | null> {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);
        const cost = this.createNewCost(ValueObject);
        return this.exectueCheckOutAggregate(cost)
    }

    private createValueObject(command: Command): IInvoiceDomainEntity {
        const cost = new CostValueObject(command.cost);

        return {
            cost,
        }
    }

    private validateValueObject(valueObject: IInvoiceDomainEntity): void {
        const {
            cost,
        } = valueObject

        if (cost instanceof CostValueObject && cost.hasErrors())
            this.setErrors(cost.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por UpdateCostUseCase',
                this.getErrors(),
            );
    }

    private createNewCost(valueObject: IInvoiceDomainEntity): InvoiceDomainEntity {
        const {
            cost,
            invoiceId,
        } = valueObject

        return new InvoiceDomainEntity({
            cost: cost.valueOf(),
            invoiceId: invoiceId.valueOf(),
        })
    }

    private exectueCheckOutAggregate(data: IInvoiceDomainEntity): Promise<InvoiceDomainEntity | null> {
        return this.checkOutAggregate.updateCost(data as IUpdateCost)
    }
}
