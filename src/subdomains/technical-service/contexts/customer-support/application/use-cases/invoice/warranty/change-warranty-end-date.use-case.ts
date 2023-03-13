import { InvoiceAggregate } from '../../../../domain/aggregates/Invoice';

import { IWarrantyDomainService } from '../../../../domain/services/invoice';

import { IWarrantyDomainEntity } from '../../../../domain/entities/interfaces/invoice';

import { UUIDValueObject, DateValueObject } from '../../../../domain/value-objects';

import { ValueObjectException, ValueObjectErrorHandler, IUseCase } from '@sofka';

import { WarrantyDomainEntityBase } from '../../../../domain/entities/invoice/warranty.domain-entity';
import { IChangeWarrantyEndDateCommand } from '../../../../domain/interfaces/commands/invoice/warranty/change-warranty-end-date.command';
import { IWarrantyEndDateChangedResponse } from '../../../../domain/interfaces/responses/invoice/warranty/warranty-end-date-changed.response';
import { WarrantyEndDateChangedEventPublisherBase } from '../../../../domain/events/publishers/invoice/warranty/warranty-end-date-changed.event-publisher';




export class ChangeWarrantyEndDateUseCase<
    Command extends IChangeWarrantyEndDateCommand = IChangeWarrantyEndDateCommand,
    Response extends IWarrantyEndDateChangedResponse = IWarrantyEndDateChangedResponse
> extends ValueObjectErrorHandler implements IUseCase<Command, Response>{

    private readonly invoiceAggregateRoot: InvoiceAggregate;

    constructor(
        private readonly warrantyService: IWarrantyDomainService,
        private readonly warrantyEndDateChangedEventPublisherBase: WarrantyEndDateChangedEventPublisherBase
    ){
        super();
        this.invoiceAggregateRoot = new InvoiceAggregate({
            warrantyService,
            warrantyEndDateChangedEventPublisherBase
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
     * @return {*}  {Promise <boolean>}
     * @memberof ChangeWarrantyStatusUseCase
     */
    executeCommand(command: Command): Promise <boolean> {
        
        const VO = this.createValueObject(command);

        this.validateValueObject(VO);

        const entity = this.createWarrantyEntity(VO);
        
        return this.executeChangeWarrantyEndDateAggregateRoot(entity);
    }
   
    /**
     * Generates a Warranty entity type with only the needed values (End Date)
     *
     * @param {Command} command
     * @return {*}  {IWarrantyDomainEntity}
     * @memberof ChangeWarrantyStatusUseCase
     */
    createValueObject(command: Command): IWarrantyDomainEntity {
        
        const warrantyID = new UUIDValueObject(command.warrantyID);
        const endDate = new DateValueObject(command.newEndDate);        

        return{
            warrantyID,
            endDate
        }
    }


    /**
     * Checks that the information of the newly created VO is valid
     *
     * @param {IWarrantyDomainEntity} VO
     * @memberof ChangeWarrantyStatusUseCase
     */
    validateValueObject(VO: IWarrantyDomainEntity) {
        
        const {
            warrantyID,
            endDate            
        } = VO;

        // validates warrantyID
        if (warrantyID instanceof UUIDValueObject && warrantyID.hasErrors())
        this.setErrors(warrantyID.getErrors());

        // validates endDate
        if (endDate instanceof DateValueObject && endDate.hasErrors())
        this.setErrors(endDate.getErrors());

        if (this.hasErrors() === true)
        throw new ValueObjectException(
            'ChangeWarrantyEndDateUseCase command execution return some errors!',
            this.getErrors(),
        );
    }


    /**
     * Creates and returns a new Warranty Entity with only the needed info
     *
     * @param {IWarrantyDomainEntity} VO
     * @return {*}  {WarrantyDomainEntityBase}
     * @memberof ChangeWarrantyStatusUseCase
     */
    createWarrantyEntity(VO: IWarrantyDomainEntity): WarrantyDomainEntityBase {
     
        const {
            warrantyID,
            endDate            
        } = VO;

        return new WarrantyDomainEntityBase ({
            warrantyID: warrantyID.valueOf(),
            endDate: endDate.valueOf()
        })
    }


    /**
     * Executes the method on the aggregate
     * 
     *
     * @param {WarrantyDomainEntityBase} entity
     * @return {*}  {Promise<boolean>}
     * @memberof ChangeWarrantyStatusUseCase
     */
    executeChangeWarrantyEndDateAggregateRoot(
        entity: WarrantyDomainEntityBase): Promise<boolean> {
        
            return this.invoiceAggregateRoot.ChangeWarrantyEndDate(entity);
    }
}