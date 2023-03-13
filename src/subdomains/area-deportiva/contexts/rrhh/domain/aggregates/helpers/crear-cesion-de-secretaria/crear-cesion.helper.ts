
import { AggregateRootException } from 'src/libs';
import { CesionDomainEntity } from '../../../entities/cesion/cesion.domain-entity';

import { ICesionDomainService } from '../../../services/secretaria/cesion.domain-service';
import { CesionNegociadoEventPublisher } from '../../../events/publishers';

export const CrearCesionHelper = async (
    entity: CesionDomainEntity,
    service?: ICesionDomainService,
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