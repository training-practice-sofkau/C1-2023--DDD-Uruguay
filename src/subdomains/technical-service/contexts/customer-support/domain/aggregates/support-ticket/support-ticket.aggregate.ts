
import { AggregateRootException } from 'src/libs/sofka/exceptions';

import { NewTicketAddedEventPublisherBase } from '../../events/publishers/support-ticket';


import { IOpenNewTicketCommand, ICloseTicketCommand, IGenerateInvoiceCommand } from '../../interfaces';

import { 
    ISupportTicketDomainService, 
    IDeviceDomainService, 
    IRepairsDomainService 
} from '../../services/support-ticket/';


import { CloseTicket, GenerateInvoice, OpenNewTicket } from './helpers/ticket-support';
import { TicketClosedEventPublisherBase } from '../../events/publishers/support-ticket/ticket-closed.event-publisher';
import { InvoiceGeneratedEventPublisherBase } from '../../events/publishers/support-ticket/invoice-generated.event-publisher';


export class SupportTicketAggregate implements ISupportTicketDomainService {

    private readonly supportTicketService?: ISupportTicketDomainService;
    private readonly deviceService?: IDeviceDomainService;
    private readonly repairsService?: IRepairsDomainService;
    private readonly newTicketAddedEventPublisherBase?: NewTicketAddedEventPublisherBase;
    private readonly ticketClosedEventPublisherBase?: TicketClosedEventPublisherBase;
    private readonly invoiceGeneratedEventPublisherBase?: InvoiceGeneratedEventPublisherBase;

    constructor(
        {
            supportTicketService,
            repairsService,
            deviceService,
            newTicketAddedEventPublisherBase,
            ticketClosedEventPublisherBase,
            invoiceGeneratedEventPublisherBase,
        }: {

            supportTicketService?: ISupportTicketDomainService,
            deviceService?: IDeviceDomainService,
            repairsService?: IRepairsDomainService,
            newTicketAddedEventPublisherBase?: NewTicketAddedEventPublisherBase,
            ticketClosedEventPublisherBase?: TicketClosedEventPublisherBase,
            invoiceGeneratedEventPublisherBase?: InvoiceGeneratedEventPublisherBase,
            
            }) {

            this.supportTicketService = supportTicketService;
            this.deviceService = deviceService;
            this.repairsService = repairsService;
            this.newTicketAddedEventPublisherBase = newTicketAddedEventPublisherBase;
            this.ticketClosedEventPublisherBase = ticketClosedEventPublisherBase;
            this.invoiceGeneratedEventPublisherBase = invoiceGeneratedEventPublisherBase;
    }
    



    // #region SUPPORT-TICKET methods


   /**
    * Opens a new Support ticket
    *
    * @param {IOpenNewTicketCommand} ticketData
    * @return {*}  {Promise<boolean>}
    * @memberof SupportTicketAggregate
    */
   async OpenNewTicket(ticketData: IOpenNewTicketCommand): Promise<boolean> {

        if (!this.supportTicketService) {
            throw new AggregateRootException('InvoiceAggregate: "SupportTicketService" is not defined!');
        }
        if (!this.newTicketAddedEventPublisherBase) {
            throw new AggregateRootException('InvoiceAggregate: "NewTicketAddedEventPublisherBase" is not defined!');
        }

        return await OpenNewTicket(ticketData, this.supportTicketService, this.newTicketAddedEventPublisherBase);
    }



    /**
     * Closes the given ticket
     *
     * @param {ICloseTicketCommand} ticketData
     * @return {*}  {Promise<boolean>}
     * @memberof SupportTicketAggregate
     */
    async CloseTicket(ticketData: ICloseTicketCommand): Promise<boolean> {
        
        if (!this.supportTicketService) {
            throw new AggregateRootException('InvoiceAggregate: "SupportTicketService" is not defined!');
        }
        if (!this.ticketClosedEventPublisherBase) {
            throw new AggregateRootException('InvoiceAggregate: "TicketClosedEventPublisherBase" is not defined!');
        }

        return await CloseTicket(ticketData, this.supportTicketService, this.ticketClosedEventPublisherBase);
    }


    /**
     * Generates a invoice corresponding to the support ticket
     *
     * @param {IGenerateInvoiceCommand} ticketData
     * @return {*}  {Promise<boolean>}
     * @memberof SupportTicketAggregate
     */
    async GenerateInvoice(ticketData: IGenerateInvoiceCommand): Promise<boolean> {
        
        if (!this.supportTicketService) {
            throw new AggregateRootException('InvoiceAggregate: "SupportTicketService" is not defined!');
        }
        if (!this.invoiceGeneratedEventPublisherBase) {
            throw new AggregateRootException('InvoiceAggregate: "InvoiceGeneratedEventPublisherBase" is not defined!');
        }

        return await GenerateInvoice(ticketData, this.supportTicketService, this.invoiceGeneratedEventPublisherBase);

    }

    // #endregion
}


/*
 

*/