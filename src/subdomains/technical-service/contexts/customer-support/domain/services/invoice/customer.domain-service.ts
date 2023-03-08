import { IChangeCustomerPhoneCommand, IChangeCustomerEmailCommand} from '../../interfaces/commands/invoice/customer';

export interface ICustomerDomainService {

    changeCustomerPhone( data: IChangeCustomerPhoneCommand ): Promise<boolean>;

    changeCustomerEmail( data: IChangeCustomerEmailCommand ): Promise<boolean>;

}