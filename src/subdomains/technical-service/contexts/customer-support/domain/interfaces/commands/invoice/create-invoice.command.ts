export interface ICreateInvoiceCommand{
    dateEmitted?: Date;
    ticketID?: string;
    customerID?: string;
    invoiceAmount?: number;
    warrantyID?: string;
    isPaid?: boolean;
}