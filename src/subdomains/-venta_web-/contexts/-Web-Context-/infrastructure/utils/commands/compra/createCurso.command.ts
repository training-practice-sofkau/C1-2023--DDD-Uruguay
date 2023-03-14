import { IsString } from "class-validator/types/decorator/decorators";
import { ICreateCursoMethod } from "../../../../domain/interfaces";


export class ICreateCursoCommand implements ICreateCursoMethod{

    @IsString()
    idCurso: string;

    @IsString()
    nombreCurso: string;

    @IsString()
    nombreTeacher: string;

    @IsString()
    costoCurso: number;

    //@IsUUID()
                    
}