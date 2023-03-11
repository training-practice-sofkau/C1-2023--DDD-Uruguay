
import { CustomerDomainEntityBase } from '../../../../../entities/invoice/customer.domain-entity';
import { CustomerPhoneChangedEventPublisherBase } from '../../../../../events';
import { ICustomerDomainService } from '../../../../../services';

export const ChangeCustomerPhone = async (
    data: CustomerDomainEntityBase,
    customerService: ICustomerDomainService,
    customerPhoneChangedEventPublisherBase: CustomerPhoneChangedEventPublisherBase
): Promise<boolean> => {

    const result = await customerService.ChangeCustomerPhone(data);
    customerPhoneChangedEventPublisherBase.response = result;
    customerPhoneChangedEventPublisherBase.publish();

    return result;
}