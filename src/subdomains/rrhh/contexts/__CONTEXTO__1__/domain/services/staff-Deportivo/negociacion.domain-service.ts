import { NegociacionDomainEntity } from "../../entities";
import { IModificarEquipoNuevoCommands, IModificarEquipoSalidaCommands, IModificarStateCommands } from "../../interfaces";
import { IModificarTipoNegociacionCommands } from "../../interfaces/commands/negociacion";

export interface INegociacionDomainService <T extends NegociacionDomainEntity = NegociacionDomainEntity> {

    modificarEquipoNuevo(equipoNuevoId: IModificarEquipoNuevoCommands):Promise<T>;
    modificarEquipoSalida(equipoSalidaId: IModificarEquipoSalidaCommands):Promise<T>;
    modificarTipoNegociacion(tipo: IModificarTipoNegociacionCommands):Promise<T>;
    modificarState(state: IModificarStateCommands):Promise<T>;
    
}

