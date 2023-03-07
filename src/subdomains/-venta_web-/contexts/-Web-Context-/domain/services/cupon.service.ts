import { IUpdatePorcentajeMethod } from "../interfaces/commands/compra/cupon/updatePorcentaje.command";

export interface  ICuponService {

    updatePorcentaje(data : IUpdatePorcentajeMethod) : Promise<number> //Utilizo la interface de Command

}
