import { CesionDomainEntity } from '../../entities/cesion/cesion.domain-entity';
import { IModificarCostoCommands, IModificarEquipoNuevoCommands, IModificarEquipoSalidaCommands, IModificarFechaRetornoCommands, IModificarFechaSalidaCommands, IModificarStateCommands } from '../../interfaces';
import { IModificarFechaCommands } from '../../interfaces/commands/shared/modificar-fecha.commands';

export interface ICesionDomainService<T extends CesionDomainEntity = CesionDomainEntity> {

    modificarCosto(costo: IModificarCostoCommands):Promise<T>;
    modificarFechaSalida(fechaSalida: IModificarFechaCommands):Promise<T>;
    modificarFechaRetorno(fechaRetorno: IModificarFechaCommands):Promise<T>;
    modificarEquipoNuevo(equipoNuevoId: IModificarEquipoNuevoCommands):Promise<T>;
    modificarEquipoSalida(equipoSalidaId: IModificarEquipoSalidaCommands):Promise<T>;
    modificarState(state: IModificarStateCommands):Promise<T>;
    
    
}
