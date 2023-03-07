import { EventPublisherBase } from "src/libs";
import { SecretariaDomainEntity } from "../../../entities/secretaria/secretaria.domain-entity";

export abstract class CesionNegociadoEventPublisher extends EventPublisherBase<SecretariaDomainEntity>{}
