import { CesionDomainEntity } from '../../entities/cesion/cesion.domain-entity';
import { IModificarCostoCommands, IModificarEquipoNuevoCommands, IModificarEquipoSalidaCommands, IModificarFechaRetornoCommands, IModificarFechaSalidaCommands, IModificarStateCommands } from '../../interfaces';

export interface ICesionDomainService<T extends CesionDomainEntity = CesionDomainEntity> {

    modificarCosto(costo: IModificarCostoCommands):Promise<T>;
    modificarFechaSalida(fechaSalida: IModificarFechaSalidaCommands):Promise<T>;
    modificarFechaRetorno(fechaRetorno: IModificarFechaRetornoCommands):Promise<T>;
    modificarEquipoNuevo(equipoNuevoId: IModificarEquipoNuevoCommands):Promise<T>;
    modificarEquipoSalida(equipoSalidaId: IModificarEquipoSalidaCommands):Promise<T>;
    modificarState(state: IModificarStateCommands):Promise<T>;
    
    
}
