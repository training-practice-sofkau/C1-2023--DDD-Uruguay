import { ValueObjectErrorHandler, IUseCase, ValueObjectException } from '@sofka';

import { IInvoiceCreatedResponse, ICreateInvoiceCommand } from '../../../domain/interfaces';

import { InvoiceAggregate } from '../../../domain/aggregates/invoice';
import { IInvoiceDomainService } from '../../../domain/services/invoice';
import { InvoiceCreatedEventPublisherBase } from '../../../domain/events/publishers/invoice';
import { InvoiceDomainEntityBase } from '../../../domain/entities/invoice/invoice.domain-entity';

import { TrueFalseValueObject, AmountValueObject, UUIDValueObject, DateValueObject } from '../../../domain/value-objects';

import { IInvoiceDomainEntity } from '../../../domain/entities/interfaces/invoice/invoice.domain-entity.interface';

export class CreateInvoiceUseCase<
    Command extends ICreateInvoiceCommand = ICreateInvoiceCommand,
    Response extends IInvoiceCreatedResponse = IInvoiceCreatedResponse
> extends ValueObjectErrorHandler implements IUseCase<Command, Response>{

    private readonly invoiceAggregateRoot: InvoiceAggregate;

    constructor(
        private readonly invoiceService: IInvoiceDomainService,
        private readonly invoiceCreatedEventPublisherBase: InvoiceCreatedEventPublisherBase,

    ) {
        super();
        this.invoiceAggregateRoot = new InvoiceAggregate({
            invoiceService,
            invoiceCreatedEventPublisherBase
        })
    }

    async execute(command?: Command): Promise<Response> {

        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response;
    }


    /**
     * executes all the steps needed to make a new entity
     *
     * @private
     * @param {Command} command
     * @return {*}  {(Promise<InvoiceDomainEntityBase | null>)}
     * @memberof CreateInvoiceUseCase
     */
    private async executeCommand(command: Command): Promise<InvoiceDomainEntityBase | null> {

        const VO = this.createValueObject(command);
        this.validateValueObject(VO);
        const entity = this.createEntityInvoiceDomain(VO);

        return this.executeCreateInvoiceAggregateRoot(entity);
    }

    /**
     * Generates a new ValueObject of type Invoice
     *
     * @template Command
     * @param {Command} command
     * @memberof CreateInvoiceUseCase
     */
    createValueObject(command: Command): IInvoiceDomainEntity {

        const dateEmitted = new DateValueObject(command.dateEmitted);
        const ticketID = new UUIDValueObject(command.ticketID);
        const customerID = new UUIDValueObject(command.customerID);
        const invoiceAmount = new AmountValueObject(command.invoiceAmount);
        const warrantyID = new UUIDValueObject(command.warrantyID);
        const isPaid = new TrueFalseValueObject(command.isPaid);

        return {
            dateEmitted,
            ticketID,
            customerID,
            invoiceAmount,
            warrantyID,
            isPaid
        }
    }


    /**
     * Checks that the information of the new VO is valid
     *
     * @param {IInvoiceDomainEntity} VO
     * @memberof CreateInvoiceUseCase
     */
    validateValueObject(VO: IInvoiceDomainEntity) {

        const {
            dateEmitted,
            ticketID,
            customerID,
            invoiceAmount,
            warrantyID,
            isPaid
        } = VO;

        // validates Invoice Emission Date
        if (dateEmitted instanceof DateValueObject && dateEmitted.hasErrors())
            this.setErrors(dateEmitted.getErrors());

        // Validates TicketID
        if (ticketID instanceof UUIDValueObject && ticketID.hasErrors())
            this.setErrors(ticketID.getErrors());

        // Validates customerID
        if (customerID instanceof UUIDValueObject && customerID.hasErrors())
            this.setErrors(customerID.getErrors());

        // Validates warrantyID
        if (warrantyID instanceof UUIDValueObject && warrantyID.hasErrors())
            this.setErrors(warrantyID.getErrors());

        // Validates Amount
        if (invoiceAmount instanceof AmountValueObject && invoiceAmount.hasErrors())
            this.setErrors(invoiceAmount.getErrors());

        // Validate Is Paid
        if (isPaid instanceof TrueFalseValueObject && isPaid.hasErrors())
            this.setErrors(isPaid.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'CreateInvoiceUseCase command execution return some errors!',
                this.getErrors(),
            );


    }


    /**
     * Creates and returns a new Invoice Entity
     *
     * @param {void} VO
     * @memberof CreateInvoiceUseCase
     */
    createEntityInvoiceDomain(VO: IInvoiceDomainEntity): InvoiceDomainEntityBase {
        const {
            dateEmitted,
            ticketID,
            customerID,
            invoiceAmount,
            warrantyID,
            isPaid
        } = VO;

        return new InvoiceDomainEntityBase({
            dateEmitted: dateEmitted.valueOf(),
            ticketID: ticketID.valueOf(),
            customerID: customerID.valueOf(),
            invoiceAmount: invoiceAmount.valueOf(),
            warrantyID: warrantyID.valueOf(),
            isPaid: isPaid.valueOf()
        })

    }



    /**
     * Executes the method on the aggregate
     *
     * @private
     * @param {InvoiceDomainEntityBase} entity
     * @return {*}  {(Promise< InvoiceDomainEntityBase | null >)}
     * @memberof CreateInvoiceUseCase
     */
    private executeCreateInvoiceAggregateRoot(
        entity: InvoiceDomainEntityBase,
    ): Promise< InvoiceDomainEntityBase | null > {

        return this.invoiceAggregateRoot.createInvoice(entity);

    }

}