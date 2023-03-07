import { EventPublisherBase } from "src/libs";
import { NegociacionDomainEntity } from "../../../entities";

export abstract class TipoDeNegociacionModificadoEventPublisher extends EventPublisherBase<NegociacionDomainEntity>  {}
