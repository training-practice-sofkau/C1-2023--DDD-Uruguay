import { ContratoDomainEntity } from '../../entities/contrato/contrato.domain-entity';
import { IModificarCostoCommands, IModificarFechaSalidaCommands, IModificarStateCommands } from '../../interfaces';

export interface IContratoDomainService<T extends ContratoDomainEntity = ContratoDomainEntity> {

    modificarCosto(costo: IModificarCostoCommands):Promise<T>;
    modificarFechaSalida(fechaSalida: IModificarFechaSalidaCommands):Promise<T>;
    modificarState(state: IModificarStateCommands):Promise<T>;
    
}
