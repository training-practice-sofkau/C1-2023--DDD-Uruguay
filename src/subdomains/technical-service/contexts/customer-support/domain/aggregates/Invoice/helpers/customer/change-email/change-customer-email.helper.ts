
import { CustomerDomainEntityBase } from '../../../../../entities/invoice/customer.domain-entity';
import { CustomerEmailChangedEventPublisherBase } from '../../../../../events';
import { ICustomerDomainService } from '../../../../../services';


export const ChangeCustomerEmail = async (
    data: CustomerDomainEntityBase,
    customerService: ICustomerDomainService,
    customerEmailChangedEventPublisherBase: CustomerEmailChangedEventPublisherBase
): Promise<boolean> => {

    const result = await customerService.ChangeCustomerEmail(data);
    customerEmailChangedEventPublisherBase.response = result;
    customerEmailChangedEventPublisherBase.publish();

    return result;
}