import { IWorkStatusChangedResponse, IChangeWorkStatusCommand } from '../../../../domain/interfaces/';
import { TrueFalseValueObject, UUIDValueObject } from '../../../../domain/value-objects/common';
import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from '@sofka';


import { SupportTicketAggregate } from '../../../../domain/aggregates/support-ticket/support-ticket.aggregate';
import { IRepairsDomainService } from '../../../../domain/services/support-ticket/repairs.domain-service';
import { WorkStatusChangedEventPublisherBase } from '../../../../domain/events/publishers/support-ticket/repairs/work-status-changed.event-publisher';


import { IRepairsDomainEntity } from '../../../../domain/entities/interfaces/support-ticket/repairs.domain-entity.interface';
import { RepairsDomainEntityBase } from '../../../../domain/entities/support-ticket/repairs.domain-entity/repairs.domain-entity';



export class ChangeWorkStatusUseCase<
    Command extends IChangeWorkStatusCommand = IChangeWorkStatusCommand,
    Response extends IWorkStatusChangedResponse = IWorkStatusChangedResponse
> extends ValueObjectErrorHandler implements IUseCase <Command, Response>{
    
    private readonly supportTicketAggregateRoot: SupportTicketAggregate;
    
    constructor(
        private readonly repairsService: IRepairsDomainService,
        private readonly workStatusChangedEventPublisherBase: WorkStatusChangedEventPublisherBase
    ){
        super();
        this.supportTicketAggregateRoot = new SupportTicketAggregate({
            repairsService,
            workStatusChangedEventPublisherBase
        })
    }
    
    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);
        return { success: data ? true : false, data } as unknown as Response;
    }



    /**
     * executes all the steps needed to make a new entity
     *
     * @template Command
     * @param {Command} command
     * @memberof ChangeWorkStatusUseCase
     */
    executeCommand(command: Command) {
        
        const VO = this.createValueObject(command);
        this.validateValueObject(VO);

        const entity = this.createRepairsEntity(VO);

        return this.executeChangeWorkStatusAggregateRoot(entity);
    }
   
    /**
     * Generates a Repairs entity type with only the needed values (Work Status)
     *
     * @private
     * @param {Command} command
     * @return {*}  {IWarrantyDomainEntity}
     * @memberof ChangeWorkStatusUseCase
     */
    private createValueObject(command: Command): IRepairsDomainEntity {
        
        const repairsID = new UUIDValueObject(command.repairID);
        const workFinished = new TrueFalseValueObject(command.newStatus);

        return{
            repairID: repairsID, 
            workFinished
        }
    }


    /**
     * Checks that the information of the newly created VO is valid
     *
     * @param {IRepairsDomainEntity} VO
     * @memberof ChangeWorkStatusUseCase
     */
    validateValueObject(VO: IRepairsDomainEntity) {

        const {
            repairID ,
            workFinished
        } = VO;

         // validates repairsID
         if (repairID instanceof UUIDValueObject && repairID.hasErrors())
         this.setErrors(repairID.getErrors());
 
         // validates workFinished
         if (workFinished instanceof TrueFalseValueObject && workFinished.hasErrors())
         this.setErrors(workFinished.getErrors());
 
         if (this.hasErrors() === true)
         throw new ValueObjectException(
             'ChangeWorkStatusUseCase command execution return some errors!',
             this.getErrors(),
         );
    }


    /**
     * Creates and returns a new Repairs Entity with only the needed info
     *
     * @param {IRepairsDomainEntity} VO
     * @return {*}  {RepairsDomainEntityBase}
     * @memberof ChangeWorkStatusUseCase
     */
    createRepairsEntity(VO: IRepairsDomainEntity) : RepairsDomainEntityBase {
        const {
            repairID: repairsID,
            workFinished
        } = VO;

        return new RepairsDomainEntityBase ({
            repairID: repairsID.valueOf(),
            workFinished: workFinished.valueOf()
        })
    }

    /**
     * Executes the method on the aggregate
     *
     * @param {RepairsDomainEntityBase} entity
     * @return {*}  {Promise <boolean>}
     * @memberof ChangeWorkStatusUseCase
     */
    executeChangeWorkStatusAggregateRoot(
        entity: RepairsDomainEntityBase) : Promise <boolean> {
     
            return this.supportTicketAggregateRoot.ChangeWorkStatus(entity);

    }
}