
import { ISecretariaDomainService } from '../../../services/secretaria/secretaria.domain-service';
import { AggregateRootException } from 'src/libs';
import { CesionDomainEntity } from '../../../entities/cesion/cesion.domain-entity';
import { CesionNegociadoEventPublisher } from '../../../events';

export const CrearCesionHelper = async (
    entity: CesionDomainEntity,
    service?: ISecretariaDomainService,
    event?: CesionNegociadoEventPublisher,
):Promise<CesionDomainEntity> => { 
    if(!service)
    throw new AggregateRootException('Servicio Secretaria indefinido')

    if(!event) throw new AggregateRootException('Evento negociar cesion indefinido');

    const result = await service.NegociarCesion(entity);
    event.response = result;
    event.publish();
    return result;

}