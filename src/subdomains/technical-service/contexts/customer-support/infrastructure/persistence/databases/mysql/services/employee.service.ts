import { Injectable } from "@nestjs/common";
import { EmployeeDomainEntityBase } from "../../../../../domain/entities/employee/employee.domain-entity";
import { IEmployeeDomainService } from '../../../../../domain/services/employee/employee.domain-service';
import { EmployeeRepository as EmployeeRepository } from "../repositories";
import { EmployeeMySqlEntity } from '../entities/employee.entity';

@Injectable()
export class EmployeeMySqlService implements IEmployeeDomainService{

    constructor(
        private readonly employeeRepository: EmployeeRepository
    ){}

    /**
     * Creates a new Employee Entity in DB
     *
     * @param {EmployeeDomainEntityBase} employeeData
     * @return {*}  {Promise<EmployeeDomainEntityBase>}
     * @memberof EmployeeMySqlService
     */
    async CreateEmployee(employeeData: EmployeeDomainEntityBase): Promise<EmployeeDomainEntityBase> {
        return await this.employeeRepository.create(employeeData as EmployeeMySqlEntity);
    }


    /**
     * Updates employee email
     *
     * @param {EmployeeDomainEntityBase} data
     * @return {*}  {Promise<boolean>}
     * @memberof EmployeeMySqlService
     */
    async ChangeEmployeeEmail(data: EmployeeDomainEntityBase): Promise<boolean>  {
        
        if(this.employeeRepository.update(data as EmployeeMySqlEntity)) return await true;

        return false;
    }


    /**
     * Updates employee Status
     *
     * @param {EmployeeDomainEntityBase} data
     * @return {*}  {Promise<boolean>}
     * @memberof EmployeeMySqlService
     */
    async ChangeEmployeeStatus(data: EmployeeDomainEntityBase): Promise<boolean> {
       
        if(this.employeeRepository.update(data as EmployeeMySqlEntity)) return await true;

        return false;
    }
   
    
}