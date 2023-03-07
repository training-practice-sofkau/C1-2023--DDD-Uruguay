import { EventPublisherBase } from "src/libs";
import { SecretariaDomainEntity } from "../../../entities/secretaria/secretaria.domain-entity";

export abstract class secretariaCreadaEventPublisher extends EventPublisherBase<SecretariaDomainEntity>{}
