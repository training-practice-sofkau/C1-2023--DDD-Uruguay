import { IsString, IsUUID } from "class-validator";
import { IUpdateNombreMethod } from "src/subdomains/-venta_web-/contexts/-Web-Context-/domain/interfaces/commands/membership";

export class IUpdateNombreCommand implements IUpdateNombreMethod {

    @IsUUID()
    idPlan: string;

    @IsString()
    nombrePlan: string;
    
}