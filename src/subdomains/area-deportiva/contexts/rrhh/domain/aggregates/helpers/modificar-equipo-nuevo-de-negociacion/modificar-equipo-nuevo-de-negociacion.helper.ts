import { NegociacionDomainEntity } from '../../../entities/negociacion/negociacion.domain-entity';
import { INegociacionDomainService } from '../../../services/staff-Deportivo/negociacion.domain-service';
import { EquipoNuevoModificadoEventPublisher } from '../../../events/publishers/negociacion/equipo-nuevo-modificado.event-publisher';
import { AggregateRootException } from 'src/libs';

export const ModificarEquipoNuevoDeNegociacionHelper = async (
    entity: NegociacionDomainEntity,
    service?: INegociacionDomainService,
    event?: EquipoNuevoModificadoEventPublisher,
):Promise<NegociacionDomainEntity> => { 
    
    if(!service)
    throw new AggregateRootException('Servicio Staff Deportivo indefinido')

    if(!event) throw new AggregateRootException('Evento creador de Staff Deportivo indefinido');

    const result = await service.NegociacionModificarEquipoNuevo(entity);
    event.response = result;
    event.publish();
    return result;

}