import { CesionDomainEntity } from '../../entities/cesion/cesion.domain-entity';
import { ContratoDomainEntity } from '../../entities/contrato/contrato.domain-entity';
import { SecretariaDomainEntity } from '../../entities/secretaria/secretaria.domain-entity';
import { TraspasoDomainEntity } from '../../entities/traspaso/traspaso.domain-entity';
import { IModificarFechaCommands , INegociarCesionCommands, INegociarContratoCommands, INegociarTraspasoCommands } from '../../interfaces';
import { ICrearSecretariaCommands } from '../../interfaces/commands/secretaria/crear-secretaria.commands.interface';
import { IModificarEquipoCommands } from '../../interfaces/commands/shared/modificar-equipo-nuevo.commands.interface';
import { IModificarCostoCommands } from '../../interfaces/commands/traspaso/modificar-costo.commands.interface';
import { IModificarStateCommands } from '../../interfaces/commands/negociacion/modificar-state.commands';

export interface ISecretariaDomainService{


    CrearSecretaria(secretaria: ICrearSecretariaCommands):Promise<SecretariaDomainEntity>;


    NegociarCesion(cesion: INegociarCesionCommands):Promise<CesionDomainEntity>;

    NegociarContrato(contrato: INegociarContratoCommands):Promise<ContratoDomainEntity>;

    NegociarTraspaso(traspaso: INegociarTraspasoCommands):Promise<TraspasoDomainEntity>;

    //Modificar state
    ModificarStateCesion(state: IModificarStateCommands):Promise<CesionDomainEntity>;
    ModificarStateTraspaso(state: IModificarStateCommands):Promise<TraspasoDomainEntity>;
    ModificarStateContrato(state: IModificarStateCommands):Promise<ContratoDomainEntity>;

    //Modificar Costo
    ModificarCostoCesion(Costo: IModificarCostoCommands):Promise<CesionDomainEntity>;
    ModificarCostoTraspaso(Costo: IModificarCostoCommands):Promise<TraspasoDomainEntity>;
    ModificarCostoContrato(Costo: IModificarCostoCommands):Promise<ContratoDomainEntity>;

    //Modificar Fecha
    ModificarFechaSalidaCesion(fecha: IModificarFechaCommands):Promise<CesionDomainEntity>;
    ModificarFechaRetornoCesion(fecha: IModificarFechaCommands):Promise<CesionDomainEntity>;
    
    ModificarFechaSalidaTraspaso(fecha: IModificarFechaCommands):Promise<TraspasoDomainEntity>;
    ModificarFechaSalidaContrato(fecha: IModificarFechaCommands):Promise<ContratoDomainEntity>;
    
    //Modificar Equipo
    ModificarEquipoCesion(equipo: IModificarEquipoCommands):Promise<CesionDomainEntity>;
    ModificarEquipoTraspaso(equipo: IModificarEquipoCommands):Promise<TraspasoDomainEntity>;



}
