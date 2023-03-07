import { EventPublisherBase } from "src/libs";
import { CesionDomainEntity } from "../../../entities/cesion/cesion.domain-entity";

export abstract class FechaModificadaEventPublisher extends EventPublisherBase<CesionDomainEntity> {}
