import { Injectable } from "@nestjs/common/";
import { CustomerDomainEntityBase } from "src/subdomains/technical-service/contexts/customer-support/domain/entities/invoice";
import { ICustomerDomainService } from '../../../../../domain/services/invoice/customer.domain-service';
import { CustomerRespository } from '../repositories/customer.repository';

@Injectable()
export class CustomerMySqlService implements ICustomerDomainService {

    constructor(
        private readonly customerRepository: CustomerRespository
    ) { }

    ChangeCustomerPhone(data: CustomerDomainEntityBase): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    ChangeCustomerEmail(data: CustomerDomainEntityBase): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}