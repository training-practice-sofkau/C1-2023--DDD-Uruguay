import { IOpenNewTicketCommand } from '../../../domain/interfaces/commands/support-ticket/open-new-ticket.command';

import { SupportTicketAggregate } from '../../../domain/aggregates/support-ticket/support-ticket.aggregate';
import { ISupportTicketDomainService } from '../../../domain/services/support-ticket/support-ticket.domain-service';
import { NewTicketAddedEventPublisherBase } from '../../../domain/events/publishers/support-ticket/new-ticket-added.event-publisher';
import { ISupportTicketEntity } from '../../../domain/entities/interfaces/support-ticket/support-ticket.domain-entity.interface';
import { DateValueObject, UUIDValueObject } from '../../../domain/value-objects/common';

import { ValueObjectException, IUseCase, ValueObjectErrorHandler } from '@sofka';
import { ISupportTicketOpenedResponse } from '../../../domain/interfaces/responses/support-ticket/new-ticket-opened.response';
import { SupportTicketDomainEntityBase } from '../../../domain/entities/support-ticket/service-ticket.domain-entity';


export class OpenNewTicketUseCase<
    Command extends IOpenNewTicketCommand = IOpenNewTicketCommand,
    Response extends ISupportTicketOpenedResponse = ISupportTicketOpenedResponse
> extends ValueObjectErrorHandler implements IUseCase<Command, Response> {

    private readonly supportTicketAggregateRoot: SupportTicketAggregate;

    constructor(
        private readonly supportTicketService: ISupportTicketDomainService,
        private readonly newTicketAddedEventPublisherBase: NewTicketAddedEventPublisherBase
    ) {
        super();
        this.supportTicketAggregateRoot = new SupportTicketAggregate({
            supportTicketService,
            newTicketAddedEventPublisherBase
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
     * @return {*}  {(Promise<ISupportTicketEntity | null>)}
     * @memberof OpenNewTicketUseCase
     */
    private async executeCommand(command: Command): Promise<ISupportTicketEntity | null> {

        const VO = this.createValueObject(command);

        this.validateValueObject(VO);

        const entity = this.createSupportTicketEntityDomain(VO);


        return this.executeOpenNewSupportTicketAggregateRoot(entity);
    }
    
    /**
     *   Generates a new ValueObject of type Support Ticket
     *
     * @template Command
     * @param {Command} command
     * @return {*} 
     * @memberof OpenNewTicketUseCase
     */
    createValueObject(command: Command): ISupportTicketEntity {

        const dateOpen = new DateValueObject(command.openDate);
        const deviceID = new UUIDValueObject(command.deviceID);
        const employeeID = new UUIDValueObject(command.employeeID);
        const isOpen = true;

        return {
            dateOpen,
            deviceID,
            employeeID,
            isOpen
        }
    }


    /**
     * Checks that the information of the newly created VO is valid
     *
     * @param {ISupportTicketEntity} VO
     * @memberof OpenNewTicketUseCase
     */
    validateValueObject(VO: ISupportTicketEntity): void {

        const {
            dateOpen,
            employeeID,
            deviceID,            
            isOpen
        } = VO

        // validates ticket open date
        if (dateOpen instanceof DateValueObject && dateOpen.hasErrors())
            this.setErrors(dateOpen.getErrors());

        // vslidates device id
        if (deviceID instanceof UUIDValueObject && deviceID.hasErrors())
            this.setErrors(deviceID.getErrors());

        // validates employee id
        if (employeeID instanceof UUIDValueObject && employeeID.hasErrors())
        this.setErrors(employeeID.getErrors());
        
        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'OpenNewTicketUseCase command execution return some errors!',
                this.getErrors(),
            );
    }



    /**
     * Creates and returns a new Support Ticket Entity
     *
     * @param {ISupportTicketEntity} VO
     * @return {*}  {SupportTicketDomainEntityBase}
     * @memberof OpenNewTicketUseCase
     */
    createSupportTicketEntityDomain(VO: ISupportTicketEntity): SupportTicketDomainEntityBase {
        const {
            dateOpen,
            employeeID,
            deviceID,            
            isOpen
        } = VO;
        
        return new SupportTicketDomainEntityBase({

            dateOpen: dateOpen.valueOf(),
            employeeID: employeeID.valueOf(),
            deviceID: deviceID.valueOf(),
            isOpen: isOpen.valueOf()
        })
    }


    /**
     * Executes the method on the aggregate
     *
     * @private
     * @param {SupportTicketDomainEntityBase} entity
     * @return {*}  {(Promise<ISupportTicketEntity | null >)}
     * @memberof OpenNewTicketUseCase
     */
    private executeOpenNewSupportTicketAggregateRoot(entity: SupportTicketDomainEntityBase
        ): Promise<ISupportTicketEntity | null > {
        
            return this.supportTicketAggregateRoot.OpenNewTicket(entity);
    }

}
