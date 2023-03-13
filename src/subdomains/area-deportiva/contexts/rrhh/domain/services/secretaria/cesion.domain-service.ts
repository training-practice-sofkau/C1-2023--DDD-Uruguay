import { CesionDomainEntity } from '../../entities/cesion/cesion.domain-entity';
import { IModificarCostoCommands,IModificarStateCommands } from '../../interfaces';
import { IModificarEquipoCommands } from '../../interfaces/commands/shared/modificar-equipo-nuevo.commands.interface';
import { IModificarFechaCommands } from '../../interfaces/commands/shared/modificar-fecha.commands';

export interface ICesionDomainService<T extends CesionDomainEntity = CesionDomainEntity> {

    CesionModificarCosto(costo: IModificarCostoCommands):Promise<T>;
    CesionModificarFechaSalida(fechaSalida: IModificarFechaCommands):Promise<T>;
    CesionModificarFechaRetorno(fechaRetorno: IModificarFechaCommands):Promise<T>;
    CesionModificarEquipoNuevo(equipoNuevoId: IModificarEquipoCommands):Promise<T>;
    CesionModificarEquipoSalida(equipoSalidaId: IModificarEquipoCommands):Promise<T>;
    CesionModificarState(state: IModificarStateCommands):Promise<T>;
    
    
}
