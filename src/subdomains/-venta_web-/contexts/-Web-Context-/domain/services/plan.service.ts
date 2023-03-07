import { IUpdateCostoMethod } from "../interfaces/commands/compra/curso/updateCosto.command"
import { IUpdateNombreMethod } from "../interfaces/commands/membership/plan/updateNombre.command"


export interface IPlanService {

    //updateNombre(idPlan : string, nombre : string) : Promise<string>
    //updateCosto(idPlan : string, costo : number) : Promise<number>
    
    updateNombre(data : IUpdateNombreMethod) : Promise<string> //Utilizo la interface de Command
    updateCosto(data : IUpdateCostoMethod) : Promise<number>

}
