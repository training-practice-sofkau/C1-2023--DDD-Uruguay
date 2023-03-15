import { IsUUID } from "class-validator/types/decorator/decorators";
import { IObtenerPlanMethod } from "src/subdomains/-venta_web-/contexts/-Web-Context-/domain/interfaces/commands/membership";


export class IObtenerPlanCommand implements IObtenerPlanMethod {

    @IsUUID()
    idPlan?: string;
    
         
}