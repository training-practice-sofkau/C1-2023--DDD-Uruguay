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


    
    //contrato
    ModificarStateContrato(state: IModificarStateCommands):Promise<ContratoDomainEntity>;
    ModificarCostoContrato(Costo: IModificarCostoCommands):Promise<ContratoDomainEntity>;
    ModificarFechaSalidaContrato(fecha: IModificarFechaCommands):Promise<ContratoDomainEntity>;
    
    //cesion
    ModificarStateCesion(state: IModificarStateCommands):Promise<CesionDomainEntity>;
    ModificarCostoCesion(Costo: IModificarCostoCommands):Promise<CesionDomainEntity>;
    ModificarFechaSalidaCesion(fecha: IModificarFechaCommands):Promise<CesionDomainEntity>;
    ModificarFechaRetornoCesion(fecha: IModificarFechaCommands):Promise<CesionDomainEntity>;
    ModificarEquipoSalidaCesion(equipo: IModificarEquipoCommands):Promise<CesionDomainEntity>;
    ModificarEquipoNuevoCesion(equipo: IModificarEquipoCommands):Promise<CesionDomainEntity>;
    
    
    //traspaso
    ModificarStateTraspaso(state: IModificarStateCommands):Promise<TraspasoDomainEntity>;
    ModificarCostoTraspaso(Costo: IModificarCostoCommands):Promise<TraspasoDomainEntity>;
    ModificarFechaSalidaTraspaso(fecha: IModificarFechaCommands):Promise<TraspasoDomainEntity>;
    ModificarEquipoNuevoTraspaso(equipo: IModificarEquipoCommands):Promise<TraspasoDomainEntity>;
    ModificarEquipoSalidaTraspaso(equipo: IModificarEquipoCommands):Promise<TraspasoDomainEntity>;



}
