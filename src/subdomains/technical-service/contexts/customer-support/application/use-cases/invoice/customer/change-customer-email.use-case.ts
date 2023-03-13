import { ValueObjectErrorHandler, IUseCase, ValueObjectException } from '@sofka';
import { UUIDValueObject, EmailValueObject } from '../../../../domain/value-objects/common';

import { IChangeCustomerEmailCommand } from '../../../../domain/interfaces/commands/invoice/customer/change-customer-email.command';
import { ICustomerEmailChangedResponse } from '../../../../domain/interfaces/responses/invoice/customer/customer-email-changed.response';
import { InvoiceAggregate } from '../../../../domain/aggregates/Invoice/invoice.aggregate';
import { ICustomerDomainService } from '../../../../domain/services/invoice/customer.domain-service';
import { CustomerEmailChangedEventPublisherBase } from '../../../../domain/events/publishers/invoice/customer/customer-email-changed.event-publisher';
import { ICustomerDomainEntity } from '../../../../domain/entities/interfaces/invoice/customer.domain-entity.interface';
import { CustomerDomainEntityBase } from '../../../../domain/entities/invoice/customer.domain-entity/customer.domain-entity';



export class ChangeCustomerEmailUseCase<
    Command extends IChangeCustomerEmailCommand = IChangeCustomerEmailCommand,
    Response extends ICustomerEmailChangedResponse = ICustomerEmailChangedResponse
> extends ValueObjectErrorHandler implements IUseCase<Command, Response> {


    private readonly invoiceAggregateRoot: InvoiceAggregate;

    constructor(
        private readonly customerService: ICustomerDomainService,
        private readonly customerEmailChangedEventPublisherBase: CustomerEmailChangedEventPublisherBase
    ) {
        super();
        this.invoiceAggregateRoot = new InvoiceAggregate({
            customerService,
            customerEmailChangedEventPublisherBase
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
     * @memberof ChangeCustomerEmailUseCase
     */
    executeCommand(command: Command) {

        const VO = this.createValueObject(command);
        this.validateValueObject(VO);

        const entity = this.createCustomerEntity(VO);

        return this.executeChangeCustomerEmailAggregateRoot(entity);
    }
        

    /**
     * Generates a Customer entity type with only the needed values (new email)
     *
     * @template Command
     * @param {Command} command
     * @return {*} 
     * @memberof ChangeCustomerEmailUseCase
     */
    createValueObject(command: Command): ICustomerDomainEntity {
        const customerID = new UUIDValueObject(command.customerID);
        const customerEmail = new EmailValueObject(command.newEmail);

        return {
            customerID,
            customerEmail
        }
    }


    /**
     * Checks that the information of the newly created VO is valid
     *
     * @param {ICustomerDomainEntity} VO
     * @memberof ChangeCustomerEmailUseCase
     */
    validateValueObject(VO: ICustomerDomainEntity) {

        const {
            customerID,
            customerEmail
        } = VO;

        // validates customerID
        if (customerID instanceof UUIDValueObject && customerID.hasErrors())
            this.setErrors(customerID.getErrors());

        // validates customerEmail
        if (customerEmail instanceof EmailValueObject && customerEmail.hasErrors())
            this.setErrors(customerEmail.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'ChangeCustomerEmailUseCase command execution return some errors!',
                this.getErrors(),
            );
    }


    /**
     * Creates and returns a new Customer Entity with only the needed info
     *
     * @param {ICustomerDomainEntity} VO
     * @return {*} 
     * @memberof ChangeCustomerEmailUseCase
     */
    createCustomerEntity(VO: ICustomerDomainEntity) : CustomerDomainEntityBase {
        
        const {
            customerID,
            customerEmail
        } = VO;

        return new CustomerDomainEntityBase({
            customerID: customerID.valueOf(),
            customerEmail: customerEmail.valueOf()
        })
    }


    /**
     * Executes the method on the aggregate
     *
     * @param {CustomerDomainEntityBase} entity
     * @return {*}  {Promise <boolean>}
     * @memberof ChangeCustomerEmailUseCase
     */
    executeChangeCustomerEmailAggregateRoot(
        entity: CustomerDomainEntityBase): Promise <boolean> {
        return this.invoiceAggregateRoot.ChangeCustomerEmail(entity);
    }

}