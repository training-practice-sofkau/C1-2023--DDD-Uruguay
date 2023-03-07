import { EventPublisherBase } from 'src/libs';
import { NegociacionDomainEntity } from '../../../entities/negociacion/negociacion.domain-entity';
export abstract class EquipoModificadoEventPublisher extends EventPublisherBase<NegociacionDomainEntity> {}
