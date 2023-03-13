import { Injectable } from '@nestjs/common';
import { ISupportTicketEntity } from '../../../../../domain/entities/interfaces';
import { SupportTicketDomainEntityBase } from '../../../../../domain/entities/support-ticket';
import { IGenerateInvoiceCommand } from '../../../../../domain/interfaces';
import { ISupportTicketDomainService } from '../../../../../domain/services';
import { SupportTicketRepository } from '../repositories/support-ticket.repository';

@Injectable()
export class SupportTicketMySqlService implements ISupportTicketDomainService{

    constructor(
        private readonly supportTicketRepository: SupportTicketRepository
    ){}
    OpenNewTicket(ticketData: ISupportTicketEntity): Promise<ISupportTicketEntity> {
        throw new Error('Method not implemented.');
    }
    CloseTicket(ticketData: SupportTicketDomainEntityBase): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    GenerateInvoice(ticketData: IGenerateInvoiceCommand): Promise<boolean> {
        throw new Error('Method not implemented.');
    }

//TODO: implementar metodos
    
    
}