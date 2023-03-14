import { Injectable } from '@nestjs/common';
import { ISupportTicketEntity } from '../../../../../domain/entities/interfaces';
import { SupportTicketDomainEntityBase } from '../../../../../domain/entities/support-ticket';
import { ISupportTicketDomainService } from '../../../../../domain/services';
import { SupportTicketRepository } from '../repositories/support-ticket.repository';
import { SupportTicketMySqlEntity } from '../entities/support-ticket.entity';

@Injectable()
export class SupportTicketMySqlService implements ISupportTicketDomainService{

    constructor(
        private readonly supportTicketRepository: SupportTicketRepository
    ){}

    /**
     * Creates a new support ticket 
     *
     * @param {ISupportTicketEntity} ticketData
     * @return {*}  {Promise<ISupportTicketEntity>}
     * @memberof SupportTicketMySqlService
     */
    async OpenNewTicket(ticketData: ISupportTicketEntity): Promise<ISupportTicketEntity> {
        
        return await this.supportTicketRepository.create(ticketData as SupportTicketMySqlEntity)
    }

    /**
     * Changes the support ticket status
     *
     * @param {SupportTicketDomainEntityBase} ticketData
     * @return {*}  {Promise<boolean>}
     * @memberof SupportTicketMySqlService
     */
    async CloseTicket(ticketData: SupportTicketDomainEntityBase): Promise<boolean> {
        
        if(this.supportTicketRepository.update(ticketData as SupportTicketMySqlEntity)) return await true;

        return false;        
    }

}