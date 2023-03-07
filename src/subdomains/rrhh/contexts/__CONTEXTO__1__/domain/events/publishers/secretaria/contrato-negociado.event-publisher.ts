import { EventPublisherBase } from "src/libs";
import { SecretariaDomainEntity } from "../../../entities/secretaria/secretaria.domain-entity";

export abstract  class ContratoNegociadoEventPublisher extends EventPublisherBase<SecretariaDomainEntity> {}
