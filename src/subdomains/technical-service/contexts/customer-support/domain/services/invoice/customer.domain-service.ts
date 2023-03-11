import { CustomerDomainEntityBase } from '../../entities/invoice/customer.domain-entity';
import { IChangeCustomerPhoneCommand, IChangeCustomerEmailCommand} from '../../interfaces/commands/invoice/customer';

export interface ICustomerDomainService {

    ChangeCustomerPhone( data: CustomerDomainEntityBase ): Promise<boolean>;

    ChangeCustomerEmail( data: CustomerDomainEntityBase ): Promise<boolean>;

}