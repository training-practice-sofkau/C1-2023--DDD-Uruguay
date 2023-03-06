import { EventPublisherBase } from '../../../../../../../../libs/sofka/bases/event-publisher.base';
import { EmpleadoDomainEntity } from '../../../entities/empleado/EmpleadoDomainEntity';

export abstract class DocumentoModificadoEventPublisher extends EventPublisherBase<EmpleadoDomainEntity> {
   
}
