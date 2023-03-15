import { ISecretariaDomainService } from '../../../services/secretaria/secretaria.domain-service';
import { AggregateRootException } from 'src/libs';
import { ContratoBuscadaEventPublisher } from '../../../events/publishers/secretaria/contrato-buscado.event-publisher';
import { ContratoDomainEntity } from '../../../entities/contrato/contrato.domain-entity';
import { IContratoDomainService } from '../../../services/secretaria/contrato.domain-service';

export const BuscarContratoHelper = async (
    contratoId: string,
    service?: IContratoDomainService,
    event?: ContratoBuscadaEventPublisher,
):Promise<ContratoDomainEntity> => { 
    if(!service)
    throw new AggregateRootException('Servicio Secretaria indefinido')

    if(!event) throw new AggregateRootException('Evento buscar contrato indefinido');

    const result = await service.BuscarContrato(contratoId);
    event.response = result;
    event.publish();
    return result;

}