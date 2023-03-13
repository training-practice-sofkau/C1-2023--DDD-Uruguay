
import { AggregateRootException } from 'src/libs';
import { CesionDomainEntity } from '../../../entities/cesion/cesion.domain-entity';
import { ICesionDomainService } from '../../../services/secretaria/cesion.domain-service';
import { EquipoSalidaModificadoEventPublisher } from '../../../events/publishers/negociacion/equipo-salida-modificado.event-publisher';
export const  ModificarEquipoSalidaDeCesionHelper = async (
    entity: CesionDomainEntity,
    service?: ICesionDomainService,
    event?: EquipoSalidaModificadoEventPublisher,
):Promise<CesionDomainEntity> => { 
    
    if(!service)
    throw new AggregateRootException('Servicio Cesion indefinido')

    if(!event) throw new AggregateRootException('Evento modificar equipo de salida de cesion indefinido');

    const result = await service.CesionModificarEquipoSalida(entity);
    event.response = result;
    event.publish();
    return result;

}