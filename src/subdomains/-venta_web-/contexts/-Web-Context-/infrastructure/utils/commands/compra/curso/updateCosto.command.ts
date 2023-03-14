import { IsString } from "class-validator";
import { IUpdateCostoMethod } from "src/subdomains/-venta_web-/contexts/-Web-Context-/domain";


export class IUpdateCostoCommand implements IUpdateCostoMethod {

    @IsString()
    idCurso: string;

    @IsString()
    costoCurso: number;
    
}