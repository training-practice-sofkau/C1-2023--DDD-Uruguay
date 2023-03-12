import { ContratoDomainEntity } from '../../entities/contrato/contrato.domain-entity';
import { IModificarCostoCommands, IModificarFechaCommands, IModificarStateCommands } from '../../interfaces';

export interface IContratoDomainService<T extends ContratoDomainEntity = ContratoDomainEntity> {

    modificarCosto(costo: IModificarCostoCommands):Promise<T>;
    modificarFechaSalida(fechaSalida: IModificarFechaCommands):Promise<T>;
    modificarState(state: IModificarStateCommands):Promise<T>;
    
}
