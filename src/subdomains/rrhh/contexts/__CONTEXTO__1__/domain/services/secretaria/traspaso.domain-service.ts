import { TraspasoDomainEntity } from '../../entities/traspaso/traspaso.domain-entity';
import { IModificarCostoCommands, IModificarFechaCommands, IModificarStateCommands } from '../../interfaces';
import { IModificarEquipoCommands } from '../../interfaces/commands/shared/modificar-equipo-nuevo.commands.interface';

export interface ITraspasoDomainService<T extends TraspasoDomainEntity = TraspasoDomainEntity> {

    modificarCosto(costo: IModificarCostoCommands):Promise<T>;
    modificarFechaSalida(fechaSalida: IModificarFechaCommands):Promise<T>;
    modificarEquipoNuevo(equipoNuevoId:IModificarEquipoCommands ):Promise<T>;
    modificarEquipoSalida(equipoSalidaId: IModificarEquipoCommands):Promise<T>;
    modificarState(state: IModificarStateCommands):Promise<T>;
    
}
