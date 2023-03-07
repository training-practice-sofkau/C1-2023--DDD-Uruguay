import { EventPublisherBase } from "src/libs";
import { NegociacionDomainEntity } from "../../../entities";

export abstract class StateModificadoEventPublisher extends EventPublisherBase<NegociacionDomainEntity>  {}
