import { EventPublisherBase } from "src/libs";
import { TraspasoDomainEntity } from "../../../entities/traspaso/traspaso.domain-entity";

export abstract class FechaModificadaEventPublisher extends EventPublisherBase<TraspasoDomainEntity> {}
