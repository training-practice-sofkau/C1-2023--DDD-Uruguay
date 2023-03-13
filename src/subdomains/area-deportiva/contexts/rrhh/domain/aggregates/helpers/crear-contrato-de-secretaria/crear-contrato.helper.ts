import { ISecretariaDomainService } from '../../../services/secretaria/secretaria.domain-service';
import { AggregateRootException } from 'src/libs';
import { ContratoDomainEntity } from '../../../entities/contrato/contrato.domain-entity';
import { ContratoNegociadoEventPublisher } from '../../../events';

export const CrearContratoHelper = async (
    entity: ContratoDomainEntity,
    service?: ISecretariaDomainService,
    event?: ContratoNegociadoEventPublisher,
):Promise<ContratoDomainEntity> => { 
    if(!service)
    throw new AggregateRootException('Servicio Secretaria indefinido')

    if(!event) throw new AggregateRootException('Evento negociar contrato indefinido');

    const result = await service.NegociarContrato(entity);
    event.response = result;
    event.publish();
    return result;

}