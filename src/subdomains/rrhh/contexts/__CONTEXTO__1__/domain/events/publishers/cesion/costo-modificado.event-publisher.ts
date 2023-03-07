import { EventPublisherBase } from "src/libs";
import { CesionDomainEntity } from "../../../entities/cesion/cesion.domain-entity";

export abstract class CostoModificadoEventPublisher extends EventPublisherBase<CesionDomainEntity>{}
