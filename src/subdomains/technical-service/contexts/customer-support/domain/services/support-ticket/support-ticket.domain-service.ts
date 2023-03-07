export interface ISupportTicketDomainService {

    OpenNewTicket(): Promise < boolean >;

    CloseTicket(): Promise < boolean >;

    GenerateInvoice(): Promise < boolean >;

}