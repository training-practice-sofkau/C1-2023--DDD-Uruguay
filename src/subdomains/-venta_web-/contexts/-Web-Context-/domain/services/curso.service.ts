import { CursoDomainEntity } from "../entities";
import { ICreateCursoMethod } from "../interfaces";
import { IUpdateCostoMethod } from "../interfaces/commands/compra/curso/updateCosto.command";

export interface ICursoService <T extends CursoDomainEntity =  CursoDomainEntity>{

    updateCosto(data : IUpdateCostoMethod) : Promise<CursoDomainEntity>;

    createCurso(curso : ICreateCursoMethod) : Promise<CursoDomainEntity>;

    obtnerCurso(course : string) : Promise<CursoDomainEntity>;


}
