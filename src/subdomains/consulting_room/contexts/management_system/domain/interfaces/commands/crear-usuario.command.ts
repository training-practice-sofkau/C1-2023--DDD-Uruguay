export interface IAddOrderCommand {
    orderId?: string;
    description?: string;
    date?: number;
    client: IClientDomainEntity;
    invoice: IInvoiceDomainEntity;
    createdAt?: number | Date;
    updatedAt?: number | Date;
    deletedAt?: number | Date;
}