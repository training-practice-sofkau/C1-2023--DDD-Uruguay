import { Injectable } from "@nestjs/common";
import { EmployeeMySqlService } from "../databases/mysql/services/employee.service";

@Injectable()
export class EmployeeService extends EmployeeMySqlService {}