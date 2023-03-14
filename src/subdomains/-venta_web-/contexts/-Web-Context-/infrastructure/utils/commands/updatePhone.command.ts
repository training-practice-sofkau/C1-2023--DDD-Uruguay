import { IsString, IsUUID } from "class-validator";
import { IUpdatePhoneMethod } from "../../../domain/interfaces";

export class IUpdatePhoneCommand implements IUpdatePhoneMethod {

    @IsUUID()
    idCliente: string;

    @IsString()
    phoneCliente: string;
    
}