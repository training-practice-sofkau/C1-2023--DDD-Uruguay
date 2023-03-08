import { IChangeCustomerEmailCommand } from '../../../../interfaces/commands/invoice/customer/change-customer-email.command';
import { ICustomerDomainService } from '../../../../services/invoice/customer.domain-service';
import { CustomerEmailChangedEventPublisherBase } from '../../../../events/publishers/customer/customer-email-changed.event-publisher';

export const ChangeCustomerEmail = async (
    data: IChangeCustomerEmailCommand,
    customerService: ICustomerDomainService,
    customerEmailChangedEventPublisherBase: CustomerEmailChangedEventPublisherBase
): Promise<boolean> => {

    const result = await customerService.changeCustomerEmail(data);
    customerEmailChangedEventPublisherBase.response = result;
    customerEmailChangedEventPublisherBase.publish();

    return result;
}