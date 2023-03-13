
import { CesionDomainEntity } from '../../../entities/cesion/cesion.domain-entity';
import { ISecretariaDomainService } from '../../../services/secretaria/secretaria.domain-service';
import { AggregateRootException } from 'src/libs';
import { ContratoBuscadaEventPublisher } from '../../../events/publishers/secretaria/contrato-buscado.event-publisher';
import { ContratoDomainEntity } from '../../../entities/contrato/contrato.domain-entity';

export const BuscarContratoHelper = async (
    entity: ContratoDomainEntity,
    service?: ISecretariaDomainService,
    event?: ContratoBuscadaEventPublisher,
):Promise<ContratoDomainEntity> => { 
    if(!service)
    throw new AggregateRootException('Servicio Secretaria indefinido')

    if(!event) throw new AggregateRootException('Evento buscar contrato indefinido');

    const result = await service.BuscarContrato(entity);
    event.response = result;
    event.publish();
    return result;

}