
export interface  CuponService {

    updatePorcentaje(idCupon : string, porcentaje : number) : Promise<number>
}
