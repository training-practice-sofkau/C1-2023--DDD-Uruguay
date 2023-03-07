import { EmployeeStatusChangedEventPublisherBase } from "../../../../../events/publishers/employee";
import { IEmployeeDomainService } from "../../../../../services/employee";
import { IChangeEmployeeStatusCommand } from '../../../../../interfaces/commands/employee';

export const ChangeEmployeeStatus = async (
    data: IChangeEmployeeStatusCommand,
    employeeService: IEmployeeDomainService,
    employeeStatusChangedEventPublisherBase: EmployeeStatusChangedEventPublisherBase
): Promise<boolean> => {

    const result = await employeeService.ChangeEmployeeEmail(data);
    employeeStatusChangedEventPublisherBase.response = result;
    employeeStatusChangedEventPublisherBase.publish();

    return result;
}