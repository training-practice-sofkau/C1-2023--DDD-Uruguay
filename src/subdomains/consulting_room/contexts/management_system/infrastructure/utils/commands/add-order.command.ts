import { IsDate, IsNumber, IsObject, IsString, IsUUID } from "class-validator";
import { IAddClientCommand, IAddOrderCommand } from "../../../domain";
import { IAddInvoiceCommand } from "../../../domain/interfaces/commands/add-invoice.command";

export class AddOrderCommand implements IAddOrderCommand {

    @IsUUID()
    orderId?: string;
    
    @IsString()
    description?: string;

    @IsNumber()
    date?: number;
    
    @IsObject()
    client: IAddClientCommand;

    @IsObject()
    invoice: IAddInvoiceCommand;
    
}