import { ValueObjectErrorHandler, IUseCase, ValueObjectException } from '../../../../../../../libs/sofka';

import { IInvoiceDomainService } from '../../../domain/services';
import { RegisteredInvoiceEventPublisherBase } from '../../../domain/events';
import { FeeDomainEntityBase } from '../../../domain/entities';
import { FeeTaxValueObject } from '../../../domain/value-objects';
import { InvoiceAggregate } from '../../../domain/aggregates';
import { IUpdateFeeTaxCommand } from '../../../domain/interfaces/commands/invoice';
import { IUpdateFeeTaxResponse } from '../../../domain/interfaces/responses/invoice';

export class UpdateFeeTaxUseCase<
    Command extends IUpdateFeeTaxCommand = IUpdateFeeTaxCommand,
    Response extends IUpdateFeeTaxResponse = IUpdateFeeTaxResponse
>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly invoiceAggregateRoot: InvoiceAggregate;

    constructor(
        private readonly invoiceService: IInvoiceDomainService,
        private readonly registeredInvoiceEventPublisherBase: RegisteredInvoiceEventPublisherBase,
    ) {
        super();
        this.invoiceAggregateRoot = new InvoiceAggregate({
            invoiceService,
            registeredInvoiceEventPublisherBase
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }

    private async executeCommand(
        command: Command
    ): Promise<FeeDomainEntityBase | null> {
        this.validateObjectValue(command.tax);
        command.domain.fee.tax = command.tax;
        return command.domain.fee;
    }

    private validateObjectValue(valueObject: FeeTaxValueObject): void {

        if (valueObject instanceof FeeTaxValueObject && valueObject.hasErrors())
            this.setErrors(valueObject.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por UpdateFeeTaxUserCase',
                this.getErrors(),
            );

    }

}