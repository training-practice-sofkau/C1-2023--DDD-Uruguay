import { IInvoiceDomainService } from '../../../../services/invoice/invoice.domain-service';
import { ICreateCustomerCommand } from '../../../../interfaces/commands/invoice/create-customer.command';
import { CustomerCreatedEventPublisherBase } from '../../../../events/publishers/invoice/customer-created.event-publisher';

export const CreateCustomer = async (
    customerData: ICreateCustomerCommand,
    invoiceService: IInvoiceDomainService,
    customerCreatedEventPublisherBase: CustomerCreatedEventPublisherBase
): Promise<boolean> => {

    const result = await invoiceService.CreateCustomer(customerData);
    customerCreatedEventPublisherBase.response = result;
    customerCreatedEventPublisherBase.publish();

    return result;
}