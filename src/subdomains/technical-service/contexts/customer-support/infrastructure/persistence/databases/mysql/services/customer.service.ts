import { Injectable } from "@nestjs/common/";
import { CustomerDomainEntityBase } from "src/subdomains/technical-service/contexts/customer-support/domain/entities/invoice";
import { ICustomerDomainService } from '../../../../../domain/services/invoice/customer.domain-service';
import { CustomerRepository } from '../repositories/customer.repository';
import { ICustomerDomainEntity } from '../../../../../domain/entities/interfaces/invoice/customer.domain-entity.interface';

@Injectable()
export class CustomerMySqlService implements ICustomerDomainService {

    constructor(
        private readonly customerRepository: CustomerRepository
    ) { }

   
    /**
     * Updates the customer phone number
     *
     * @param {CustomerDomainEntityBase} data
     * @return {*}  {Promise<boolean>}
     * @memberof CustomerMySqlService
     */
    ChangeCustomerPhone(data: CustomerDomainEntityBase): Promise<ICustomerDomainEntity> {
        return this.customerRepository.update(data);
    }


    /**
     * Updates the customer email address
     *
     * @param {CustomerDomainEntityBase} data
     * @return {*}  {Promise<boolean>}
     * @memberof CustomerMySqlService
     */
    ChangeCustomerEmail(data: CustomerDomainEntityBase): Promise<ICustomerDomainEntity>  {
        return this.customerRepository.update(data);
    }

}