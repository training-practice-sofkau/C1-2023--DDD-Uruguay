
export interface CursoService {

    updateCosto(idCurso : string, costo : number) : Promise<number>
}
