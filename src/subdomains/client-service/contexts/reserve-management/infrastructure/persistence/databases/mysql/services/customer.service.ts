import { Injectable } from "@nestjs/common";
import { ICustomerDomainService } from "../../../../../domain";
import { CustomerMySqlEntity } from "../entities";
import { CustomerRepository } from '../repositories';

@Injectable()
export class CustomerMySqlService
    implements ICustomerDomainService<CustomerMySqlEntity> {

    constructor(
        private readonly customerRepository: CustomerRepository,
    ) { }

    updatePaymentMethod(entity: CustomerMySqlEntity): Promise<CustomerMySqlEntity> {
        return this.customerRepository.update(entity.customerId, entity);
    }

}