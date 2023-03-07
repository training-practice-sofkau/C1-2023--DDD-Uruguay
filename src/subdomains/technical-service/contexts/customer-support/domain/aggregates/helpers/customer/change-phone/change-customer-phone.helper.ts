import { IChangeCustomerPhoneCommand } from '../../../../interfaces/commands/invoice/customer';
import { ICustomerDomainService } from '../../../../services/invoice/customer.domain-service';
import { CustomerPhoneChangedEventPublisherBase } from '../../../../events/publishers/customer/';

export const ChangeCustomerPhone = async (
    data: IChangeCustomerPhoneCommand,
    customerService: ICustomerDomainService,
    customerPhoneChangedEventPublisherBase: CustomerPhoneChangedEventPublisherBase
): Promise<boolean> => {

    const result = await customerService.changeCustomerPhone(data);
    customerPhoneChangedEventPublisherBase.response = result;
    customerPhoneChangedEventPublisherBase.publish();

    return result;
}