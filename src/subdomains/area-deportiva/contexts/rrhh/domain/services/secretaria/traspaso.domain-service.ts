import { TraspasoDomainEntity } from '../../entities/traspaso/traspaso.domain-entity';
import { IModificarCostoCommands, IModificarFechaCommands, IModificarStateCommands } from '../../interfaces';
import { IModificarEquipoCommands } from '../../interfaces/commands/shared/modificar-equipo-nuevo.commands.interface';

export interface ITraspasoDomainService<T extends TraspasoDomainEntity = TraspasoDomainEntity> {

    TraspasoModificarCosto(costo: IModificarCostoCommands):Promise<T>;
    TraspasoModificarFechaSalida(fechaSalida: IModificarFechaCommands):Promise<T>;
    TraspasoModificarEquipoNuevo(equipoNuevoId:IModificarEquipoCommands ):Promise<T>;
    TraspasoModificarEquipoSalida(equipoSalidaId: IModificarEquipoCommands):Promise<T>;
    TraspasoModificarState(state: IModificarStateCommands):Promise<T>;
    
}
