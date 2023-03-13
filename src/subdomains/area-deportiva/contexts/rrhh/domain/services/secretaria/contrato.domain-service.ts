import { ContratoDomainEntity } from '../../entities/contrato/contrato.domain-entity';
import { IModificarCostoCommands, IModificarFechaCommands, IModificarStateCommands } from '../../interfaces';

export interface IContratoDomainService<T extends ContratoDomainEntity = ContratoDomainEntity> {

    ContratoModificarCosto(costo: IModificarCostoCommands):Promise<T>;
    ContratoModificarFechaSalida(fechaSalida: IModificarFechaCommands):Promise<T>;
    ContratoModificarState(state: IModificarStateCommands):Promise<T>;
    
}
