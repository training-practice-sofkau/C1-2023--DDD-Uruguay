
export interface CursoService {

    updateCosto(idCosto : string, costo : number) : Promise<number>
}
