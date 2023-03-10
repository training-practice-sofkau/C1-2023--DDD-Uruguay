import { CursoDomainEntity } from "../entities";
import { IUpdateCostoMethod } from "../interfaces/commands/compra/curso/updateCosto.command";

export interface ICursoService {

    updateCosto(data : IUpdateCostoMethod) : Promise<CursoDomainEntity> //Utilizo la interface de Command
}
