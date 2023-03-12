import { IChangeCustomerPhoneCommand } from '../../../../domain/interfaces/commands/invoice/customer/change-customer-phone.command';
import { ICustomerPhoneChangedResponse } from '../../../../domain/interfaces/responses/invoice/customer/customer-phone-changed.response';

import { InvoiceAggregate } from '../../../../domain/aggregates/Invoice/invoice.aggregate';
import { ICustomerDomainService } from '../../../../domain/services/invoice/customer.domain-service';
import { CustomerPhoneChangedEventPublisherBase } from '../../../../domain/events/publishers/invoice/customer/customer-phone-changed.event-publisher';
import { PhoneValueObject } from '../../../../domain/value-objects/common/phone/phone.value-object';
import { UUIDValueObject } from '../../../../domain/value-objects';
import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from '@sofka';
import { ICustomerDomainEntity } from '../../../../domain/entities/interfaces';
import { CustomerDomainEntityBase } from '../../../../domain/entities/invoice/customer.domain-entity';


export class ChangeCustomerPhoneUseCase <
    Command extends IChangeCustomerPhoneCommand = IChangeCustomerPhoneCommand,
    Response extends ICustomerPhoneChangedResponse = ICustomerPhoneChangedResponse
> extends ValueObjectErrorHandler implements IUseCase <Command, Response> {

    private readonly invoiceAggregateRoot: InvoiceAggregate;


    constructor(
        private readonly customerService: ICustomerDomainService,
        private readonly customerPhoneChangedEventPublisherBase: CustomerPhoneChangedEventPublisherBase
    ){
        super();
        this.invoiceAggregateRoot = new InvoiceAggregate ({
            customerService,
            customerPhoneChangedEventPublisherBase
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
     * @memberof ChangeCustomerPhoneUseCase
     */
    executeCommand(command: Command): Promise<boolean>{
        
        const VO = this.createValueObject(command);
        
        this.validateValueObject(VO);

        const entity = this.createCustomerEntity(VO);

        return this.executeChangeCustomerPhoneAggregateRoot(entity);

    }   
    

    /**
     * Generates a Customer entity type with only the needed values (new email)
     *
     * @template Command
     * @param {Command} command
     * @return {*} 
     * @memberof ChangeCustomerPhoneUseCase
     */
    createValueObject(command: Command): ICustomerDomainEntity {
     
        const customerID = new UUIDValueObject(command.customerID);
        const customerPhone = new PhoneValueObject(command.phoneNumber);

        return {
            customerID,
            customerPhone
        }
    }


    /**
     * Checks that the information of the newly created VO is valid
     *
     * @param {{ customerID: UUIDValueObject; customerPhone: PhoneValueObject; }} VO
     * @memberof ChangeCustomerPhoneUseCase
     */
    validateValueObject(VO: ICustomerDomainEntity) {
       
        const {
            customerID,
            customerPhone
        } = VO;

        // validates customerID
        if (customerID instanceof UUIDValueObject && customerID.hasErrors())
        this.setErrors(customerID.getErrors());

        // validates customerPhone
        if (customerPhone instanceof PhoneValueObject && customerPhone.hasErrors())
        this.setErrors(customerPhone.getErrors());

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
     * @return {*}  {CustomerDomainEntityBase}
     * @memberof ChangeCustomerPhoneUseCase
     */
    createCustomerEntity( VO:ICustomerDomainEntity) : CustomerDomainEntityBase  {
        
        const {
            customerID,
            customerPhone
        } = VO;

        return new CustomerDomainEntityBase({
            customerID: customerID.valueOf(),
            customerPhone: customerPhone.valueOf()
        })
    }

    /**
     * Executes the method on the aggregate
     *
     * @param {CustomerDomainEntityBase} entity
     * @return {*}  {Promise <boolean>}
     * @memberof ChangeCustomerEmailUseCase
     */
    private executeChangeCustomerPhoneAggregateRoot(
        entity: CustomerDomainEntityBase): Promise <boolean> {
        return this.invoiceAggregateRoot.ChangeCustomerPhone(entity);
    }

}