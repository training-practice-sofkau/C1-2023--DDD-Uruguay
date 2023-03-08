import { CesionDomainEntity } from '../../entities/cesion/cesion.domain-entity';
import { IModificarCostoCommands, IModificarEquipoNuevoCommands, IModificarEquipoSalidaCommands, IModificarFechaRetornoCommands, IModificarFechaSalidaCommands, IModificarStateCommands } from '../../interfaces';
import { IModificarEquipoCommands } from '../../interfaces/commands/shared/modificar-equipo-nuevo.commands.interface';
import { IModificarFechaCommands } from '../../interfaces/commands/shared/modificar-fecha.commands';

export interface ICesionDomainService<T extends CesionDomainEntity = CesionDomainEntity> {

    modificarCosto(costo: IModificarCostoCommands):Promise<T>;
    modificarFechaSalida(fechaSalida: IModificarFechaCommands):Promise<T>;
    modificarFechaRetorno(fechaRetorno: IModificarFechaCommands):Promise<T>;
    modificarEquipoNuevo(equipoNuevoId: IModificarEquipoCommands):Promise<T>;
    modificarEquipoSalida(equipoSalidaId: IModificarEquipoCommands):Promise<T>;
    modificarState(state: IModificarStateCommands):Promise<T>;
    
    
}
