import { ICreateCustomerCommand } from '../../../domain/interfaces/commands/invoice/create-customer.command';
import { ICustomerCreatedResponse } from '../../../domain/interfaces/responses/invoice/customer-created.response';
import { ValueObjectErrorHandler } from '../../../../../../../libs/sofka/bases/value-object-error-handler.base';
import { IUseCase } from '../../../../../../../libs/sofka/interface/use-case.interface';
import { InvoiceAggregate } from '../../../domain/aggregates/Invoice/invoice.aggregate';
import { ICustomerDomainService } from '../../../domain/services/invoice/customer.domain-service';
import { CustomerCreatedEventPublisherBase } from '../../../domain/events/publishers/invoice/customer-created.event-publisher';
import { CustomerDomainEntityBase } from '../../../domain/entities/invoice/customer.domain-entity/customer.domain-entity';
import { ICustomerDomainEntity } from '../../../domain/entities/interfaces/invoice/customer.domain-entity.interface';
import { FullnameValueObject } from '../../../domain/value-objects/common/fullname/fullname.value-object';
import { EmailValueObject } from '../../../domain/value-objects/common/email/email.value-object';
import { PhoneValueObject } from '../../../domain/value-objects/common/phone/phone.value-object';
import { ValueObjectException } from 'src/libs';


export class CreateCustomerUserCase<
    Command extends ICreateCustomerCommand = ICreateCustomerCommand,
    Response extends ICustomerCreatedResponse = ICustomerCreatedResponse
> extends ValueObjectErrorHandler implements IUseCase<Command, Response>{

    private readonly invoiceAggregateRoot: InvoiceAggregate;

    constructor(
        private readonly customerService: ICustomerDomainService,
        private readonly customerCreatedEventPublisherBase: CustomerCreatedEventPublisherBase
    ) {
        super();
        this.invoiceAggregateRoot = new InvoiceAggregate({
            customerService,
            customerCreatedEventPublisherBase
        })
    }



    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response;
    }



    executeCommand(command: Command): Promise<CustomerDomainEntityBase | null> {
        const VO = this.createValueObject(command);
        this.validateValueObject(VO);

        const entity = this.createCustomerEntity(VO)

        return this.executeCreateCustomerAggregateRoot(entity);
    }

    /**
     * Generates a new ValueObject of type Invoice
     *
     * @param {Command} command
     * @return {*}  {ICustomerDomainEntity}
     * @memberof CreateCustomerUserCase
     */
    createValueObject(command: Command): ICustomerDomainEntity {

        const customerName = new FullnameValueObject(command.customerName);
        const customerEmail = new EmailValueObject(command.customerEmail);
        const customerPhone = new PhoneValueObject(command.customerPhone);        

        return {
            customerName,
            customerEmail,
            customerPhone,
        }
    }

    /**
     * Checks that the information of the new VO is valid
     *
     * @param {ICustomerDomainEntity} VO
     * @memberof CreateCustomerUserCase
     */
    validateValueObject(VO: ICustomerDomainEntity) {

        const {
            customerName,
            customerEmail,
            customerPhone
        } = VO;

        // validates fullname
        if (customerName instanceof FullnameValueObject && customerName.hasErrors())
            this.setErrors(customerName.getErrors());

        //validate email
        if (customerEmail instanceof EmailValueObject && customerEmail.hasErrors())
            this.setErrors(customerEmail.getErrors());
        //validates phone
        if (customerPhone instanceof EmailValueObject && customerPhone.hasErrors())
            this.setErrors(customerPhone.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'CreateCustomerUserCase command execution return some errors!',
                this.getErrors(),
            );
    }


    /**
     * Creates and returns a new Invoice Entity
     *
     * @param {ICustomerDomainEntity} VO
     * @return {*} 
     * @memberof CreateCustomerUserCase
     */
    createCustomerEntity(VO: ICustomerDomainEntity) {
        
        const {
            customerName,
            customerEmail,
            customerPhone
        } = VO;

        return new CustomerDomainEntityBase({
            customerName: customerName.valueOf(),
            customerEmail: customerEmail.valueOf(),
            customerPhone: customerPhone.valueOf()
        })
    }


    /**
     * Executes the method on the aggregate
     *
     * @param {CustomerDomainEntityBase} entity
     * @return {*}  {Promise<CustomerDomainEntityBase>}
     * @memberof CreateCustomerUserCase
     */
    executeCreateCustomerAggregateRoot(
        entity: CustomerDomainEntityBase): Promise<CustomerDomainEntityBase> {
        
            return this.invoiceAggregateRoot.CreateCustomer(entity);
    }
   

}