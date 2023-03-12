import { IInvoiceMarkedAsPaidResponse } from '../../../domain/interfaces';

import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from '@sofka';
import { InvoiceAggregate } from '../../../domain/aggregates/Invoice/invoice.aggregate';
import { IInvoiceDomainService } from '../../../domain/services/invoice/invoice.domain-service';
import { InvoiceMarkedAsPaidEventPublisherBase } from '../../../domain/events/publishers/invoice/marked-as-paid.event-publisher';
import { UUIDValueObject } from '../../../domain/value-objects/common/uuid/uuid.value-object';

import { TrueFalseValueObject } from '../../../domain/value-objects/common/true-false/true-false.value-object';
import { IInvoiceDomainEntity } from '../../../domain/entities/interfaces/invoice/invoice.domain-entity.interface';
import { IMarkInvoiceAsPaidCommand } from '../../../domain/interfaces/commands/invoice/mark-as-paid.command';
import { InvoiceDomainEntityBase } from '../../../domain/entities/invoice/invoice.domain-entity';


export class MarkInvoiceAsPaidUseCase<
    Command extends IMarkInvoiceAsPaidCommand = IMarkInvoiceAsPaidCommand,
    Response extends IInvoiceMarkedAsPaidResponse = IInvoiceMarkedAsPaidResponse
> extends ValueObjectErrorHandler implements IUseCase<Command, Response>{


    private readonly invoiceAggregateRoot: InvoiceAggregate;

    constructor(
        private readonly invoiceService: IInvoiceDomainService,
        private readonly invoiceMarkedAsPaidEventPublisherBase: InvoiceMarkedAsPaidEventPublisherBase
    ) {
        super();
        this.invoiceAggregateRoot = new InvoiceAggregate({
            invoiceService,
            invoiceMarkedAsPaidEventPublisherBase
        })
    }


    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);
        return { success: data ? true : false, data } as unknown as Response;
    }


    /**
     * executes all the steps needed to make a new entity
     *
     * @param {Command} command
     * @return {*}  {Promise<boolean>}
     * @memberof MarkInvoiceAsPaidUseCase
     */
    executeCommand(command: Command): Promise<boolean> {

        const VO = this.createValueObject(command);

        this.validateValueObject(VO);

        const entity = this.createInvoiceEntity(VO);

        return this.executeMarkInvoiceAsPaidAggregateRoot(entity);
    }
    
  
    /**
     * Generates a Invoice entity type with only the needed values (isPaid status)
     *
     * @param {Command} command
     * @return {*}  {IInvoiceDomainEntity}
     * @memberof MarkInvoiceAsPaidUseCase
     */
    createValueObject(command: Command): IInvoiceDomainEntity {
       
        const invoiceID = new UUIDValueObject(command.invoiceID);
        const isPaid = new TrueFalseValueObject(command.isPaid);

        return{
            invoiceID,
            isPaid
        }
    }

    /**
     * Checks that the information of the newly created VO is valid
     *
     * @param {IInvoiceDomainEntity} VO
     * @memberof MarkInvoiceAsPaidUseCase
     */
    validateValueObject(VO: IInvoiceDomainEntity) {
         const {
            invoiceID,
            isPaid
        } = VO;

         // validates invoiceID
         if (invoiceID instanceof UUIDValueObject && invoiceID.hasErrors())
         this.setErrors(invoiceID.getErrors());
 
         // validates isPaid
         if (isPaid instanceof TrueFalseValueObject && isPaid.hasErrors())
         this.setErrors(isPaid.getErrors());
 
         if (this.hasErrors() === true)
         throw new ValueObjectException(
             'MarkInvoiceAsPaidUseCase command execution return some errors!',
             this.getErrors(),
         );
    }


    /**
     * Creates and returns a new Customer Entity with only the needed info
     *
     * @param {IInvoiceDomainEntity} VO
     * @return {*}  {InvoiceDomainEntityBase}
     * @memberof MarkInvoiceAsPaidUseCase
     */
    createInvoiceEntity(VO: IInvoiceDomainEntity): InvoiceDomainEntityBase{
        
        const {
            invoiceID,
            isPaid
        } = VO;

        return new InvoiceDomainEntityBase({
            invoiceID: invoiceID.valueOf(),
            isPaid: isPaid.valueOf()
        })
    }
    
    executeMarkInvoiceAsPaidAggregateRoot(
        entity: InvoiceDomainEntityBase): Promise<boolean> {
        
            return this.invoiceAggregateRoot.MarkAsPaid(entity);
    }


}