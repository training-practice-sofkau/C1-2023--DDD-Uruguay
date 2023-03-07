import { CursoDomainEntity } from "../../../entities/compra/curso.domain-entity";

export interface ICreateCursoMethod {

    idCurso: string;
    nombreCurso: string;
    nombreTeacher: string;
    costoCurso: number;

    //newCurso : CursoDomainEntity;
                    
}