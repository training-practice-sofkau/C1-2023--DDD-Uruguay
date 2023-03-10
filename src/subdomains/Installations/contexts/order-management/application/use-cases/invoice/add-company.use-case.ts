import { ValueObjectErrorHandler, IUseCase, ValueObjectException } from '../../../../../../../libs/sofka';

import { IInvoiceDomainService } from '../../../domain/services';
import { RegisteredInvoiceEventPublisherBase } from '../../../domain/events';
import { CompanyDomainEntityBase  } from '../../../domain/entities';
import { ICompanyDomainEntity } from '../../../domain/entities/interfaces';
import {

    CompanyNameValueObject,
    CompanyBankAccountValueObject,
} from '../../../domain/value-objects';
import { InvoiceAggregate } from '../../../domain/aggregates';
import { IAddCompanyCommand } from '../../../domain/interfaces/commands/invoice';
import { IAddCompanyResponse } from '../../../domain/interfaces/responses/invoice';

export class AddCompanyUseCase<
    Command extends IAddCompanyCommand = IAddCompanyCommand,
    Response extends IAddCompanyResponse = IAddCompanyResponse
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
    ): Promise<CompanyDomainEntityBase | null> {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);
        const entity = this.createEntityCompanyDomain(ValueObject);
        return this.executeInvoiceAggregateRoot(entity);
    }

    private createValueObject(
        command: Command
    ): ICompanyDomainEntity {

        const name = new CompanyNameValueObject(command.name);
        const bankAccount = new CompanyBankAccountValueObject(command.bankAccount);

        return {
            name,
            bankAccount
        }
    }

    private validateValueObject(
        valueObject: ICompanyDomainEntity
    ): void {
        const {
            name,
            bankAccount
        } = valueObject

        if (name instanceof CompanyNameValueObject && name.hasErrors())
            this.setErrors(name.getErrors());

        if (bankAccount instanceof CompanyBankAccountValueObject && bankAccount.hasErrors())
            this.setErrors(bankAccount.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por AddCompanyUserCase',
                this.getErrors(),
            );

    }

    private createEntityCompanyDomain(
        valueObject: ICompanyDomainEntity
    ): CompanyDomainEntityBase {

        const {
            name,
            bankAccount
        } = valueObject

        return new CompanyDomainEntityBase({
            name: name.valueOf(),
            bankAccount: bankAccount.valueOf()
        })
    }

    private executeInvoiceAggregateRoot(
        entity: CompanyDomainEntityBase,
    ): Promise<CompanyDomainEntityBase | null> {
        return this.invoiceAggregateRoot.addCompany(entity)
    }
}