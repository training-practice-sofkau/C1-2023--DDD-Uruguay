

export interface PlanService {

    updateNombre(idPlan : string, nombre : string) : Promise<string>
    updateCosto(idPlan : string, costo : number) : Promise<number>

}
