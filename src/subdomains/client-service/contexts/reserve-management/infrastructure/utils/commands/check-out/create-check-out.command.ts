import { IsDate, IsString, IsUUID } from "class-validator";
import { ICreateCheckOut } from "../../../../domain";

export class ICreateCheckOutCommand implements ICreateCheckOut {

    @IsUUID()
    checkOutId: string;

    @IsDate()
    endDate: Date;

    @IsString()
    recepsionistName: string;

    @IsString()
    invoiceId: string;

    @IsString()
    consumptionId: string;
}