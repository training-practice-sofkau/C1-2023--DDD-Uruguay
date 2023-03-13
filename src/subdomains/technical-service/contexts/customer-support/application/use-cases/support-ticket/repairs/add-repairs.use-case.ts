import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from '@sofka';
import { IAddRepairsCommand } from "../../../../domain/interfaces";
import { IRepairsDetailsAddedResponse } from '../../../../domain/interfaces/responses/support-ticket/repairs';
import { IRepairsDomainEntity } from '../../../../domain/entities/interfaces/support-ticket/repairs.domain-entity.interface';

import { UUIDValueObject } from '../../../../domain/value-objects/common/';
import { RepairValueObject } from '../../../../domain/value-objects/repair/';

import { RepairsDomainEntityBase } from '../../../../domain/entities/support-ticket/repairs.domain-entity/repairs.domain-entity';
import { SupportTicketAggregate } from '../../../../domain/aggregates';
import { IRepairsDomainService } from '../../../../domain/services';
import { RepairsAddedEventPublisherBase } from '../../../../domain/events/publishers/support-ticket/repairs/repairs-added.event-publisher';


export class AddRepairDetailsUseCase<
    Command extends IAddRepairsCommand = IAddRepairsCommand,
    Response extends IRepairsDetailsAddedResponse = IRepairsDetailsAddedResponse
> extends ValueObjectErrorHandler implements IUseCase <Command, Response> {

    private readonly supportTicketAggregateRoot: SupportTicketAggregate;
    
    constructor(
        private readonly repairsService: IRepairsDomainService,
        private readonly repairsAddedEventPublisherBase: RepairsAddedEventPublisherBase
    ){
        super();
        this.supportTicketAggregateRoot = new SupportTicketAggregate({
            repairsService,
            repairsAddedEventPublisherBase
        })
    }


    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);
        return { success: data ? true : false, data } as unknown as Response;    }
    
    
    
    /**
     * executes all the steps needed to make a new entity
     *
     * @private
     * @param {Command} command
     * @memberof AddRepairDetailsUseCase
     */
    private  executeCommand(command: Command) {
        const VO = this.createValueObject(command);
        this.validateValueObject(VO);
        
        const entity = this.createRepairEntity(VO);

        return this.executeAddRepairDetailsAggregateRoot(entity);
    }
    
        

    /**
     * Generates a Repairs entity type with only the needed values (Repair Details)
     *
     * @template Command
     * @param {Command} command
     * @memberof AddRepairDetailsUseCase
     */

    createValueObject(command: Command): IRepairsDomainEntity {
        
        const repairID = new UUIDValueObject(command.repairID);
        const repairs = command.repairToAdd;         

        return {
            repairID,
            repairs
        }
    }


    /**
     * Checks that the information of the newly created VO is valid
     *
     * @param {IRepairsDomainEntity} VO
     * @memberof AddRepairDetailsUseCase
     */
    validateValueObject(VO: IRepairsDomainEntity) {
        const {
            repairID,
            repairs
        } = VO;

         // validates repairID
         if (repairID instanceof UUIDValueObject && repairID.hasErrors())
         this.setErrors(repairID.getErrors());
 
         // validates repairs
         if (repairs instanceof RepairValueObject && repairs.hasErrors())
         this.setErrors(repairs.getErrors());
 
         if (this.hasErrors() === true)
         throw new ValueObjectException(
             'AddRepairDetailsUseCase command execution return some errors!',
             this.getErrors(),
         );
    }


    /**
     * Creates and returns a new Repairs Entity with only the needed info
     *
     * @param {IRepairsDomainEntity} VO
     * @return {*}  {RepairsDomainEntityBase}
     * @memberof AddRepairDetailsUseCase
     */
    createRepairEntity(VO: IRepairsDomainEntity) : RepairsDomainEntityBase {
        const {
            repairID,
            repairs
        } = VO;

        return new RepairsDomainEntityBase ({
            repairID: repairID.valueOf(),
            repairs: repairs
        })
    }


    /**
     * Executes the method on the aggregate
     *
     * @param {RepairsDomainEntityBase} entity
     * @memberof AddRepairDetailsUseCase
     */
    executeAddRepairDetailsAggregateRoot(
        entity: RepairsDomainEntityBase) : Promise < boolean > {
        
            return this.supportTicketAggregateRoot.AddRepair(entity);
    }

    
}
