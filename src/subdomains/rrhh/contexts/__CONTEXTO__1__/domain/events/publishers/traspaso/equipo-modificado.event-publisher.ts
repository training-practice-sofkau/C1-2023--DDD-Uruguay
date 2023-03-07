import { EventPublisherBase } from "src/libs";
import { TraspasoDomainEntity } from '../../../entities/traspaso/traspaso.domain-entity';

export abstract class EquipoModificadoEventPublisher extends EventPublisherBase<TraspasoDomainEntity> {}
