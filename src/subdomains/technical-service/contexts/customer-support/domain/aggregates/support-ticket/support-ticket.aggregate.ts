import { ISupportTicketDomainService } from '../../services/support-ticket/';

export class SupportTicketAggregate implements ISupportTicketDomainService {


    
    constructor(
        {

        }: {

            }) {

    }



    // #region SUPPORT-TICKET methods

    async OpenNewTicket(): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    
    
    async CloseTicket(): Promise<boolean> {
        throw new Error('Method not implemented.');
    }


    async GenerateInvoice(): Promise<boolean> {
        throw new Error('Method not implemented.');
    }

    // #endregion
}