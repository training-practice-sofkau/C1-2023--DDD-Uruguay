import { EventPublisherBase } from "src/libs";
import { ContratoDomainEntity } from "../../../entities/contrato/contrato.domain-entity";

export abstract class CostoModificadoEventPublisher extends EventPublisherBase<ContratoDomainEntity>{}
