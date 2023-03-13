import { Injectable } from "@nestjs/common";
import { EmployeeDomainEntityBase } from "src/subdomains/technical-service/contexts/customer-support/domain/entities/employee/employee.domain-entity";
import { IEmployeeDomainService } from '../../../../../domain/services/employee/employee.domain-service';
import { EmployeeRepository as EmployeeRepository } from "../repositories";

@Injectable()
export class EmployeeMySqlService implements IEmployeeDomainService{

    constructor(
        private readonly employeeRepository: EmployeeRepository
    ){}



    CreateEmployee(employeeData: EmployeeDomainEntityBase): Promise<EmployeeDomainEntityBase> {
        throw new Error("Method not implemented.");
    }
    ChangeEmployeeEmail(data: EmployeeDomainEntityBase): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    ChangeEmployeeStatus(data: EmployeeDomainEntityBase): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

//TODO: implementar metodos
    
    
}