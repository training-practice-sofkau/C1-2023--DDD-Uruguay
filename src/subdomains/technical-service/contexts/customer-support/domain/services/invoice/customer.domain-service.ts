export interface ICustomerDomainService {

    changeCustomerPhone( ): Promise<boolean>;

    changeCustomerEmail( ): Promise<boolean>;

}