import { CustomerDomainEntityBase } from "../../../../../entities/invoice/customer.domain-entity";
import { CustomerCreatedEventPublisherBase } from "../../../../../events";
import { IInvoiceDomainService } from "../../../../../services";


export const CreateCustomer = async (
    customerData: CustomerDomainEntityBase,
    invoiceService: IInvoiceDomainService,
    customerCreatedEventPublisherBase: CustomerCreatedEventPublisherBase
): Promise<CustomerDomainEntityBase | null> => {

    const result = await invoiceService.CreateCustomer(customerData);
    customerCreatedEventPublisherBase.response = result;
    customerCreatedEventPublisherBase.publish();

    return result;
}