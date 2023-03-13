import { CustomerDomainEntityBase } from '../../entities/invoice/customer.domain-entity';
import { ICustomerDomainEntity } from '../../entities/interfaces/invoice/customer.domain-entity.interface';

export interface ICustomerDomainService {

    ChangeCustomerPhone( data: CustomerDomainEntityBase ): Promise<ICustomerDomainEntity>;

    ChangeCustomerEmail( data: CustomerDomainEntityBase ): Promise<ICustomerDomainEntity>;

}