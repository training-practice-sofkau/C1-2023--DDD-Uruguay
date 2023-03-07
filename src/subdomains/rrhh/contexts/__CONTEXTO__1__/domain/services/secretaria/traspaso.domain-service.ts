import { TraspasoDomainEntity } from '../../entities/traspaso/traspaso.domain-entity';
import { IModificarCostoCommands, IModificarFechaSalidaCommands, IModificarStateCommands } from '../../interfaces';
import { ModificarEquipoNuevoCommands } from '../../interfaces/commands/traspaso/modificar-equipo-nuevo.commands.interface copy';
import { ModificarEquipoSalidaCommands } from '../../interfaces/commands/traspaso/modificar-equipo-salida.commands.interface';

export interface ITraspasoDomainService<T extends TraspasoDomainEntity = TraspasoDomainEntity> {

    modificarCosto(costo: IModificarCostoCommands):Promise<T>;
    modificarFechaSalida(fechaSalida: IModificarFechaSalidaCommands):Promise<T>;
    modificarEquipoNuevo(equipoNuevoId:ModificarEquipoNuevoCommands ):Promise<T>;
    modificarEquipoSalida(equipoSalidaId: ModificarEquipoSalidaCommands):Promise<T>;
    modificarState(state: IModificarStateCommands):Promise<T>;
    
}
