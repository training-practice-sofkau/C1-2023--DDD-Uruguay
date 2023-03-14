import { ValueObjectErrorHandler, IUseCase, ValueObjectException } from '@sofka';

import { IWarrantyAdded as IWarrantyAddedResponse, IAddWarrantyCommand } from '../../../domain/interfaces';
import { InvoiceAggregate } from '../../../domain/aggregates/Invoice/invoice.aggregate';
import { IWarrantyDomainService } from '../../../domain/services/invoice/warranty.domain-service';
import { WarrantyAddedEventPublisherBase } from '../../../domain/events/publishers/invoice/warranty-added.event-publisher';
import { IWarrantyDomainEntity } from '../../../domain/entities/interfaces/invoice/warranty.domain-entity.interface';
import { DateValueObject } from '../../../domain/value-objects/common/date/date.value-object';
import { WarrantyStatusValueObject } from '../../../domain/value-objects/warranty/warranty-status.value-object';
import { WarrantyDomainEntityBase } from '../../../domain/entities/invoice/warranty.domain-entity/warranty.domain-entity';


export class AddWarrantyUseCase<
    Command extends IAddWarrantyCommand = IAddWarrantyCommand,
    Response extends IWarrantyAddedResponse = IWarrantyAddedResponse
> extends ValueObjectErrorHandler implements IUseCase<Command, Response> {

    private readonly invoiceAggregateRoot: InvoiceAggregate;

    constructor(
        private readonly warrantyService: IWarrantyDomainService,
        private readonly warrantyAddedEventPublisherBase: WarrantyAddedEventPublisherBase
    ) {
        super();
        this.invoiceAggregateRoot = new InvoiceAggregate({
            warrantyService,
            warrantyAddedEventPublisherBase
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
     * @return {*}  {Promise<IWarrantyDomainEntity>}
     * @memberof AddWarrantyUseCase
     */
    private async executeCommand(command: Command): Promise<IWarrantyDomainEntity> {

        const VO = this.createValueObject(command);

        this.validateValueObject(VO);

        const entity = this.createWarrantyEntityDomain(VO);

        return this.executeAddWarrantyAggregateRoot(entity);
    }     


    /**
     * Generates a new Value Object of type Warranty
     *
     * @param {Command} command
     * @return {*}  {IWarrantyDomainEntity}
     * @memberof AddWarrantyUseCase
     */
    createValueObject(command: Command): IWarrantyDomainEntity {

        const startDate = new DateValueObject(command.startDate);
        const endDate = new DateValueObject(command.endDate);       
        const warrantyStatus = command.warrantyStatus;

        return {
            startDate,
            endDate,           
            warrantyStatus,
        }
    }


    /**
     * Validates that the information is valid
     *
     * @param {IWarrantyDomainEntity} VO
     * @memberof AddWarrantyUseCase
     */
    validateValueObject(VO: IWarrantyDomainEntity) {
        const {
            startDate,
            endDate,           
            warrantyStatus,
        } = VO;

        // validate start date
        if (startDate instanceof DateValueObject && startDate.hasErrors())
            this.setErrors(startDate.getErrors());

        // validate end date
        if (endDate instanceof DateValueObject && endDate.hasErrors())
            this.setErrors(endDate.getErrors());
        
        // validate warranty
        if (warrantyStatus instanceof WarrantyStatusValueObject && warrantyStatus.hasErrors())
            this.setErrors(warrantyStatus.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'AddWarranty command execution return some errors!',
                this.getErrors(),
            );
    }


    /**
     * Creates and returns a new Warranty Entity
     *
     * @param {IWarrantyDomainEntity} VO
     * @return {*} 
     * @memberof AddWarrantyUseCase
     */
    createWarrantyEntityDomain(VO: IWarrantyDomainEntity) {

        const {
            startDate,
            endDate,           
            warrantyStatus,
        } = VO;

        return new WarrantyDomainEntityBase({
            startDate: startDate.valueOf(),
            endDate: endDate.valueOf(),            
            warrantyStatus: warrantyStatus
        })
        
    }


    /**
     * Executes the method in the aggregate
     *
     * @param {WarrantyDomainEntityBase} entity
     * @return {*}  {(Promise <IWarrantyDomainEntity | null>)}
     * @memberof AddWarrantyUseCase
     */
    executeAddWarrantyAggregateRoot(
        entity: WarrantyDomainEntityBase): Promise <IWarrantyDomainEntity | null> {
        
            return this.invoiceAggregateRoot.AddWarranty(entity);
    }

}
