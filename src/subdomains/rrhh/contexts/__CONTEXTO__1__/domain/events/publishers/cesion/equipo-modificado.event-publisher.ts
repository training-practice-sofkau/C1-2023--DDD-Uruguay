import { EventPublisherBase } from "src/libs";
import { CesionDomainEntity } from "../../../entities/cesion/cesion.domain-entity";

export abstract class EquipoModificadoEventPublisher extends EventPublisherBase<CesionDomainEntity> {}
