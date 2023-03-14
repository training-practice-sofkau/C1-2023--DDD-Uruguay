export interface IAddInvoiceCommand {
    invoiceId?: string;
    amount?: number;
    date?: number;
    createdAt?: number | Date;
    updatedAt?: number | Date;
    deletedAt?: number | Date;
}