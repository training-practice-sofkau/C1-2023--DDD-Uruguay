import { IsString } from "class-validator";
import { IObtenerCursoMethod } from "src/subdomains/-venta_web-/contexts/-Web-Context-/domain";


export class IObtenerCursoCommand implements IObtenerCursoMethod {

    @IsString()
    idCurso?: string;
    
         
}