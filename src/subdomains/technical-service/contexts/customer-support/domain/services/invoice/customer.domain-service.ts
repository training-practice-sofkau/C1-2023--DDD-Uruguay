import { CustomerDomainEntityBase } from '../../entities/invoice/customer.domain-entity';

export interface ICustomerDomainService {

    ChangeCustomerPhone( data: CustomerDomainEntityBase ): Promise<boolean>;

    ChangeCustomerEmail( data: CustomerDomainEntityBase ): Promise<boolean>;

}