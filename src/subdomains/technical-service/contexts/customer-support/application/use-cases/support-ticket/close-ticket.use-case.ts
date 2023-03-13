import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from '@sofka';

import { ISupportTicketClosedResponse, ICloseTicketCommand } from '../../../domain/interfaces';

import { SupportTicketAggregate } from '../../../domain/aggregates/support-ticket/support-ticket.aggregate';
import { ISupportTicketDomainService } from '../../../domain/services/support-ticket/support-ticket.domain-service';
import { SupportTicketClosedEventPublisherBase } from '../../../domain/events/publishers/support-ticket/ticket-closed.event-publisher';

import { ISupportTicketEntity } from '../../../domain/entities/interfaces/support-ticket/support-ticket.domain-entity.interface';

import { TrueFalseValueObject, UUIDValueObject } from '../../../domain/value-objects/common/';

import { SupportTicketDomainEntityBase } from '../../../domain/entities/support-ticket/service-ticket.domain-entity';



export class CloseSupportTicketUseCase<
    Command extends ICloseTicketCommand = ICloseTicketCommand,
    Response extends ISupportTicketClosedResponse = ISupportTicketClosedResponse
> extends ValueObjectErrorHandler implements IUseCase<Command, Response> {
    
    private readonly supportTicketAggregateRoot: SupportTicketAggregate;

    constructor(
        private readonly supportTicketService: ISupportTicketDomainService,
        private readonly supportTicketClosedEventPublisherBase: SupportTicketClosedEventPublisherBase
    ){
        super();
        this.supportTicketAggregateRoot = new SupportTicketAggregate({
            supportTicketService,
            supportTicketClosedEventPublisherBase
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
     * @memberof CloseSupportTicketUseCase
     */
    executeCommand(command: Command) {
        
        const VO = this.createValueObject(command);
        this.validatesValueObject(VO);
        const entity = this.createSupportTicketEntity(VO);    
        return this.executeCloseSupportTicketAggregateRoot(entity);
    }
      
    
    /**
     * Generates a Support Ticket entity type with only the needed values (isOpen Status)
     *
     * @param {Command} command
     * @return {*}  {ISupportTicketEntity}
     * @memberof CloseSupportTicketUseCase
     */
    createValueObject(command: Command) : ISupportTicketEntity {
        
        const ticketID = new UUIDValueObject(command.ticketID);
        const isOpen = new TrueFalseValueObject(command.isOpen);

        return {
            ticketID,
            isOpen
        }
    }

    /**
     * Checks that the information of the newly created VO is valid
     *
     * @param {ISupportTicketEntity} VO
     * @memberof CloseSupportTicketUseCase
     */
    validatesValueObject(VO: ISupportTicketEntity) {
     
        const {
            ticketID,
            isOpen
        } = VO;

         // validates ticketID
         if (ticketID instanceof UUIDValueObject && ticketID.hasErrors())
         this.setErrors(ticketID.getErrors());
 
         // validates isOpen
         if (isOpen instanceof TrueFalseValueObject && isOpen.hasErrors())
         this.setErrors(isOpen.getErrors());
 
         if (this.hasErrors() === true)
         throw new ValueObjectException(
             'CloseSupportTicketUseCase command execution return some errors!',
             this.getErrors(),
         );
    }
    

    /**
     * Creates and returns a new Support Ticket Entity with only the needed info
     *
     * @param {ISupportTicketEntity} VO
     * @return {*}  {SupportTicketDomainEntityBase}
     * @memberof CloseSupportTicketUseCase
     */
    createSupportTicketEntity(VO: ISupportTicketEntity) : SupportTicketDomainEntityBase {
        
        const {
            ticketID,
            isOpen
        } = VO;

        return new SupportTicketDomainEntityBase ({
            ticketID: ticketID.valueOf(),
            isOpen: isOpen.valueOf()
        })
    }


    /**
     * Executes the method on the aggregate
     *
     * @param {SupportTicketDomainEntityBase} entity
     * @memberof CloseSupportTicketUseCase
     */
    executeCloseSupportTicketAggregateRoot(entity: SupportTicketDomainEntityBase) : Promise< boolean > {
        
        return this.supportTicketAggregateRoot.CloseTicket(entity);
    }

}
