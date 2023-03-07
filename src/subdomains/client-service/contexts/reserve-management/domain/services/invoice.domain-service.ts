export interface IInvoiceDomainService {
    updateCost(invoiceId: string, newCost: number): Promise<number>
}