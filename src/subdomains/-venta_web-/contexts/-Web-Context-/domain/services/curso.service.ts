import { IUpdateCostoMethod } from "../interfaces/commands/compra/curso/updateCosto.command";

export interface ICursoService {

    updateCosto(data : IUpdateCostoMethod) : Promise<number> //Utilizo la interface de Command
}
