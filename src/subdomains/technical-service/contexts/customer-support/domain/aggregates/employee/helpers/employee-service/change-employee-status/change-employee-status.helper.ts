import { EmployeeStatusChangedEventPublisherBase } from "../../../../../events/publishers/employee";
import { IEmployeeDomainService } from "../../../../../services/employee";
import { IChangeEmployeeStatusCommand } from '../../../../../interfaces/commands/employee';
import { EmployeeDomainEntityBase } from "../../../../../entities/employee/employee.domain-entity";

export const ChangeEmployeeStatus = async (
    data: EmployeeDomainEntityBase,
    employeeService: IEmployeeDomainService,
    employeeStatusChangedEventPublisherBase: EmployeeStatusChangedEventPublisherBase
): Promise<boolean> => {

    const result = await employeeService.ChangeEmployeeStatus(data);
    employeeStatusChangedEventPublisherBase.response = result;
    employeeStatusChangedEventPublisherBase.publish();

    return result;
}